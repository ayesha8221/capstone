<template>
    <div v-if="user" class="product_details" :key="user.userID" :user="user">
           <div class="card mx-auto">
         <div class="container">
       <div class="card my-2">
           <img class="profile" :src="user.userProfile" :alt="user.firstName" />
           <h3> First Name : {{ user.firstName }}</h3>
           <p> Last Name : {{ user.lastName }}</p>
           <p> Role : {{ user.userRole }}</p>
           <p> Email : {{ user.emailAdd }}</p>
       </div>
     </div>
           </div>
           </div>
           <loading-spinner v-else/>
   </template>
   <script>

import LoadingSpinner from '@/components/LoadingSpinner.vue'

   export default {
       // props: ["id"],
       computed: {
           user() {
               return this.$store.state.user
           },
           id () {
               return this.$route.params.id
           }
            
       },
   
       mounted() {
           this.$store.dispatch("getUser", this.id)
       },
       components: { LoadingSpinner },
       
   }
   </script>
   <style scoped>

   .profile {
    height: 300px;
    width:fit-content;
   }

   .card.my-2 {
    text-align: center;
   }
   
   </style>