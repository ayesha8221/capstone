<template>
    <div v-if="product" class="product_details" :key="product.prodID" :product="product">
        <div class="card mx-auto" id="that">
                <div class="container text-center">
  <div class="row">
    <div class="col-sm-6 col-md-5 col-lg-6"><img class="image" :src="product.prodUrl" :alt="product.prodName"/></div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">   <h1 class="fs-4">
                {{ product.prodName }}
            </h1>
                <div class="card-body m-2">
                    <p> {{ product.description }} </p>
                    <p>R  {{ product.amount }}</p>
                    <p>Quantity : {{ product.quantity }}</p>
                    <button> Add to Cart </button>
                </div>
            </div></div>
  </div>

            
          
        </div>
    </div>
</template>
<script>
export default {
    // props: ["id"],
    computed: {
        product() {
            return this.$store.state.product
        },
        id () {
            return this.$route.params.id
        }
         
    },

    mounted() {
        this.$store.dispatch("getProduct", this.id)
    },
    
}
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

</style>