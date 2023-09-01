<template lang="">
    <div>
        <div class="container">
    <div class="card mx-auto my-2" id="body">
      <router-link :to="{ name: 'product', params: { id: product.prodID } }">
        <img :src="product.prodUrl" :alt="product.prodName" class="picture" />
        <h3>{{ product.prodName }}</h3>
        <p> R {{ product.amount }}</p>
        <button v-on:click="addToCart" class="addbtn">View more</button>
      </router-link>
    </div>
  </div>
    </div>
</template>
<script>
export default {
    props: ["product"],
    
}
</script>
<style lang="">
    
</style>