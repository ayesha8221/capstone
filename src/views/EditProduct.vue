<template>
  <div class="container">
    <div>
      <div v-if="product">
        <label class="label">Product Name</label>
        <br>
        <input
          class="input"
          v-model="data.prodName"
          type="text"
          :placeholder="product.prodName"
          required
        />
        <br>
        <label class="label">Quantity</label>
        <br>
        <input
          class="input"
          v-model="data.quantity"
          type="text"
          :placeholder="product.quantity"
          required
        />
        <br>
        <label class="label">Price</label>
        <br>
        <input
          class="input"
          v-model="data.amount"
          type="number"
          :placeholder="product.amount"
          required
        />
        <br>
        <label class="label">Category</label>
        <br>
        <input
          class="input" 
          v-model="data.category"
          type="text"
          :placeholder="product.category"
          required
        />
        <br>
        <label class="label">Description</label>
        <br>
        <input
          class="input" 
          v-model="data.description"
          type="text"
          :placeholder="product.description"
          required
        />
        <br>
        <label class="label">Flavour</label>
        <br>
        <input
          class="input" 
          v-model="data.flavour"
          type="text"
          :placeholder="product.flavour"
          required
        />
        <br>
        <label class="label">Image</label>
        <br>
        <input
          class="input"
          v-model="data.prodUrl"
          type="text"
          :placeholder="product.prodUrl"
          required
        />
        <br>
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

<style scoped>
.container {
    text-align: center;
   }

   button {
    background-color: #462507;
  color: #E4C2A2;
text-align: center;
font-family: Inter;
font-size: 20px;
/* font-style: italic; */
line-height: normal;
-webkit-text-stroke: 0.5px #995C23;
border: none;
padding: 3px 3px 3px 3px;
width: 80px;
margin-bottom: 1.5em;
   }

   button:hover {
  background:#613914;
  color: #E4C2A2 ;
}


   input{
    width: 80%;
    margin-bottom: 30px;
    height: 40px;
    border-radius: 10px;
    border-color: #995C23;
    background-color: rgb(249, 222, 198);
   }

   label {
    color: #3C6866 !important;
text-align: center;
font-family: Inter;
font-size: 25px;
/* font-style: italic; */
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 1px #5a3009;
margin-top: 1em;
padding-bottom: 0.3em;
   }
</style>