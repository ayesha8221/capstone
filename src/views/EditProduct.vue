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
                    <button
                      class="btn btn-success mt-3"
                      @click="updateProduct"
                    >
                      Update
                    </button>
            </div>
            
          </div>
        </div>
      </template>
      
      <script>
    //   import axios from "axios";
      
      export default {
        data() {
    return {
      editedProduct: {}, // Separate data for the edited product.
    };
  },
  methods: {
    async updateProduct() {
      const success = await this.$store.dispatch('updateProduct', this.editedProduct);

      if (success) {
        // Update was successful
        alert('Product updated successfully!');
        this.$router.push('/admin');
      } else {
        // Update failed
        alert('Failed to update product. Please try again.');
      }
    },
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  watch: {
    $route(to, from) {
      if (to.params.id !== from.params.id) {
        // Route parameter changed, fetch the new product
        this.$store.dispatch('getProduct', to.params.id);
      }
    },
    product: {
      handler(newProduct) {
        // Watch for changes in the product and update the editedProduct data.
        this.editedProduct = { ...newProduct };
      },
      immediate: true, // Trigger on component load.
    },
  },
  mounted() {
    this.$store.dispatch('getProduct', this.$route.params.id);
    this.$store.dispatch('getProducts');
  },
      };
      </script>
      <style>
    </style>