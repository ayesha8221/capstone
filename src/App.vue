<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
// @ is an alias to /src
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavbarComp, FooterComp
  },
  mounted() {
    this.$store.dispatch("getProducts").then(() => {
      this.products = this.$store.state.products;
    });
  },
  created() {
    const userData = localStorage.getItem("userData");
    if (userData) {
      this.$store.commit("setUserData", JSON.parse(userData));
    }
  },
}
</script>


<style>
.example::-webkit-scrollbar {
  display: none;
}
#app{
  background-color: #E4C2A2;
}




</style>
