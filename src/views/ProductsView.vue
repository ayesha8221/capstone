<template lang="">
    <div>
      <div class="search">
        <input
    class="m-3"
    v-model="searchTerm"
    placeholder="Search for a product..."
  />
      </div>
        
  <div class="container">
    <div class="filter-btns">
      <select id="sort-select" v-model="selectedSort">
        <option value="options">Sort Options</option>
        <option value="alphabetical">Sort Alphabetically</option>
        <option value="price-high">Sort by Price (High to Low)</option>
        <option value="price-low">Sort by Price (Low to High)</option>
      </select>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'all' }"
        @click="selectFilter('all')"
      >
        ALL
      </button>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'Coffee' }"
        @click="selectFilter('Coffee')"
      >
        COFFEE
      </button>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'Equipment' }"
        @click="selectFilter('Equipment')"
      >
        EQUIPMENT
      </button>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'Accessories' }"
        @click="selectFilter('Accessories')"
      >
        ACCESSORIES
      </button>
    </div>
  </div>
  <div
    v-if="filteredProducts.length > 0"
    class="products_container media-container row row m-0"
    id="products"
  >
    <CardComp
      v-for="product of filteredProducts"
      :key="product.prodID"
      :product="product"
      class="col-12 col-md-5 col-lg-4" 
    />
     
  </div>
  <loading-spinner v-else/>
  </div>
 
</template>
<script>

import LoadingSpinner from '@/components/LoadingSpinner.vue';
import CardComp from '@/components/CardComp.vue'

export default {
    data() {
    return {
      selectedFilter: "all",
      selectedSort: "options",
      products: [],
      searchTerm: "",
    };
  },
  computed: {
    sortedProducts() {
    let sorted = this.products;

    if (this.selectedFilter && this.selectedFilter !== "all") {
      sorted = sorted.filter(
        (product) => product.category === this.selectedFilter
      );
    }

    if (this.selectedSort === "alphabetical") {
      sorted.sort((a, b) => a.prodName.localeCompare(b.prodName));
    } else if (this.selectedSort === "price-high") {
      sorted.sort((a, b) => b.amount - a.amount);
    } else if (this.selectedSort === "price-low") {
      sorted.sort((a, b) => a.amount - b.amount);
    }

    return sorted;
  },

    // Create a computed property to filter products based on the search term
    filteredProducts() {
      return this.sortedProducts.filter((product) =>
        product.prodName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
    }, 
  },
mounted() {
    this.$store.dispatch("getProducts").then(() => {
      this.products = this.$store.state.products;
    });
  },  

  components: { CardComp, LoadingSpinner },
}
</script>
<style scoped>
* {
  background-color:  #dab99a;
}

.search {
  text-align: center;
  /* width: 200px; */
}


input.m-3 {
  width: 600px;
  height: 40px;
  background-color: rgb(249, 235, 223);
  border-radius: 10px;
  border-color:  #804711 !important;
  cursor: pointer;
  color: #462507;
  padding-left: 20px;
  /* border: none; */
}

button {
  margin-left: 9%;
  border: none;
  font-size: 30px;
  color: #a46427;
text-align: center;
/* font-family: Inter; */
/* font-size: 45px; */
font-style: italic;
font-weight: 700;
line-height: normal;
-webkit-text-stroke: 1px #462507;
cursor: pointer;
padding-bottom: 2%;
}

.active-btn {
  text-decoration: underline #77481c 13%;
}

a {
  color: #E4C2A2;
}

#sort-select{
  width: 250px;
  border-color:  #804711 !important;
  color: #462507;
  font-weight: 700;
  text-align: center;
}

@media screen and (max-width: 320px) {


  .col-md-5 {
    width: 100% !important;
  }


input.m-3 {
  width: 80%;
  margin: 5 0 5 0 !important;
}

#sort-select{
  width: 100%;
  display:flex;
  justify-content: center !important;
  align-content: center !important;
  text-align: center !important;
}

.container.button.filter-btn {
  font-size: 26px;
  justify-content: center !important;
  text-align: center !important;
}

}

@media screen and (max-width: 768px) {

  select#sort-select {
    display: flex;
    justify-content: center  !important;
    align-content: center !important;
  text-align: center !important;
  }

  button.filter-btn {
  font-size: 23px;
}

.col-md-5 {
    width: 50%;
    /* display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; */
  }


}

@media screen and (max-width: 1024px) {
  select#sort-select {
    display: flex;
    justify-content: center  !important;
    align-content: center !important;
  text-align: center !important;
  }
}
    
</style>