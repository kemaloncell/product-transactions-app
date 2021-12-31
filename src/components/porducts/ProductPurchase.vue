<template>
  <div class="container">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Transactions</h3>
          <hr />
          <div class="form-group">
            <label>Product Name</label>
            <input v-model="product.title" type="text" class="form-control" placeholder="Enter the product name.." />
          </div>
          <div class="form-group">
            <label>Quantity</label>
            <input v-model="product.count" type="text" class="form-control" placeholder="Enter the number of products.." />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input v-model="product.price" type="text" class="form-control" placeholder="Enter the product price.." />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea v-model="product.description" cols="30" rows="5" placeholder="Enter a description of the product..." class="form-control"></textarea>
          </div>
          <hr />
          <button class="btn btn-primary" :disabled="saveEnabled" @click="saveProduct">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: "",
      },
      saveButtonClicked: false,
    };
  },
  methods: {
    saveProduct() {
      this.saveButtonClicked = true;
      this.$store.dispatch("saveProduct", this.product);
    },
  },
  computed: {
    saveEnabled() {
      if (this.product.title !== "" && this.product.count !== "" && this.product.price !== "" && this.product.description !== "") {
        return false;
      } else {
        return true;
      }
    },
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
  beforeRouteLeave(to, from, next) {
    if ((this.product.title !== "" || this.product.count !== "" || this.product.price !== "" || this.product.description !== "") && !this.saveButtonClicked) {
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

<style></style>
