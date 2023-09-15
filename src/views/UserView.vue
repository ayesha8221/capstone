<template>
    <div v-if="user" class="product_details" :key="user.userID" :user="user">
           <div class="card mx-auto">
         <div class="container d-flex justify-content-center align-items-center">
       <div class="card my-2 row">
        <div class="row justify-content-center align-items-center">
          
          
    <div class="col-12 col-md-6">
      <img class="profile" :src="user.userProfile" :alt="user.firstName" />
         
    </div>
    <div class="col-4"><h1>Profile</h1>
      
      <h3>First Name:</h3><p>{{ user.firstName }} {{ user.lastName }}</p>
          <h3>Role:</h3><p>{{ user.userRole }}</p>
            <h3> Email:</h3> <p>{{ user.emailAdd }}</p>
            <button>
                      <router-link :to="{ name: 'admin edit user', params: { id : user.userID } }"><img class="edit-icon" src="https://i.postimg.cc/T2Z8Qtg6/icons8-edit-50-removebg-preview.png" alt=""></router-link>
                    </button>
                    <button
                            type="submit"
                            class="btn btton"
                            @click= "deleteUser(user.userID)"
                            id="delete-row"
                          >
                            <img class="edit-icon" src="https://i.postimg.cc/kMtSk56b/icons8-delete-30.png" alt="">
                          </button>
    </div>
  </div>
        <!-- <div class="container">
          
                          <div class="col-6">
           
           </div>
        </div> -->
           
           <div>
           </div>
           
           
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
               return this.$store.state.userData
           },
           id () {
               return this.$route.params.id
           },
           userRole() {
      return this.$store.state.userRole;
    },
            
       },
       mounted() {
           this.$store.dispatch("getUser", this.id)
       },
       methods: {
        async deleteUser(userId) {
            console.log('deleted user', userId)
      const success = await this.$store.dispatch('deleteUser', userId);

      if (success) {
        this.$router.push("/login");
        // Update the product list in your component if needed.
        this.$store.dispatch('getUser', userId); // You can dispatch this if you need to refresh the product list.
      } else {
        alert('Failed to delete user. Please try again.');
      }
    },

       },
       components: { LoadingSpinner },
       
   }
   </script>
   <style scoped>
*{
    overflow:hidden;
    background-color: #E4C2A2;
}
   .profile {
     height: 350px;
    width:auto;
    border-radius: 10px;
   }

   .card.my-2 {
    text-align: center;
    height: 500px;
    width: 900px;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(80, 45, 8, 0.22) 0px 25px 43px;
    border: 1px solid #c59360; 
   }
   
   .edit-icon {
    height: 27px;
   }

   /* .edit-icon:hover {
    
   } */

   h1 {
    color: #3C6866 !important;
text-align: center;
font-family: Inter;
font-size: 2.9rem;
/* font-style: italic; */
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 1px #5a3009;
padding-bottom: 0.5em;
   }

   p {
    font-size: 18px;
    font-weight: 600;
  color: #462507;
   }

   h3 {
    color: #462507;
   }
   
button {
  border: none !important;
  background: none;
}

@media screen and (max-width: 320px) {
img.profile {
  width: 100% !important;
  height:auto;
}

.card {
  width: 100% !important;
  height:auto !important;
}

h1 {
  font-size: 22px;
}

p {
  font-size: 15px;
}

h3 {
  font-size: 22px;
}
  
}


   </style>