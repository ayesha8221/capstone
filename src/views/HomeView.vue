<template>
  
<div>
  <div class="cont">
    <img src="https://i.postimg.cc/VLqfm845/istockphoto-637758628-2048x2048-transformed.jpg" alt="background" class="bg">
    <button class="btn">See what we<br> have to offer</button>
    <div class="content">
    <h1>Roast & Revelry</h1>
    <p>Selecting only the finest coffee beans <br> and equipment for your convenience </p>
  </div>
  </div>
  <div class="column1">
    <!-- <img src="https://i.postimg.cc/mrJB3nqC/istockphoto-1168964829-612x612.jpg" alt="Forest"  class="beans"> -->
  
  <div class="conta">
  <img src="https://i.postimg.cc/mrJB3nqC/istockphoto-1168964829-612x612.jpg" alt="Snow" class="beans">
  <button class="bttn">Learn More</button>
  <p class="About">Welcome to Roast & Revelry, where passion for quality meets a commitment to community and sustainability. At Roast & Revelry, we take immense pride in crafting an exceptional coffee experience that not only tantalizes your taste buds but also resonates with your values.</p>
</div>
</div>
<div class="featured">
  <div>
    <h4>Featured products</h4>
  </div>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="container">
    <div class="card mx-1 my-2 one" id="body">
        <img src="https://i.postimg.cc/c41TpVSS/photo-1613536844480-ac5d7b1b6ed1-removebg-preview.png" style="height: 300px; width:230px" class="picture" />
        <h3>Name</h3>
        <button v-on:click="addToCart" class="addbtn">View more</button>
        </div>
        </div>
    <div class="container">
    <div class="card mx-1 my-2 two" id="body">
        <img src="https://i.postimg.cc/c41TpVSS/photo-1613536844480-ac5d7b1b6ed1-removebg-preview.png" style="height: 300px; width:230px" class="picture" />
        <h3>Name</h3>
        <button v-on:click="addToCart" class="addbtn">View more</button>
        </div>
        </div>
    <div class="container">
    <div class="card mx-1 my-2 three" id="body">
        <img src="https://i.postimg.cc/c41TpVSS/photo-1613536844480-ac5d7b1b6ed1-removebg-preview.png" style="height: 300px; width:250px" class="picture" />
        <h3>Name</h3>
        <button v-on:click="addToCart" class="addbtn">View more</button>
        </div>
        </div>
    <div class="container">
    <div class="card mx-1 my-2 four" id="body">
        <img src="https://i.postimg.cc/c41TpVSS/photo-1613536844480-ac5d7b1b6ed1-removebg-preview.png" style="height: 300px; width:250px" class="picture" />
        <h3>Name</h3>
        <button v-on:click="addToCart" class="addbtn">View more</button>
        </div>
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
  top: 60%;
  right: 16%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-40%, -50%);
  background-color: #5d340d;
  color: #E4C2A2;
  font-size: 16px;
  font-weight:bold;
  -webkit-text-stroke: 0.5px #995C23;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 0;
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
.beans{
  height:400px;
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
  align-content: center;
  justify-content: center;
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

#body {
  height: 400px;
  width: 300px;
}

.card.mx-1.my-2.two {
  background-color: #3C6866;
}

.card.mx-1.my-2.one {
  background-color: #462507;
}

.card.mx-1.my-2.three {
  background-color: #E4C2A2;
}

.card.mx-1.my-2.four {
  background-color: #634121;
}

</style>
