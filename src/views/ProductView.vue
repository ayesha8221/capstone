<template>
    <div v-if="product" class="product_details" :key="product.prodID" :product="product">
      <div class="card mx-auto" id="that">
        <div class="container text-center">
          <div class="row">
            <div class="col-sm-6 col-md-5 col-lg-6"><img class="image" :src="product.prodUrl" :alt="product.prodName" /></div>
            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
              <p class="fs-4">{{ product.prodName }}</p>
              <div class="card-body m-2">
                <p>{{ product.description }}</p>
                <p>R {{ product.amount }}</p>
                <p>Quantity : {{ product.quantity }} In Stock </p>
                <button @click="addToCart(product.prodID)">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loading-spinner v-else />  
  </template>
  
<script>
import Swal from 'sweetalert2';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {
  computed: {
    product() {
      return this.$store.state.product;
    },
    id() {
      return this.$route.params.id;
    },
    userData() {
      return this.$store.state.userData;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    addToCart(prodID) {
      // Ensure the user is logged in
      if (this.userData && this.userData.userID) {
        // Call the addToCart action with userID and prodID
        this.$store.dispatch('addToCart', {
          userID: this.userData.userID,
          prodID,
        })
        .then(() => {
          this.showSuccessAlert();
        })
        .catch((error) => {
          console.error('Error adding product to cart:', error);
          // Handle the error and show an error message here if needed
        });
      } else {
        // Handle the case where the user is not logged in, prompt for login, etc.
      }
    },
    showSuccessAlert() {
      Swal.fire({
        icon: 'success',
        title: 'Product added to cart successfully!',
        background: "#995C23",
            color: "black",
        showConfirmButton: false,
        timer: 1500, // Close the alert after 1.5 seconds
      });
    },
  },
  components: { LoadingSpinner },
};
</script>
<style scoped>
* {
    background-color:#E4C2A2 ;
}

.image {
    background-color: #E4C2A2;
}

    img{
        width: 500px;

    }
    .that {
        width: 500px;
        height: 600px;
    }

    p.fs-4 {
        padding-top: 12%;
        color: #3C6866;
        font-size: 100px;
    }

    button {
        /* background: #462507; */
  width:120px;
  height: 40px;
  font-weight: 600;
  font-size: 18px;
  color: #E4C2A2;
  -webkit-text-stroke: 0.2px #462507;
text-align: center;
border: none;
border: 3.5px solid #462507;
background: #3C6866;
mix-blend-mode: hard-light;
    }

    button:hover {
  background:#613914;
}

@media screen and (max-width: 320px) {

  img{
        width: 100%;

    }

}

</style>