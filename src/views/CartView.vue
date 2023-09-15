
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
import Swal from 'sweetalert2';

export default {
  name: 'setCart',
  computed: {
    getCart() {
      return this.$store.state.cart;
    },
    user() {
      return this.$store.state.userData;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  mounted() {
    this.$store.dispatch('getCart', this.user.userID);
  },
  methods: {
    removeFromCart(cartID) {
      const userID = this.user.userID;

      this.$store.dispatch('removeFromCart', { userID, cartID })
        .then(() => {
          this.showSuccessAlert();
          // Optional: Perform any additional actions after successful removal
        })
        .catch((error) => {
          console.error('Error removing item from cart:', error);
          this.showErrorAlert();
        });
    },
    showSuccessAlert() {
      Swal.fire({
        icon: 'success',
        title: 'Item removed from cart successfully!',
        showConfirmButton: false,
        timer: 1500, // Close the alert after 1.5 seconds
      });
    },
    showErrorAlert() {
      Swal.fire({
        icon: 'error',
        title: 'Failed to remove item from cart. Please try again.',
        text: 'An error occurred while removing the item from the cart.',
        background: "#995C23",
            color: "black",
      });
    },
  },
};
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

@media screen and (max-width: 320px) {

table{
  width: 100% !important;
  border-collapse: collapse;
}

 td {
  padding: 8px; /* Adjust cell padding as needed */
  text-align: left; /* Left-align table content */
  font-size: 10px !important;
}
th {
  font-size: 20px !important;
}
.tableImg {
  width: 38px;
}

.delete {
  font-size: 10px;
}
}

</style>
