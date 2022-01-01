import Vue from "vue";
import { router } from "../../router";
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
    return (key) =>
      state.products.filter((element) => {
        return element.key == key;
      });
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
    Vue.http.get("https://product-transactions-app-default-rtdb.firebaseio.com/products.json").then((response) => {
      let data = response.body;
      for (let key in data) {
        data[key].key = key;
        commit("updateProductList", data[key]);
      }
    });
  },
  saveProduct({ dispatch, commit }, product) {
    // vue resource transactions
    Vue.http.post("https://product-transactions-app-default-rtdb.firebaseio.com/products.json", product).then((response) => {
      /**  Update Product List */
      product.key = response.body.name;
      commit("updateProductList", product);

      /** Updating Buying, Selling, balance information */
      let tradeResult = {
        purchase: product.price,
        sale: 0,
        count: product.count,
      };
      dispatch("setTradeResult", tradeResult);
      router.replace("/");
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
