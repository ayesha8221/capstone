<template lang="">
    <div class="all" >
        <div class="container d-flex justify-content-center text-align-center align-items-center" >
<div class="card">
    <div class="row d-flex justify-content-center text-align-center align-items-center">
    <div class="col">
        
        <h1>Login </h1>

        <form class="form-inline" action="/action_page.php" @submit.prevent="userLogin" >
  <div class="form-group">
    <label for="email">Email address:</label>
    <input
          type="email"
          name="email"
          v-model="emailAdd"
          placeholder=""
        />
  </div>
  <br>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" v-model="userPass" name="password" />
  </div>
  <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default">Log in</button>
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
    border: solid red;
    padding-left: 25px;
}

.login {
    height: 500px;
}

.col {
    text-align:center
}

    
</style>