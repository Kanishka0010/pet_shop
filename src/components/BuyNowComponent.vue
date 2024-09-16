<script>
import Product from '../../public/data.json'
export default {
    data() {
        return {
            data: Product.BuyNow
        }
    }
}

</script>

<template>
    <section id="blog" class="flex flex-col items-center py-20 bg-white">
        <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Take Order In here</h2><br>
        <div class="container">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                <div v-for="item in data" :key="item.id"
                    class="grid place-items-center text-center gap-5 p-8 rounded-md text-white bg-gradient-to-b bg-gray-800 "
                    :class="i === 1 && ' to-primary-200/30 lg:-translate-y-10'
                    ">
                    <div>
                        <img :src=" item.Image " alt="">
                    </div>
                    <h3 class="text-2xl lg:text-4xl font-bold">{{ item.Name }}</h3>
                    <p class="w-[90%] hidden md:block">{{ item.price }}</p>
                    <p class="w-[90%] hidden md:block">{{ item.definitoin }}</p>
                    <button
                        class="hidden md:block px-8 py-3 rounded-full text-white font-medium tracking-wider uppercase bg-secondary w-full lg:w-auto">Buy Now</button>
                </div>
            </div>
        </div>
    </section>




</template>


<style>



</style>