import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "./components/porducts/ProductList";
import ProductSell from "./components/porducts/ProductSell";
import ProductPurchase from "./components/porducts/ProductPurchase";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: ProductList },
  { path: "/product-transactions", component: ProductPurchase },
  { path: "/product-output", component: ProductSell },
  { path: "*", redirect: "/" },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
