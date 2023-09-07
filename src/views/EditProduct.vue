<template>
    <div>
          <div>
            <div v-if="product">
            <label class="label">Product Name</label>
                    <input
                      class="input"
                      v-model="product.prodName"
                      type="text"
                      placeholder="Product Name"
                      required
                    />
                    <label class="label">Quantity</label>
                    <input
                      class="input"
                      v-model="product.quantity"
                      type="text"
                      placeholder="quantity"
                      required
                    />
                    <label class="label">Price</label>
                    <input
                      class="input"
                      v-model="product.amount"
                      type="number"
                      placeholder="R"
                      required
                    />
                    <label class="label">Category</label>
                    <input
                      class="input"
                      v-model="product.category"
                      type="text"
                      placeholder="category"
                      required
                    />
                    <label class="label">Image</label>
                    <input
                      class="input"
                      v-model="product.prodUrl"
                      type="text"
                      placeholder="http://"
                      required
                    />
                    <button @click="updateProduct">Save Changes</button>
            </div>
            
          </div>
        </div>
      </template>
      
      <script>
      
      export default {

        data() {
    return {
      updatedProduct: {
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
          id() {
        return this.$route.params.id
      },
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