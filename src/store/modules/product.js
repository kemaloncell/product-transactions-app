import Vue from "vue";
const state = {
  // all product list
  products: [],
};
const getters = {
  // get all product
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    // get product
  },
};
const mutations = {
  // update products list
  updateProductList(state, product) {
    state.products.push(product);
  },
};
const actions = {
  initApp({ commit }) {
    // vue resource transactions
  },
  saveProduct({ commit }, payload) {
    // vue resource transactions
    Vue.http.post("https://product-transactions-app-default-rtdb.firebaseio.com/products.json", payload).then((response) => {
      console.log(response);
    });
  },
  sellProduct({ commit }, payload) {
    // vue resource transactions
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
