<template lang="">
    <footer class="text-center text-lg-start">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Information</h5>
        <br>
        <ul class="list-unstyled mb-0">
          <li>
            <router-link to="/about" >About Us</router-link>
          </li>
          <br>
          <li>
            <router-link to="/products" >Products</router-link>
          </li>
          <br>
          <li>
            <router-link to="/cart" >Cart</router-link>
          </li>
          <br>
          <li>
            <router-link to="/admin">Account</router-link>
          </li>
        </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Contact Us</h5>
        <br>
        <ul class="list-unstyled">
          <li>
            <a href="#!">098 765 4321</a>
          </li>
          <br>
          <li>
            <a href="#!">34 Marilyn Monroe street,
Rose estate, Cape Town, Western Cape
7389</a>
          </li>
          <br>
          <li>
            <a href="#!">roast&revelry@gmail.com</a>
          </li>
        </ul>
      </div>
      <!--Grid column-->
      <!--Grid column-->
      <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Socials</h5>
        <br>
        <ul class="list-unstyled">
          <li>
            <a href="https://www.instagram.com/accounts/login/" target="_blank" class="text-dark"><img class="icons" src="https://i.postimg.cc/PJnDPx2k/174855-removebg-preview.png" alt=""></a>
          </li>
          <br>
          <li>
            <a href="https://twitter.com/i/flow/login" target="_blank" class="text-dark"><img class="icons" src="https://i.postimg.cc/6QpW9XK5/733579-removebg-preview.png" alt=""></a>
          </li>
          <br>
          <li>
            <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" class="text-dark"><img class="icons" src="https://i.postimg.cc/x1LppJNW/3670032-removebg-preview.png" alt=""></a>
          </li>
          <br>
          <li>
            <a href="https://www.tiktok.com/foryou?showLogin=1&loginType=/login" target="_blank" class="text-dark"><img class="icons" src="https://i.postimg.cc/rp7myw9C/3046121-removebg-preview.png" alt=""></a>
          </li>
        </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase text-align-center">Get In Touch With Us</h5>

        <form action="https://formspree.io/f/xrgwkdao"
  method="POST">
          <ul class="list-unstyled mb-0">
          <li>
            <div class="form-floating mb-3">
  <input type="name" name="name" class="form-control" id="floatingInput" placeholder="Your name" required>
  <label for="floatingInput">Full Name</label>
</div>
          </li>
          <li>
            <div class="form-floating mb-3">
  <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
  <label for="floatingInput">Email address</label>
</div>
          </li>
          <li>
            <div class="form-floating">
  <textarea name="message" class="form-control" placeholder="Leave a comment here" id="floatingTextarea" required ></textarea>
  <label for="floatingTextarea" >Comments</label>
</div>
          </li>
          <li>
            <button class="submit"> Submit </button>
          </li>
        </ul>
        </form>
        
      </div>
    </div>
  </div>
      <!--Grid column-->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © {{new Date().getFullYear()}} Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>

</template>
<script>
export default {
    
}
</script>
<style scoped>

.text-uppercase.mb-0, .text-uppercase, .text-uppercase.text-align-center {
  color: #995C23;
font-family: Inter;
font-size: 22px;
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 0.2px #E4C2A2;
}

.text-center.text-lg-start {
  background: #5d2f04;
}

a {
  color: #E4C2A2;
  text-decoration: none;
}

input, textarea {
  /* width: 600px; */
  /* height: 40px; */
  background-color: rgb(255, 213, 176);
  border-radius: 10px;
  border-color:  #c08248 !important;
  cursor: pointer;
  color: #603207;
  padding-left: 20px;
  margin-bottom: 2%;
}

.icons {
  width:36px;
}

.submit {
  background-color: #462507;
  color: #E4C2A2;
text-align: center;
font-family: Inter;
font-size: 20px;
/* font-style: italic; */
line-height: normal;
-webkit-text-stroke: 0.5px #995C23;
border: solid rgb(121, 74, 13);
padding: 3px 3px 3px 3px;
}

.col-lg-2.col-md-6.mb-4.mb-md-0 {
  text-align: center;
}

li, h5, label {
  text-align: center;
}
    
</style>