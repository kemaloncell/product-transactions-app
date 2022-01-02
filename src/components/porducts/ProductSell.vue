<template>
  <div class="container">
    <!-- loading bar start -->
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- loading bar end -->
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
            <input type="text" v-model="product_count" class="form-control" placeholder="Enter the number of products.." />
            <small v-if="product_count != null && product_count > product.count" class="form-text text-danger">Please enter a valid value!</small>
          </div>
          <hr />
          <button @click="save" :disabled="saveEnabled" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productMixin } from "../../productMixin";
import { mapGetters } from "vuex";
export default {
  mixins: [productMixin],
  data() {
    return {
      selectedProduct: null,
      product: null,
      product_count: null,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
    isLoading() {
      if (this.saveButtonClicked) {
        return {
          display: "block",
        };
      } else {
        return {
          display: "none",
        };
      }
    },
  },
  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      if (this.product.count < this.product_count) {
        alert("There are not enough items in stock!");
      } else {
        this.saveButtonClicked = true;
        let product = {
          key: this.selectedProduct,
          count: this.product_count,
        };

        this.$store.dispatch("sellProduct", product);
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if ((this.selectedProduct !== null || this.product_count !== null) && !this.saveButtonClicked) {
      if (confirm("There are unsaved changes. Do you still want to go out?")) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
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
