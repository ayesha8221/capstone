<template>
  
<div>
  <div class="cont">
    <img src="https://i.postimg.cc/VLqfm845/istockphoto-637758628-2048x2048-transformed.jpg" alt="background" class="bg">
    <button class="btn"><router-link to="/products">See what we<br> have to offer</router-link></button>
    <div class="content">
    <h1>Roast & Revelry</h1>
    <p>Selecting only the finest coffee beans <br> and equipment for your convenience </p>
  </div>
  </div>
  <div class="column1">
    <!-- <img src="https://i.postimg.cc/mrJB3nqC/istockphoto-1168964829-612x612.jpg" alt="Forest"  class="beans"> -->
  
  <div class="conta">
  <img src="https://i.postimg.cc/mrJB3nqC/istockphoto-1168964829-612x612.jpg" alt="Snow" class="beans">
  <button class="bttn"><router-link to="/about">Learn More</router-link></button>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <p class="justify-content-center">
        Did you know?<br>
        Coffee Was Discovered by a Dancing Goat: According to legend, coffee was discovered by an Ethiopian goat herder named Kaldi, who noticed that his goats became unusually energetic and lively after eating coffee berries. He tried them himself and discovered the stimulating effects of coffee.
      </p>
    </div>
    <div class="carousel-item">
      <p class="justify-content-center">
        Did you know?<br>
        The World's Most Expensive Coffee: Kopi Luwak, also known as civet coffee, is one of the most expensive coffees in the world. It's made from coffee beans that have been eaten and then excreted by civet cats. The beans are cleaned, roasted, and brewed into coffee, resulting in a unique and pricey brew.
      </p>
    </div>
    <div class="carousel-item">
      <p class="justify-content-center">
        Did you know?<br>
        Coffee Can Help You Live Longer: Some studies suggest that moderate coffee consumption may be linked to a longer lifespan. So, coffee lovers have a good reason to keep enjoying their favorite brew!
      </p>
    </div>
  </div>
</div>
  </div>
</div>
<div class="featured">
  <div>
    <h4>Featured products</h4>
  </div>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="card my-4 one" id="body">
        <img src="https://i.postimg.cc/Jhxm71pC/Bodum-Kenya-French-Press-3-Cup-1024x1024-removebg-preview.png" alt="" class="picture" />
        <h5>Bodum Kenya French Press</h5>
        <button class="button"><router-link to="/products"> View Details
      </router-link></button>
    </div>
      <div class="card my-4 two" id="body">
        <img src="https://i.postimg.cc/yYZjzzcY/Bodum-Brazil-French-Press-8-Cup-Black-1024x1024-removebg-preview.png" alt="" class="picture" />
        <h5>Bodum Brazil French Press</h5>
        <button class="button"><router-link to="/products"> View Details
      </router-link></button>
    </div>
    <div class="card my-4 three" id="body">
        <img src="https://i.postimg.cc/RZQqfxgX/Hario-V60-Iced-Coffee-Maker-Hero-1024x1024-removebg-preview.png" alt="" class="picture" />
        <h5>Hario V60 Iced Coffee Maker Hero</h5>
        <button class="button"><router-link to="/products"> View Details
      </router-link></button>
    </div>
    <div class="card my-4 four" id="body">
        <img src="https://i.postimg.cc/9M4BL3B9/Brew-Tool-Milk-Frothing-Jug-smaller-large-removebg-preview.png" alt="" class="picture" />
        <h5>Brew Tool Milk Frother</h5>

        <button class="button"><router-link to="/products"> View Details
      </router-link></button>
    </div>
</div>
  </div>
  

</div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>

/* featured cards */
img {
  width: 300px;
  height: auto;
  /* border: 1px solid #c59360; */
  /* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px; */
  transition: all .3s ease-in-out;
}

#body {
  height: 400px;
  width:auto;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.card.my-4 {
  background:  #c46711;
 border: 1px solid #c59360; 
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  /* border: none; */
}

.card.my-4:hover{
  box-shadow: rgba(80, 45, 8, 0.22) 0px 25px 43px;
  transform: translate3d(0px, -1.5px, 0px);
}

h5 {
  color:#c59360;
  -webkit-text-stroke: 0.5px #462507;

}

button.button{
  font-size: 16px;
  font-weight:bold;
  background-color: #5d340d;
  color: #E4C2A2;
  -webkit-text-stroke: 0.5px #995C23;
  border:none;
  padding: 10px 10px;
  width: 115px !important;
}

/* cards end */

body{
  overflow: hidden;
}
.cont{
  position: relative;
  width:100%;
}
img.bg{
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.cont .btn {
  position: absolute;
  top: 53%;
  right: 16%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-40%, -50%);
  background-color: #5d340d;
  color: #E4C2A2;
  font-size: 17px;
  font-weight:bold;
  -webkit-text-stroke: 0.5px #995C23;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 0;
}

.carousel{
  padding-top: 5%;
  width: 70%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.cont .btn:hover {
  background-color: #462507;
}

.cont .content {
  position: absolute;
  top: 130px;
  text-align: right;
  right: 9%;
  color: #E4C2A2; 
  width: 100%;
  -webkit-text-stroke: 1.5px #462507;
}

h1 {
  font-size: 75px;
}

p {
  font-size: 28px;
  color: #995C23;
  -webkit-text-stroke: 1px #462507;
  padding-top: 10px;
  padding-right: 3%;
}

.column1 {
  /* float: right; */
  height: 400px;
  background-color: #3C6866;
}

/* Clearfix (clear floats) */
/* .row::after {
  content: "";
  clear: both;
  display: table;
} */
img.beans{
  height:400px;
  width:auto;
  float: right;
}

.conta .bttn {
  position: absolute;
  top: 165%;
  right: 6%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #5d340d;
  color: #E4C2A2;
  -webkit-text-stroke: 0.5px #995C23;
  font-size: 16px;
  font-weight:bold;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 0;
}

.conta .bttn:hover {
  background-color: #462507;

}

p.About {
  padding-top: 160px;
  text-align: center;
  /* align-content: center; */
  /* justify-content: center; */
  color: #E4C2A2;
  -webkit-text-stroke: 1px #462507;
}

.featured {
  background-color: #995C23;
  height: 650px;
  text-align: center;
  padding-top: 50px;
}

h4 {
  font-weight: bolder;
  font-size: 50px;
  color: #E4C2A2;
  -webkit-text-stroke: 1.6px #462507;
  padding-bottom: 50px;
}

a {
  text-decoration: none;
  color: #E4C2A2;
  -webkit-text-stroke: 0.5px #995C23;
}




.card.my-4.two {
  background-color: #3C6866;
  margin-right: 2%;
}

.card.my-4.one {
  background-color: #462507;
  margin-right: 2%;
}

.card.my-4.three {
  background-color: #E4C2A2;
  margin-right: 2%;
}

.card.my-4.four {
  background-color: #634121;
  margin-right: 2%;
}

</style>
