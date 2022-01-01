<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Output</h3>
          <hr />
          <div class="form-group">
            <label>Product Name</label>
            <select class="form-control" v-model="selectedProduct">
              <option :value="products.key" v-for="products in getProducts" :key="products.key">{{ products.title }}</option>
            </select>
          </div>
          <div class="card mb-2 border border-danger">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="mb-3">
                    <span class="badge badge-info">Stok : {{ getProducts.count }}</span>
                    <span class="badge badge-primary">Price : {{ getProducts.price | currency }}</span>
                  </div>
                  <p class="border border-warning p-2 text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis deleniti eos impedit iste numquam quos sit. Dignissimos, mollitia nemo officia reiciendis repellendus rerum velit. Eos libero magnam quas tempore!</p>
                </div>
              </div>
            </div>
          </div>
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
    };
  },
  computed: mapGetters(["getProducts"]),
};
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>
