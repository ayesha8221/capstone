
<template>
  <div >
    <!-- Display cart contents and total price -->
    <!-- <div v-if="products && products.length > 0">
      Your cart is empty.
    </div>
    <div v-else> -->
      <table class="container">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in getCart" :key="product.prodID">
          <td><img class="tableImg" :src="product.prodUrl" :alt="product.prodName" /></td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <button class="delete" @click="removeFromCart(product.cartID)">Delete</button>
          </td>
        </tr>
        
      </tbody>

      <button class="checkout">
        <router-link to="/checkout"> Checkout </router-link>
      </button>
            <!-- <button class="checkout" @click="checkout">Checkout</button> -->
          
    </table>
    
  </div>
<div>
      
    </div>
    

  <!-- </div> -->
</template>

<script>
export default {
    Name: 'setCart',
    computed: {
      getCart() {
        // console.log(this.$store.state.cart.cartID);
        return this.$store.state.cart
      },
      user(){
        console.log(this.$store.state.userData.userID)
        return this.$store.state.userData
      },
      cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    
    },
    
    mounted() {
      this.$store.dispatch('getCart', this.user.userID)
    },
    methods: {

    //   async checkout() {
    //   const userID = this.user.userID;

    //   try {
    //     await this.$store.dispatch("clearCart", { userID });
    //     // Clear the cart and then redirect to the login page
    //     this.$router.push(`users/${userID}/checkout`);
    //   } catch (error) {
    //     console.error("Error clearing cart:", error);
    //   }
    // },
    removeFromCart(cartID) {
    const userID = this.user.userID;
    
    this.$store.dispatch('removeFromCart', { userID, cartID })
      .then(() => {
        // Optional: Perform any additional actions after successful removal
      })
      .catch((error) => {
        console.error('Error removing item from cart:', error);
      });
  },
  },
}
</script>
<style scoped>
* {
  background-color: #E4C2A2;
}

.tableImg {
  width: 20%;
}

.container {
  margin-top: 50px;
}

table{
  width: 100%;
}

tbody {
  text-align: center;
  
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
/* background: #CAAE95; */
}

td {
  font-weight: 600;
  color: #462507;
}



.checkout {
  margin: 30px 0 30px 0 ;
  
}

.delete, .checkout {
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
}

a{
  text-decoration: none;
  background-color: #462507; 
  color: #E4C2A2;
  -webkit-text-stroke: 0.5px #995C23;
}

.delete:hover, .checkout:hover {
  background:#613914 !important;
  color: #E4C2A2 ;
}


</style>
