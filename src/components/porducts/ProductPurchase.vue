<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product Transactions</h3>
          <hr />
          <div class="form-group">
            <label>Product Name</label>
            <input type="text" class="form-control" placeholder="Enter the product name.." />
          </div>
          <div class="form-group">
            <label>Quantity</label>
            <input type="text" class="form-control" placeholder="Enter the number of products.." />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="text" class="form-control" placeholder="Enter the product price.." />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea cols="30" rows="5" placeholder="Enter a description of the product..." class="form-control"></textarea>
          </div>
          <hr />
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
