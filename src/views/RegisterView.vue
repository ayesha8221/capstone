<template lang="">
    <div class="all" >
        <div class="container d-flex justify-content-center text-align-center align-items-center" >
<div class="card">
    <div class="row d-flex justify-content-center text-align-center align-items-center">
    <div class="col">
        
        <h1> Register </h1>

        <form class="form-inline" action="/action_page.php" @submit.prevent="register">
  <div class="form-group">
    <!-- <label for="email">Email address:</label> -->
    <input type="name" class="form-control" id="firstName" placeholder="Your Name" v-model="firstName">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="email">Email address:</label> -->
    <input type="surname" class="form-control" id="lastName" placeholder="Surname" v-model="lastName">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="email">Email address:</label> -->
    <input type="role" class="form-control" id="userRole" placeholder="eg. Admin" v-model="userRole">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="email">Email address:</label> -->
    <input type="email" class="form-control" id="emailAdd" placeholder="@gmail.com" v-model="emailAdd">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="pwd">Password:</label> -->
    <input type="password" class="form-control" id="userPass" placeholder="Enter password" v-model="userPass">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="pwd">Password:</label> -->
    <input type="picture" class="form-control" id="userProfile" placeholder="url" v-model="userProfile">
  </div>
  <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default">Register</button>
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
      firstName: "",
      lastName: "",
      userRole: "",
      emailAdd: "",
      userPass: "",
      userProfile: "",
    };
  },
  methods: {
    async register() {
      try {
        const resp = await this.$store.dispatch("register", {
          firstName: this.firstName,
          lastName: this.lastName,
          userRole: this.userRole,
          emailAdd: this.emailAdd,
          userPass: this.userPass,
          userProfile: this.userProfile,
        });
        if (resp.success) {
          await Swal.fire({
            icon: "success",
            title: "Registration successful",
            text: "You are now registered, please log in",
          });
        } else {
          await Swal.fire({
            icon: "error",
            title: "Registration failed",
            text: resp.error || "Unexpected error",
          });
        }
        this.$router.push("/login");
      } catch (e) {
        console.error("Registration error: ", e);
      }
    },
  },
};
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