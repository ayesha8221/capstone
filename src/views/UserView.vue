<template>
    <div v-if="user" class="product_details" :key="user.userID" :user="user">
           <div class="card mx-auto">
         <div class="container d-flex justify-content-center align-items-center">
       <div class="card my-2">
           <img class="profile" :src="user.userProfile" :alt="user.firstName" />
           <div>
            <button>
                      <router-link :to="{ name: 'admin edit user', params: { id : user.userID } }"> Edit </router-link>
                    </button>
                    <button
                            type="submit"
                            class="btn btton"
                            @click= deleteProduct(product.prodID)
                            id="delete-row"
                          >
                            Delete Account
                          </button>
           </div>
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
       methods: {
        async deleteUser(userId) {
      const success = await this.$store.dispatch('deleteUser', userId);

      if (success) {
        // Update the product list in your component if needed.
        this.$store.dispatch('getUsers'); // You can dispatch this if you need to refresh the product list.
      } else {
        alert('Failed to delete user. Please try again.');
      }
    },

       },
   
       mounted() {
           this.$store.dispatch("getUser", this.id)
       },
       components: { LoadingSpinner },
       
   }
   </script>
   <style scoped>
*{
    overflow:hidden;
}
   .profile {
    height: 300px;
    width:fit-content;
   }

   .card.my-2 {
    text-align: center;
    width: 400px;
    justify-content: center;
    align-items: center;
   }
   
   </style>