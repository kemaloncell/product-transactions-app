<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Output</h3>
          <hr />
          <div class="form-group">
            <label>Product Name</label>
            <select class="form-control" v-model="selectedProduct" @change="productSelected">
              <option selected disabled>Please select a product...</option>
              <option :disabled="products.count == 0" :value="products.key" v-for="products in getProducts" :key="products.key">{{ products.title }}</option>
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="product !== null">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info">Stok : {{ product.count }}</span>
                      <span class="badge badge-primary">Price : {{ product.price | currency }}</span>
                    </div>
                    <p class="border border-warning p-2 text-secondary">{{ product.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>Quantity</label>
            <input type="text" class="form-control" placeholder="Enter the number of products.." />
          </div>
          <hr />
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedProduct: null,
      product: null,
    };
  },
  computed: mapGetters(["getProducts"]),
  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
  },
};
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
.fade-active {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}
</style>
