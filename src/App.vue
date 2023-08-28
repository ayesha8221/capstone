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
  }
}
</script>


<style>



</style>
