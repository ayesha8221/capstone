<template lang="">
    <div>
        <div class="container">
    <div class="card my-4" id="body">
      <router-link :to="{ name: 'product', params: { id: product.prodID } }">
        <img :src="product.prodUrl" :alt="product.prodName" class="picture" />
        <h5>{{ product.prodName }}</h5>
        <p> R {{ product.amount }}</p>
        <button v-on:click="addToCart" class="addbtn">View Details</button>
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
<style scoped>

img {
  width: 300px;
  height: auto;
  /* border: 1px solid #c59360; */
  /* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px; */
  transition: all .3s ease-in-out;
}

.card.my-4 {
  background:  #dab99a;
 border: 1px solid #c59360; 
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  /* border: none; */
}

.card.my-4:hover{
  box-shadow: rgba(80, 45, 8, 0.22) 0px 25px 43px;
  transform: translate3d(0px, -1.5px, 0px);
}

#body {
  height: 450px;
  width:auto;
  text-align: center;
}

button {
  background: #462507;
  width:120px;
  height: 40px;
  font-weight: 600;
  font-size: 18px;
  color: #E4C2A2;
text-align: center;
border: none;
}

button:hover {
  background:#613914;
}

h5 {
  color:  #3C6866;
text-align: center;
/* font-family: Inter; */
font-size: 20px;
/* font-style: italic; */
font-weight: 880;
/* line-height: normal; */
/* -webkit-text-stroke: 2px; */
text-decoration:none;
}

p {
  color:  #3C6866;
text-align: center;
font-size: 20px;
}

a{
  text-decoration: none;
}
    
</style>