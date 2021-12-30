<template
  ><nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto"> <strong>Kemal Öncel</strong> </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Purchase Amount : </strong>
      <span class="badge badge-danger">{{ getTraderesult.purchase }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Sales Amount : </strong>
      <span class="badge badge-success">{{ getTraderesult.sale }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
      <strong>Balance : </strong>
      <span class="badge badge-primary">{{ getTraderesult.balance }}</span>
    </span>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getTraderesult"]),
};
</script>
