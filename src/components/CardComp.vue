<template lang="">
    <div>
        <div class="container">
    <div class="card my-4" :style="{ backgroundColor: product.flavour }" id="body">
        <img :src="product.prodUrl" :alt="product.prodName" class="picture" />
        <h5>{{ product.prodName }}</h5>
        <p> R {{ product.amount }}</p>
        <button class="button"><router-link  :to="{ name: 'product', params: { id: product.prodID } }"> View Details
      </router-link></button>
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
  /* background:  #dab99a; */
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
  height: 500px;
  width:auto;
  text-align: center;
  justify-content: center;
  align-items: center;
}

button {
  background: #462507;
  width:140px;
  height: 40px;
  font-weight: 600;
  font-size: 18px;
  color: #E4C2A2;
  text-align: center !important;
  justify-content: center;
  align-items: center;
border: none;
}

.button:hover {
  background:#613914;
  color: #E4C2A2 ;
}

h5 {
  /* margin-left: 9%; */
  /* border: none; */
  font-size: 30px;
  color: #a46427;
text-align: center;
/* font-family: Inter; */
/* font-size: 45px; */
/* font-style: italic; */
font-weight: 700;
line-height: normal;
-webkit-text-stroke: 1px #462507;
cursor: pointer;
/* padding-bottom: 2%; */
}

p {
  color: #462507;
text-align: center;
font-size: 25px;
-webkit-text-stroke: 0.4px #462507;
}

a{
  text-decoration: none;
  color: #E4C2A2;
  -webkit-text-stroke: 0.7px #995C23;
}

@media screen and (max-width: 320px) and (max-height: 577px) {

  .container {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* align-items: flex-start; */
  }
  #body {
                width: 100% !important; /* Make the card take up the full screen width */
                margin: 0; /* Remove margins for full-width */

}

}
    
</style>