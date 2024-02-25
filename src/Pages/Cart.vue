<template>
  <div class="container mt-3">
    <table class="table table-borderless">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>+ -</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cart in carts" :key="cart.id" class="mb-1">
                <td>{{ cart.id }}</td>
                <td>{{ cart.title }}</td>
                <td>
                    <img :src="cart.image" width="15%" alt="">
                </td>
                <td style="display: flex; justify-content: start; align-items: center;">
                    <button @click="addQty(cart)" class="btn bg-success btn-sm" style="margin-right: 5px;">+</button>
                    <button @click="reduceQty(cart)" class="btn bg-danger btn-sm">-</button>
                </td>

                <td>{{ cart.qty }}</td>
                <td>{{ cart.price }}</td>
                <td>{{ cart.price * cart.qty }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'Cart',
    data(){
        return {
            carts: []
        }
    },
    created(){
        this.carts = this.$root.cart
    },
    methods: {
        addQty(cart){
            cart.qty++
        },
        reduceQty(cart){
            if(cart.qty > 0){
                cart.qty--
            }
            
        }
    }
}
</script>

<style>

</style>