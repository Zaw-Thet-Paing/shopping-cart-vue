<template>
    <div class="mt-3">
        <!-- loader -->
        <Loader v-show="isLoad"/>
        <!-- content -->
        <div v-show="!isLoad" class="container">
            <div class="row">
                <div v-for="product in products" :key="product.id" class="col-md-4">
                    <div class="card mt-3">
                        <div class="card-header">
                            {{ product.title }}
                        </div>
                        <div class="card-body">
                            <img class="w-100" height="300" :src="product.image" alt="">
                        </div>
                        <div class="card-footer">
                            <span>Price : <small>$ {{ product.price }}</small></span>
                            <button @click="addToCart(product)" class="btn btn-sm btn-dark float-end">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Loader from '../Components/Loader.vue'
import axios from 'axios'
export default {
    name: 'Product',
    components: {Loader},
    data(){
        return {
            isLoad: true,
            products: []
        }
    },
    created(){
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            // console.log(res.data)
            this.products = res.data
            this.isLoad = false
        }).catch((err)=>{   
            console.log(err)
        })
    },
    methods: {
        addToCart(product){
            let cart = this.$root.cart
            let isInCart = cart.find((v)=>{
                return v.id == product.id
            })

            if(isInCart){
                isInCart.qty++
            }else{
                this.$root.cart.push({...product, qty: 1})
            }
        }
    }
}
</script>

<style>

</style>