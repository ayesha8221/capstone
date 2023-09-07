
<template>
  <div>
    <!-- Display cart contents and total price -->
    <div v-for="product in getCart" :key="product.id">
       Name: {{ product.prodName }} -  Price: {{ product.amount }} - Quantity: {{ product.quantity }}  
      <button @click="removeFromCart(product.prodID)">Remove</button>
    </div>
    Total Price: ${{ cartTotalPrice }}
    
  </div>
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
