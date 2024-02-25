<template>
  <!-- Nav bar -->
  <header>
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                    <router-link class="nav-link text-white" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/product">Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/cart">
                        <i class="fas fa-cart-shopping"></i>
                        <small class="badge badge-danger" style="font-size: 9px;">{{ cart.length }}</small>
                    </router-link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Nav',
    data(){
        return {
            cart: []
        }
    },
    created(){
        this.cart = this.$root.cart
    }
}
</script>

<style>

</style>