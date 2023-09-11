<template>
    <div>
      <div class="container flex-container" v-if="user">
        <label for="firstName">Name</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="firstName"
          name="firstName"
          v-model="user.firstName"
          placeholder="name"
        />
        <label for="lastName">Surname</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="lastName"
          name="lastName"
          v-model="user.lastName"
          placeholder="surname"
        />
  
        <label for="userRole">Role</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="userRole"
          name="userRole"
          v-model="user.userRole"
          placeholder="role"
        />
        <label for="emailAdd">Email Address</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="emailAdd"
          name="emailAdd"
          v-model="user.emailAdd"
          placeholder="email"
        />
  
        <label for="userPass">Password</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="userPass"
          name="userPass"
          v-model="user.userPass"
          placeholder="password"
        />
        <label for="userProfile">Profile URL</label>
        <input
          type="text"
          autocomplete="off"
          required
          id="userProfile"
          name="userProfile"
          v-model="user.userProfile"
          placeholder="profile"
        />
  
        <button @click="updateUser" class="btn-submit">Submit</button>
      </div>
      <h1 v-else class="text-white">Error</h1>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
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
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            userAge: this.user.userAge,
            gender: this.user.gender,
            userRole: this.user.userRole,
            emailAdd: this.user.emailAdd,
            userPass: this.user.userPass,
            userProfile: this.user.userProfile,
          };
          await this.$store.dispatch("updateUser", payload);
          this.firstName = "";
          this.lastName = "";
          this.userAge = "";
          this.gender = "";
          this.userRole = "";
          this.emailAdd = "";
          this.userPass = "";
          this.userProfile = "";
  
          this.$router.push("/admin");
          alert("User has been updated");
        } catch (err) {
          console.error(err);
        }
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

<style>
</style>