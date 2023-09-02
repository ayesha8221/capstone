<template lang="">
    <div>
        <input
    class="m-2"
    v-model="searchTerm"
    placeholder="Search for a product..."
  />
  <div class="container">
    <div class="filter-btns">
      <select id="sort-select" v-model="selectedSort">
        <option value="options">Sort options</option>
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
    </div>
  </div>
  <div
    v-if="filteredProducts.length > 0"
    class="products_container media-container row row-cols-4 m-0"
    id="products"
  >
    <CardComp
      v-for="product of filteredProducts"
      :key="product.prodID"
      :product="product"
    />
  </div>
  </div>
  <!-- <SpinnerComp v-else /> -->
</template>
<script>

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

  components: { CardComp },
}
</script>
<style lang="">
    
</style>