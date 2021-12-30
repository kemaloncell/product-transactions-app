import Vue from "vue";

export const setTradeResult = ({ commit, state }, tradeResult) => {
  commit("updateTradeResult", tradeResult);
  let tradeData = {
    purchase: state.purchase,
    sale: state.sale,
  };
  Vue.http.put("https://product-transactions-app-default-rtdb.firebaseio.com/trade-result.json", tradeData).then((response) => {
    console.log(response);
  });
};

export const getTradeResult = ({ commit }) => {};
