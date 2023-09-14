<template lang="">
    <div class="all" >
        <div class="container d-flex justify-content-center text-align-center align-items-center" >
<div class="card">
    <div class="row d-flex justify-content-center text-align-center align-items-center">
    <div class="col-12 col-md-6">
        
        <h1>Login </h1>

        <form class="form-inline" action="/action_page.php" @submit.prevent="userLogin" >
  <div class="form-group">
    <label for="email">Email address</label><br>
    <input
          type="email"
          name="email"
          v-model="emailAdd"
          placeholder="@gmail.com"
        />
  </div>
  <br>
  <div class="form-group">
    <label for="pwd">Password</label><br>
    <input type="password" v-model="userPass" name="password" placeholder="enter password" />
  </div><br>
  <!-- <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div> -->
  <button type="submit" class="btn btn-default">Log in</button>
  <br>
  <router-link to="/register"> Create Account </router-link>
  
</form>


    </div>
    <div class="col">
      <img class="login" src="https://i.postimg.cc/FRm1GWck/photo-1509042239860-f550ce710b93.jpg" alt="">
    </div>
  </div>
</div>

        </div>


        
    </div>
</template>
<script>

import Swal from "sweetalert2";

export default {
  data() {
    return {
      emailAdd: "",
      userPass: "",
    };
  },
  beforeCreate() {
    this.$store.dispatch("cookieCheck");
  },
  methods: {
    async userLogin() {
      console.log("Reached");
      try {
        const payload = {
          emailAdd: this.emailAdd,
          userPass: this.userPass,
        };
        const resp = await this.$store.dispatch("login", payload);
        console.log(resp)
        if (resp.success === true && resp.token && resp.result) {
          await Swal.fire({
            icon: "success",
            title: "Logged in Successfully",
            text: "You are now logged in!",
            background: "#995C23",
            color: "black",
          });
          this.$router.push("/");
        } else {
          const errMsg = "Unexpected error";
          await Swal.fire({
            icon: "error",
            title: "Login failed",
            text: errMsg,
          });
        }
      } catch (e) {
        console.error("Error while logging in: ", e);
      }
    },
    
    login() {
    // Your login logic here

    // If login is successful, clear the cart
    if (loginSuccessful) {
      this.$store.dispatch('clearCart');
    }
  },
  },
  
}
</script>
<style scoped>

.all {
    background-color: #E4C2A2 !important;
}
.container {
    min-height: 100vh;
    /* background-color: #E4C2A2; */
    /* padding-top: 80px; */
}
.card {
    
    /* height: 600px; */
    width: 745px;
    /* border: solid red; */
    padding-left: 25px;
    border: 1px solid #995C23;
    background: #d6b495;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.login {
    height: 500px;
}

.col {
    text-align:center
}

h1 {
  color: #995C23;
text-align: center;
font-family: Inter;
font-size: 45px;
/* font-style: italic; */
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 1px #462507;
padding-bottom: 5%;
}

button.btn.btn-default {
  background-color: #462507;
  color: #E4C2A2;
text-align: center;
font-family: Inter;
font-size: 20px;
/* font-style: italic; */
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 0.5px #995C23;
}

input {
  width:80%;
  background-color: #f6e1ce;
  border: #a57344 solid 2px;
  /* box-shadow: #462507 0.5px 0.5px 0.5px; */
}

label {
  color: #673f19;
text-align: center;
font-family: Inter;
font-size: 20px;
/* font-style: italic; */
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 0.3px #995C23;
}

a{
  padding-top: 5%;
  text-decoration: none;
  color: black;
}

@media screen and (max-width: 320px) {
  img.login {
    width: 100% !important;
    height:auto;
}

.card {
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
}

}

</style>