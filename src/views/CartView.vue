
<template>
  <div>
    <!-- Display cart contents and total price -->
    <div v-for="item in cartItems" :key="item.product.prodID">
       Name: {{ item.product.prodName }} -  Price: {{ item.product.amount }} Quantity: {{ item.quantity }} - 
      <button @click="removeFromCart(item.product.prodID)">Remove</button>
    </div>
    Total Price: ${{ cartTotalPrice }}
    
    <!-- Add products to the cart -->
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['token']),
    ...mapGetters(['cartItemCount', 'cartTotalPrice']),
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart', 'clearCart']),
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
    removeFromCart(productId) {
      this.$store.dispatch('removeFromCart', productId);
    },
  },
};
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