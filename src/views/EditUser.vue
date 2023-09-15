<template>
    <div class="container">
      <div class="container flex-container" v-if="user">
        <br>
        <label for="firstName">Name</label>
        <br>
        <input
          type="text"
          autocomplete="off"
          required
          id="firstName"
          name="firstName"
          v-model="user.firstName"
          placeholder="name"
        />
        <br>
        <label for="lastName">Surname</label>
        <br>
        <input
          type="text"
          autocomplete="off"
          required
          id="lastName"
          name="lastName"
          v-model="user.lastName"
          placeholder="surname"
        />
        <br>
        <label for="userRole">Role</label>
        <br>
        <input
          type="text"
          autocomplete="off"
          required
          id="userRole"
          name="userRole"
          v-model="user.userRole"
          placeholder="role"
        />
        <br>
        <label for="emailAdd">Email Address</label>
        <br>
        <input
          type="text"
          autocomplete="off"
          required
          id="emailAdd"
          name="emailAdd"
          v-model="user.emailAdd"
          placeholder="email"
        />
        <br>
        <label for="userPass">Password</label>
        <br>
        <input
          type="text"
          autocomplete="off"
          required
          id="userPass"
          name="userPass"
          v-model="user.userPass"
          placeholder="password"
        />
        <br>
        <label for="userProfile">Profile URL</label>
        <br>
        <input
          type="text"
          autocomplete="off"
          required
          id="userProfile"
          name="userProfile"
          v-model="user.userProfile"
          placeholder="profile"
        />
        <br>
        <button @click="updateUser" class="btn-submit m-3">Submit</button>
      </div>
      <h1 v-else class="text-white">Error</h1>
    </div>
  </template>
  
  
<script>
import Swal from 'sweetalert2';

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
    async updateUser() {
      try {
        const payload = {
          userID: this.$route.params.id,
          firstName: this.firstName,
          lastName: this.lastName,
          userRole: this.userRole,
          emailAdd: this.emailAdd,
          userPass: this.userPass,
          userProfile: this.userProfile,
        };
        await this.$store.dispatch("updateUser", payload);
        this.showSuccessAlert();
        this.clearForm();
      } catch (err) {
        console.error(err);
        this.showErrorAlert();
      }
    },
    clearForm() {
      this.firstName = "";
      this.lastName = "";
      this.userRole = "";
      this.emailAdd = "";
      this.userPass = "";
      this.userProfile = "";
    },
    showSuccessAlert() {
      Swal.fire({
        icon: 'success',
        title: 'User has been updated successfully!',
        showConfirmButton: false,
        timer: 1500, // Close the alert after 1.5 seconds
      }).then(() => {
        this.$router.push("/user");
      });
    },
    showErrorAlert() {
      Swal.fire({
        icon: 'error',
        title: 'Failed to update user. Please try again.',
        text: 'An error occurred while updating the user.',
        background: "#995C23",
            color: "black",
      });
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    // Fetch user data from the store if not already loaded
    if (!this.user) {
      this.$store.dispatch("getUser", this.$route.params.id);
    }
  },
};
</script>
<style scoped>

.container {
    text-align: center;
   }

   button {
    background-color: #462507;
  color: #E4C2A2;
text-align: center;
font-family: Inter;
font-size: 20px;
/* font-style: italic; */
line-height: normal;
-webkit-text-stroke: 0.5px #995C23;
border: none;
padding: 3px 3px 3px 3px;
width: 80px;
   }

   button:hover {
  background:#613914;
  color: #E4C2A2 ;
}

   input{
    width: 80%;
    margin-bottom: 30px;
    height: 40px;
    border-radius: 10px;
    border-color: #995C23;
    background-color: rgb(249, 222, 198);
   }

   label {
    color: #3C6866 !important;
text-align: center;
font-family: Inter;
font-size: 25px;
/* font-style: italic; */
font-weight: 600;
line-height: normal;
-webkit-text-stroke: 1px #5a3009;
margin-top: 1em;
padding-bottom: 0.3em;
   }

   

    

</style>