<template>
    <div v-if="product" class="product_details" :key="product.prodID" :product="product">
        <div class="card mx-auto" id="that">
            <!-- <div class="card "> -->
                <div class="container text-center">
  <div class="row">
    <div class="col-sm-6 col-md-5 col-lg-6"><img class="image" :src="product.prodUrl" :alt="product.prodName"/></div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">   <p class="fs-4">
                {{ product.prodName }}
            </p>
                <div class="card-body m-2">
                    <p> {{ product.description }} </p>
                    <p>R  {{ product.amount }}</p>
                    <p>Quantity : {{ product.quantity }} In Stock </p>
                    <button> Add to Cart </button>
                </div>
            </div></div>
  </div>
<!-- </div> -->
            
          
        </div>
    </div>
    <loading-spinner v-else/>
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

</style>