import { createStore } from 'vuex'
import axios from 'axios';


export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    cartItems: [], 
  },
  getters: {
    // cartProducts (state, getters) {
    //   return state.
    // }
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
  },
  setcartItems: (state, cartItems) => {
    state.cart = cartItems;
  },
  addProduct(state, product) {
    state.products.push(product); // Add the new product to the list.
  },
 // Mutations to modify the cart state
 addToCart(state, product) {
  state.cartItems.push({ product, quantity: 1 });
},
deleteProduct(state, productId) {
  // Remove the product with the given ID from the products list.
  state.products = state.products.filter((product) => product.id !== productId);
},
updateProduct(state, updatedProduct) {
  // Find the product in the products list and update it with the new data.
  const index = state.products.findIndex((product) => product.id === updatedProduct.id);
  if (index !== -1) {
    Vue.set(state.products, index, updatedProduct);
  }
},
deleteUser(state, userId) {
  // Remove the user with the given ID from the users list.
  state.users = state.users.filter((user) => user.id !== userId);
},
// incrementItemQuantity(state, cartItem) {
//   cartItem.quantity++;
// },
// decrementItemQuantity(state, cartItem) {
//   if (cartItem.quantity > 1) {
//     cartItem.quantity--;
//   } else {
//     // Remove the item from the cart if the quantity becomes zero
//     const index = state.cartItems.indexOf(cartItem);
//     if (index !== -1) {
//       state.cartItems.splice(index, 1);
//     }
//   }
// },
clearCart(state) {
  state.cartItems = [];
},
},
  actions: {
    getProducts: async (context) => {
      fetch("https://capstone-sb96.onrender.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setProducts", products));
    },
    getProduct: async (context, id) => {
      fetch("https://capstone-sb96.onrender.com/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setProduct", product));
        
    },
    getUsers: async (context) => {
      fetch("https://capstone-sb96.onrender.com/users")
        .then((res) => res.json())
        .then((users) => context.commit("setUsers", users));
    },
    getUser: async (context, id) => {
      try {
        const res = await fetch(`https://capstone-sb96.onrender.com/users/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
        }
        const user = await res.json();

        context.commit("setUser", user);
      } catch (error) {
        console.error(error);
      }
    },

    async addProduct({ commit }, productData) {
      try {
        // Make the POST request to add the product.
        const response = await axios.post('https://capstone-sb96.onrender.com/products/', productData);

        // Commit the mutation to update the state with the new product.
        commit('addProduct', response.data);

        return true; // Indicate success.
      } catch (err) {
        console.error(err);
        return false; // Indicate failure.
      }
    },
    async deleteProduct({ commit }, productId) {
      try {
        // Make the DELETE request to remove the product.
        await axios.delete(`https://capstone-sb96.onrender.com/products/${productId}`);

        // Commit the mutation to delete the product from the state.
        commit('deleteProduct', productId);

        return true; // Indicate success.
      } catch (err) {
        console.error(err);
        return false; // Indicate failure.
      }
    },
    async getProduct({ commit }, productId) {
      try {
        const response = await axios.get(`https://capstone-sb96.onrender.com/products/${productId}`);
        commit('setProduct', response.data);
      } catch (err) {
        console.error(err);
      }
    },
    async updateProduct({ commit }, updatedProduct) {
      try {
        // Make the PUT request to update the product.
        const response = await axios.put(`https://capstone-sb96.onrender.com/products/${updatedProduct.id}`, updatedProduct);

        // Commit the mutation to update the product in the state.
        commit('updateProduct', response.data);

        return true; // Indicate success.
      } catch (err) {
        console.error(err);
        return false; // Indicate failure.
      }
    },


  
  

    addToCart({ commit, state }, product) {
      const cartItem = state.cartItems.find((item) => item.product.id === product.id);
      if (cartItem) {
        commit('incrementItemQuantity', cartItem);
      } else {
        commit('addToCart', product);
      }
    },
    // incrementCartQuantity({ commit, state }, product) {
    //   const cartItem = state.cartItems.find((item) => item.product.id === product.id);
    //   if (cartItem) {
    //     commit('incrementItemQuantity', cartItem);
    //   }
    // },
    // decrementCartQuantity({ commit, state }, product) {
    //   const cartItem = state.cartItems.find((item) => item.product.id === product.id);
    //   if (cartItem) {
    //     commit('decrementItemQuantity', cartItem);
    //   }
    // },
    // removeFromCart({ commit, state }, product) {
    //   const cartItem = state.cartItems.find((item) => item.product.id === product.id);
    //   if (cartItem) {
    //     commit('decrementItemQuantity', cartItem);
    //   }
    // },
    clearCart({ commit }) {
      commit('clearCart');
    },
  },
  modules: {
  }
})
