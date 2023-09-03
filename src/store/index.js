import { createStore } from 'vuex'


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
 // Mutations to modify the cart state
 addToCart(state, product) {
  state.cartItems.push({ product, quantity: 1 });
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
}
);