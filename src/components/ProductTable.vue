<template>
    <div class="body" v-if="products">
              <div class="row table-container">
                <div class="col-12">
                  <h1>Products</h1>
                  <button>
                    <!-- <router-link to="/"> Add Product </router-link> -->
                  </button>
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
                        <th>Quantity</th>
                        
                        <th>Edit/Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in products" :key="product.prodID" class="bord">
                        <td>{{ product.prodID }}</td>
                        <td><img class="tableImg" :src="product.prodUrl" alt="" /></td>
                        <td>{{ product.prodName }}</td>
                        <td>R {{ product.amount }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                        
                        <td>
                          
                          <!-- <button>
                          <router-link > Edit </router-link>
                          </button>
                          <button
                            type="submit"
                            class="btn btton"
                            @click= deleteProduct(product.prodID)
                            id="delete-row"
                          >
                            Delete
                          </button> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
    
    </template>
    
    <script>
    
    // import axios from 'axios'
    
    export default {
    // props: ["products"],
    computed: {
    products() {
      return this.$store.state.products
    }
    },
    
    mounted() {
    this.$store.dispatch("getProducts")
    },
    
    // methods: {
    //     async deleteProduct(id) {
    //       try {
    //         await axios.delete(`https://nodeeomp.onrender.com/products/${id}`);
    //         this.$store.dispatch("getProducts")
    //       } catch (err) {
    //         alert(err);
    //       }
    //     },
    //   },
    
    
    };
    
    
    
    
    </script>
    
    <style scoped>
    .tableImg{
        width : 85px;
    }
    
    </style>