<template>
  <div>
    <div>
      <div v-if="product">
        <label class="label">Product Name</label>
        <input
          class="input"
          v-model="data.prodName"
          type="text"
          :placeholder="product.prodName"
          required
        />
        <label class="label">Quantity</label>
        <input
          class="input"
          v-model="data.quantity"
          type="text"
          :placeholder="product.quantity"
          required
        />
        <label class="label">Price</label>
        <input
          class="input"
          v-model="data.amount"
          type="number"
          :placeholder="product.amount"
          required
        />
        <label class="label">Category</label>
        <input
          class="input" 
          v-model="data.category"
          type="text"
          :placeholder="product.category"
          required
        />
        <label class="label">Description</label>
        <input
          class="input" 
          v-model="data.description"
          type="text"
          :placeholder="product.description"
          required
        />
        <label class="label">Flavour</label>
        <input
          class="input" 
          v-model="data.flavour"
          type="text"
          :placeholder="product.flavour"
          required
        />
        <label class="label">Image</label>
        <input
          class="input"
          v-model="data.prodUrl"
          type="text"
          :placeholder="product.prodUrl"
          required
        />
      </div>
      <button @click="updateProduct">Update Product</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        prodName: '',
        quantity: '',
        amount: '',
        category: '',
        description: '',
        flavour: '',
        prodUrl: '',
      },
    };
  },
  methods: {
    updateProduct() {
      const data = {
        id: this.product.prodID, 
        prodName: this.data.prodName,
        quantity: this.data.quantity,
        amount: this.data.amount,
        category: this.data.category,
        description: this.data.description,
        flavour: this.data.flavour,
        prodUrl: this.data.prodUrl,
      };

      // Dispatch the action to update the product
      this.$store.dispatch('updateProduct', data)
        .then(success => {
          console.log('updatedProduct', data);
          if (success) {
            this.$router.push("/admin");
            // success message
          } else {
            // failed message
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id),
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
</style>