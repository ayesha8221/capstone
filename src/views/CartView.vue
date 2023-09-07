
<template>
  <div>
    <!-- Display cart contents and total price -->
    <!-- <div v-if="products && products.length > 0">
      Your cart is empty.
    </div>
    <div v-else> -->
      <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in getCart" :key="product.prodID">
          <td><img class="tableImg" :src="product.prodUrl" :alt="product.prodName" /></td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <button @click="removeFromCart(product.cartID)">Delete</button>
          </td>
        </tr>
        <tr>
          <td>
            <!-- <div>Total Price: R{{ cartTotalPrice }}</div> -->
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <button @click="checkout">Checkout</button>
    </div>
</div>
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
