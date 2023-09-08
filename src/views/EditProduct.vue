<template>
    <div>
          <div>
            <div v-if="product">
            <label class="label">Product Name</label>
                    <input
                      class="input"
                      v-model="updateProduct.prodName"
                      type="text"
                      :placeholder="product.prodName"
                      required
                    />
                    <label class="label">Quantity</label>
                    <input
                      class="input"
                      v-model="updateProduct.quantity"
                      type="text"
                      :placeholder="product.quantity"
                      required
                    />
                    <label class="label">Price</label>
                    <input
                      class="input"
                      v-model="updateProduct.amount"
                      type="number"
                      :placeholder="product.amount"
                      required
                    />
                    <label class="label">Category</label>
                    <input
                      class="input"
                      v-model="updateProduct.category"
                      type="text"
                      :placeholder="product.category"
                      required
                    />
                    <label class="label">Image</label>
                    <input
                      class="input"
                      v-model="updateProduct.prodUrl"
                      type="text"
                      :placeholder="product.prodUrl"
                      required
                    />
                    <button @click="updateProduct(id.prodID)">Save Changes</button>
            </div>
            
          </div>
        </div>
      </template>
      
      <script>
      
      export default {
        computed:{
  id(){
    return this.$store.state.products
  }
        },

        data() {
    return {
      updatedProduct: {
        id: this.id,
        prodName: '', // Initialize with the current product data
        quantity: '',
        amount: '',
        category: '',
        prodUrl: '',
      },
    };
  },
  methods: {
    updateProduct() {
      // Assuming you have a form with editedProductData containing the updated product data
      this.$store
        .dispatch('editProduct', this.editedProductData)
        .then(() => {
          // Product successfully edited, you can redirect or show a success message
        })
        .catch((error) => {
          console.error('Error editing product:', error);
          console.log(error)
          // Handle the error, show an error message, or perform error handling
        });
    },
  },
  props: ["id"],
        computed: {
          product() {
            return this.$store.state.product;
          },
      //     id() {
      //   return this.$route.params.id
      // },
        },
        // mounted() {
        //   this.$store.dispatch("getProduct", this.id),
        //   this.$store.dispatch("getProducts");
        // },
        mounted() {
  console.log('Route params:', this.$route.params);
  const productId = this.$route.params.id;
  console.log('Product ID:', productId);
  this.$store.dispatch("getProduct", this.id),
          this.$store.dispatch("getProducts");
}
}

      
      </script>
      <style>
    </style>