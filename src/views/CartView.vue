
<template>
  <div>
    <!-- Display cart contents and total price -->
    <!-- <div v-if="products && products.length > 0">
      Your cart is empty.
    </div>
    <div v-else> -->
      <div v-for="product in getCart" :key="product.prodID">
         Name: {{ product.prodName }} - Price: {{ product.amount }} - Quantity: {{ product.quantity }}  
        <button @click="removeFromCart(product.prodID)">Remove</button>
<!-- Total Price: ${{ cartTotalPrice }} -->
<!-- <div v-if="getCart.length > 0">
  Total Price: ${{ calculateTotalPrice() }}
</div> -->

  </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
    Name: 'setCart',
    computed: {
      getCart() {
        console.log(this.$store.state.cart);
        return this.$store.state.cart
      },
      user(){
        return this.$store.state.userData
      }
    },
    mounted() {
      this.$store.dispatch('getCart', this.user.userID)
    }
}
</script>

<!-- <template>
    <div>

<h1>Your Cart</h1>

      <ul>
        <li v-for="cartItem in cartItems" :key="cartItem.product.prodID">
          {{ cartItem.product.prodName }} - Quantity: {{ cartItem.quantity }}
        </li>
      </ul>
      
      <button @click="clearCart">Checkout</button>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['cart']), // Map the 'cart' state
    },
    methods: {
      addToCart(product) {
        this.$store.commit('addToCart', product); // Commit the 'addToCart' mutation
      },
       clearCart() {
        this.$store.commit('clearCart'); // Commit the 'clearCart' mutation
      },
    },
  };
  </script> -->
  
  








<!-- <template lang="">
    <div>
        <h1>Shopping Cart</h1>

        <ul>
            <li v-for="product in products" :key="product.prodID" >
                {{ product.prodName }} - {{ product.amount }} - {{ product.quantity }}

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style> -->