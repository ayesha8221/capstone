<template lang="">
    
<nav class="text-align-center" >
        
<div class="nav align-items-center">
    <img class="logo" src="https://i.postimg.cc/vmZb6BwS/23-removebg-preview.png" alt="Bootstrap" width="80" height="" >
    <a class="nav-link" aria-current="page" href="/">Home</a>
  <li><router-link to="/about" class="nav-link">About</router-link></li>
  <li><router-link to="/products" class="nav-link">Products</router-link></li>
  <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
  <li v-show="userRole === 'Admin'" ><router-link to="/admin" class="nav-link">Admin</router-link></li>
      <li v-show="!userData" ><router-link class="smol" to="/login">Login</router-link></li>
      <li v-show="!userData" ><router-link class="smol" to="/register">Register</router-link></li>
      <li  class="justify-content-end ms-auto"> 
    <router-link class="smol" to="/cart"><img class="cart" src="https://i.postimg.cc/dtWcCPk3/3737372-removebg-preview.png" alt=""></router-link>
  </li>
  <li>
    <router-link v-if="userData"
                :to="{ name: 'user', params: { id: userData.userID } }"
                class="text-decoration-none text-white text-center"
              >
              <img  class="profile" :src="userData.userProfile" :alt="userData.firstName" />
              
              </router-link>
  </li>
  <li>
          <button @click="logout" class="link"><img class="logout" src="https://i.postimg.cc/WzwDYRNK/icons8-logout-30.png" alt="">
          </button>
        </li>
</div>
<!-- <ul class="nav justify-content-end"> -->
 
<!-- </ul> -->
      


<div>
  
</div>
</nav>

</template>
<script>
export default {
  props: ["user"],
  mounted() {
    this.$store.dispatch("getUsers");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    users() {
      return this.$store.state.users;
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
  margin-right: 15px;
}

ul.dropdown.menu {
    height: auto;
    padding-right: 10%;
    font-weight: bold;
}

img.profile {
  height: 40px;
  border-radius: 200px;
  margin-right: 15px;
}

img.logout{
margin-right: 10px;
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

@media screen and (max-width: 768px) {
  .nav-link {
    color: #995C23;
    font-size: 20px;
    font-weight: bold;
    -webkit-text-stroke: 0.2px #E4C2A2;
    margin-right: 0;
}

.cart {
  height: 30px;
  width: auto;
  margin-right: 15px;
}

}

@media screen and (max-width: 320px) {
  .nav {
    /* margin: 100px; */
    padding: 0 0 80px 0;
    display: flex;
    justify-content: center !important;
  }
  .nav-link {
    font-size: 16px; /* Adjust font size for smaller screens */
    margin: 10px 20px 0 5px;
    padding: 0;
  }
  .nav img {
    width: 40px; /* Adjust logo size for smaller screens */
  }
  .cart, .logout {
    height: auto;
    width: 30px !important;
    justify-content: center !important;
  }

  .profile{
    height: auto;
    width: 40px !important;
    justify-content: center !important;
  }

 img.logo {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .nav-link {
    color: #995C23;
    font-size: 20px;
    font-weight: bold;
    -webkit-text-stroke: 0.2px #E4C2A2;
    margin-right: 25px;
}

}
    
</style>