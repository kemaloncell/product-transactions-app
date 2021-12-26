<template>
  <div>
    <app-header />
    <app-container />
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import ProductPurchase from "./components/porducts/ProductPurchase.vue";
import ProductSell from "./components/porducts/ProductSell.vue";
import ProductList from "./components/porducts/ProductList.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appContainer: ProductSell,
  },
};
</script>

<style></style>
