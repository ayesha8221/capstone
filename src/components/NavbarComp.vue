<template lang="">
    
<nav class="text-align-center" >
        
<div class="nav align-items-center">
    <img src="https://i.postimg.cc/vmZb6BwS/23-removebg-preview.png" alt="Bootstrap" width="80" height="" >
    <a class="nav-link" aria-current="page" href="/">Home</a>
  <li><router-link to="/about" class="nav-link">About</router-link></li>
  <li><router-link to="/products" class="nav-link">Products</router-link></li>
  <li><router-link to="/admin" class="nav-link">Admin</router-link></li>
<!-- <ul class="nav justify-content-end"> -->
  <li class="justify-content-end ms-auto"> 
    <router-link class="smol" to="/cart"><img class="cart" src="https://i.postimg.cc/dtWcCPk3/3737372-removebg-preview.png" alt=""></router-link>
  </li>
  <li class="nav-item dropdown justify-content-end align-items-center">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><img  class="cart" src="https://i.postimg.cc/ZRYBKvW0/3177440-removebg-preview.png" alt=""></a>
    <ul class="dropdown-menu">
      <li><button class="smol" @click="logout">Log out</button></li>
      <li><router-link class="smol" to="/login">Login</router-link></li>
      <li><router-link class="smol" to="/register">Register</router-link></li>
    </ul>
  </li>
</div>

<div>
  
</div>
</nav>

</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    userData() {
      return this.$store.state.userData;
    },
    userRole() {
      return this.$store.state.userRole;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },

}





</script>
<style scoped>
.nav{
    height: 80px;
    width : auto;
    background-color: #60350d;
}

.li {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none !important;
}


button{
  border: none;
  background-color: #60350d;
}

img.cart:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}



a.nav-link {
    text-decoration: none;
    /* padding-left: 30%; */
}

.active, a.nav-link:hover {
  /* background-color: #995C23; */
  color: #E4C2A2;
  -webkit-text-stroke: 0.3px #60350d;

}

.nav-link {
    color: #995C23;
    font-size: 25px;
    font-weight: bold;
    -webkit-text-stroke: 0.2px #E4C2A2;
    margin-right: 50px;
}

.dropdown-menu {
  background-color: #60350d;
}

.smol {
    font-size: 20px;
    padding-left: 30px;
    color: #995C23;
    -webkit-text-stroke: 0.2px #E4C2A2;
    text-decoration: none;
}

.nav-item.dropdown-toggle{
  font-size: 20px;
    padding-left: 30px;
    color: #995C23;
    -webkit-text-stroke: 0.2px #E4C2A2;
    text-decoration: none;
}

.cart {
  height: 40px;
  width: auto;
}

ul.dropdown.menu {
    height: auto;
    padding-right: 10%;
    font-weight: bold;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  
  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(2px, 0, 0);
}}
    
</style>