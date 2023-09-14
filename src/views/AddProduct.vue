<template lang="">
    <div class="container">
      <div>
        <label class="label">Product Name</label>
        <br>
                <input
                  class="input"
                  v-model="prodName"
                  type="text"
                  placeholder="Product Name"
                  required
                />
                <br>
                <label class="label">Quantity</label>
                <br>
                <input
                  class="input"
                  v-model="quantity"
                  type="text"
                  placeholder="quantity"
                  required
                />
                <br>
                <label class="label">Price</label>
                <br>
                <input
                  class="input"
                  v-model="amount"
                  type="number"
                  placeholder="R"
                  required
                />
                <br>
                <label class="label">Category</label>
                <br>
                <input
                  class="input"
                  v-model="category"
                  type="text"
                  placeholder="category"
                  required
                />
                <br>
                <label class="label">Description</label>
                <br>
                <input
                  class="input"
                  v-model="description"
                  type="text"
                  placeholder="product description"
                  required
                />
                <br>
                <label class="label">Flavour</label>
                <br>
                <input
                  class="input"
                  v-model="flavour"
                  type="text"
                  placeholder="#000000"
                  required
                />
                <br>
                <label class="label">Image</label>
                <br>
                <input
                  class="input"
                  v-model="prodUrl"
                  type="text"
                  placeholder="http://"
                  required
                />
                <br>
                <button
                  class=" m-3"
                  @click="addProduct"
                >
                  Add
                </button>
      </div>
    </div>
    </template>
    <script>

    
    export default {
        data() {
            return {
                    prodName: '',
                    quantity: '',
                    amount: '',
                    category: '',
                    description:'',
                    flavour:'',
                    prodUrl: ''
            }
        },
        methods: {
    async addProduct() {
      const productData = {
        prodName: this.prodName,
        quantity: this.quantity,
        amount: this.amount,
        description: this.description,
        flavour: this.flavour,
        category: this.category,
        prodUrl: this.prodUrl,
      };

      const success = await this.$store.dispatch('addProduct', productData);

if (success) {
  alert('Product added successfully!');
  this.prodName = '';
  this.quantity = '';
  this.amount = '';
  this.category = '';
  this.description = '';
  this.flavour = '';
  this.prodUrl = '';
  this.$router.push('/admin');
} else {
  alert('Failed to add product. Please try again.');
}
},
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