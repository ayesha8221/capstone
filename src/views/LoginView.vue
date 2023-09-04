<template lang="">
    <div class="all" >
        <div class="container d-flex justify-content-center text-align-center align-items-center" >
<div class="card">
    <div class="row d-flex justify-content-center text-align-center align-items-center">
    <div class="col">
        
        <h1>Login </h1>

        <form class="form-inline" action="/action_page.php">
  <div class="form-group">
    <!-- <label for="email">Email address:</label> -->
    <input type="email" class="form-control" id="email" placeholder="Enter email address">
  </div>
  <br>
  <div class="form-group">
    <!-- <label for="pwd">Password:</label> -->
    <input type="password" class="form-control" id="pwd" placeholder="Enter password">
  </div>
  <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default">Login</button>
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
export default {
  data() {
            return {
                    emailAdd: '',
                    userPass: ''
            }
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