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
  <div class="row">
  <div class="column1">
    <p>This is some text</p>
  </div>
  <div class="column2">
    <!-- <img src="https://i.postimg.cc/mrJB3nqC/istockphoto-1168964829-612x612.jpg" alt="Forest"  class="beans"> -->
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
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 0;
}
.cont .btn:hover {
  background-color: black;
}

.cont .content {
  position: absolute; /* Position the background text */
  top: 130px; /* At the bottom. Use top:0 to append it to the top */
  text-align: right;
  /* margin-right: 100px; */
  right: 3%;
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
  float: left;
  height: 300px;
  background-color: #3C6866;
}

.column2 .beans {
  float: right;
  height: 300px;
  width: 25%;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

</style>
