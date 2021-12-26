<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link class="navbar-brand" tag="a" to="/">Product List</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link active-class="active" class="nav-link" tag="li" to="/product-transactions">
          <a class="nav-link">Product Transactions</a>
        </router-link>

        <router-link active-class="active" class="nav-link" tag="li" to="/product-output">
          <a class="nav-link">Product Output</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
