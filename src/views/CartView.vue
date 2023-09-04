<template>
    <div>
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
      ...mapState(['cartItems']), // Map the 'cart' state
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
  </script>
  
  








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