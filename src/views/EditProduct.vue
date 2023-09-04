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
                    <button @click="submitUpdate">Update Product</button>
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
    async submitUpdate() {
      // Pass this.updatedProduct to your updateProduct action
      const success = await this.$store.dispatch('updateProduct', this.updatedProduct);

      if (success) {
        // Product updated successfully, handle any additional logic here
      } else {
        // Product update failed, handle errors or show an error message
      }
    },
  },
    mounted() {
    this.$store.dispatch('getProduct', this.$route.params.id).then(() => {
      this.updatedProduct = { ...this.$store.state.product }; // Copy the current product data
  })
  },
}

      
      </script>
      <style>
    </style>