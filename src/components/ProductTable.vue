<template>
    <div class="container-fluid">
      <div v-show="userRole === 'Admin'">
      <div class="body" v-if="products">
        
      <div class=" table-container">
        <div class="col-12" id="hi">
                  <h1>Products</h1>
                </div>
                <div class="col">
                  <table class="table is-striped is-bordered mt-2 is-fullwidth array-listsarray-lists text-align-center"  @submit="deleteProduct">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Flavour</th>
                        <th>Quantity</th>
                        
                        <th>Edit/Delete</th>
                        <th>Add</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in products" :key="product.prodID" class="bord">
                        <td>{{ product.prodID }}</td>
                        <td><img class="tableImg" :src="product.prodUrl" alt="" /></td>
                        <td>{{ product.prodName }}</td>
                        <td>R {{ product.amount }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.flavour }}</td>
                        <td>{{ product.quantity }}</td>
                        
                        <td>
                          
                          <button>
                      <router-link :to="{ name: 'admin edit product', params: { id : product.prodID } }"> Edit </router-link>
                      </button>
                          <button
                            type="submit"
                            class="btn btton"
                            @click= deleteProduct(product.prodID)
                            id="delete-row"
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button>
                    <router-link to="/admin/add/product"> Add </router-link>
                  </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
    </div>
              
            </div>
    
    </div>
      
    </template>
    
    <script>
    
    export default {
    computed: {
    products() {
      return this.$store.state.products
    },
    userRole() {
      return this.$store.state.userRole;
    },
  },
    
    mounted() {
    this.$store.dispatch("getProducts")
    },
    methods: {
    async deleteProduct(productId) {
      const success = await this.$store.dispatch('deleteProduct', productId);

      if (success) {
        // Update the product list in your component if needed.
        this.$store.dispatch('getProducts'); // You can dispatch this if you need to refresh the product list.
      } else {
        alert('Failed to delete product. Please try again.');
      }
    },
  },
    
    
    };
    
    
    
    
    </script>
    
    <style scoped>

/* * {
  background-color: #E4C2A2;
} */
    .tableImg{
        width : 85px;
    }

table{
  width: 100%;
  background-color: #E4C2A2;
}

tbody {
  text-align: center;
  background-color: #E4C2A2;
  
}

thead {
  color: #3C6866;
text-align: center;
font-family: Inter;
font-size: 35px;
/* font-style: italic; */
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 1px #5a3009;
}

th, td, tr {
  /* border: solid black; */
  border: 2px solid #995C23;
background: #E4C2A2;
}

td {
  font-weight: 600;
  color: #462507;
}
    
    </style>