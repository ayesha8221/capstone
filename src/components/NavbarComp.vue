<template lang="">
<nav>
          <a class="navbar-brand" href="/">
     
    </a>  
        
<div class="nav d-flex justify-content-center align-items-center">
    <img src="https://i.postimg.cc/vmZb6BwS/23-removebg-preview.png" alt="Bootstrap" width="80" height="" >
    <a class="nav-link active" aria-current="page" href="/">Home</a>
  <li><router-link to="/about" class="nav-link">About</router-link></li>
  <li><router-link to="/products" class="nav-link">Products</router-link></li>
  <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
  <li><router-link to="/admin" class="nav-link">Admin</router-link></li>

</div>
</nav>

</template>
<script>
export default {


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

a.nav-link {
    text-decoration: none;
}

.nav-link {
    color: #995C23;
    font-size: 25px;
    font-weight: bold;
    -webkit-text-stroke: 0.2px #E4C2A2;
}
    
</style>