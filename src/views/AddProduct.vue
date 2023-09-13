<template lang="">
    <div>
      <div>
        <label class="label">Product Name</label>
                <input
                  class="input"
                  v-model="prodName"
                  type="text"
                  placeholder="Product Name"
                  required
                />
                <label class="label">Quantity</label>
                <input
                  class="input"
                  v-model="quantity"
                  type="text"
                  placeholder="quantity"
                  required
                />
                <label class="label">Price</label>
                <input
                  class="input"
                  v-model="amount"
                  type="number"
                  placeholder="R"
                  required
                />
                <label class="label">Category</label>
                <input
                  class="input"
                  v-model="category"
                  type="text"
                  placeholder="category"
                  required
                />
                <label class="label">Description</label>
                <input
                  class="input"
                  v-model="description"
                  type="text"
                  placeholder="product description"
                  required
                />
                <label class="label">Flavour</label>
                <input
                  class="input"
                  v-model="flavour"
                  type="text"
                  placeholder="#000000"
                  required
                />
                <label class="label">Image</label>
                <input
                  class="input"
                  v-model="prodUrl"
                  type="text"
                  placeholder="http://"
                  required
                />
                <button
                  class="btn btn-success mt-3"
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
    <style lang="">
    
    </style>