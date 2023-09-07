
<template>
  <div>
    <!-- Display cart contents and total price -->
    <!-- <div v-if="products && products.length > 0">
      Your cart is empty.
    </div>
    <div v-else> -->
      <div v-for="product in getCart" :key="product.prodID">
        <t-body>
          <tr>
            <th>Image</th>
            <th> Name</th>
          <th>Price</th>
          <th> Quantity</th>
          </tr>
          <tr>
            <td><img class="tableImg" :src="product.prodUrl" :alt="product.prodName" /></td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.quantity }}</td>
          </tr>
          <td></td>

          
        </t-body>
        <div>Total Price: R{{  cartTotalPrice }}</div>






         <!-- Name: {{ product.prodName }} - Price: {{ product.amount }} - Quantity: {{ product.quantity }}   -->
         <button @click="removeItemFromCart(product.cartID)">Remove</button>
         
         <button @click="checkout">Checkout</button>
<!-- Total Price: ${{ cartTotalPrice }} -->
  <!-- Total Price: ${{ calculateTotalPrice() }} -->
</div>


  </div>
  <!-- </div> -->
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

      checkout() {
      // Redirect to the login page
      this.$router.push('/login');
    },
    removeItemFromCart() {
  const userID = this.user.userID;
  const cartID = this.data;
  this.$store.dispatch('removeFromCart', { userID, cartID }) // Pass prodID as cartID
    .then(() => {
      this.getCart.cartID = this.$router.params.id
      console.log(cartID)
    })
    .catch((error) => {
      console.error('Error removing item from cart:', error);
    });
},
//     removeItemFromCart(userID, cartID) {
//   this.$store.dispatch('removeFromCart', { userID, cartID })
//   console.log('removeFromCart')
//     .then(() => {
//       // Optional: Display a success message or perform other actions
//     })
//     .catch((error) => {
//       console.error('Error removing item from cart:', error);
//       // Optional: Display an error message or perform error handling
//     });
// },
    // removeFromCart(cartID) {
    //   // Ensure the user is logged in
    //   if (this.userData && this.userData.userID) {
    //     this.$store.dispatch('removeFromCart', {
    //       userID: this.userData.userID,
    //       cartID,
    //     });
    //   } else {
    //     // Handle the case where the user is not logged in, prompt for login, etc.
    //   }
    // },
  },
}
</script>
