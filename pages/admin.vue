<script setup>
    definePageMeta({
        // middleware: 'auth'
    })
    const u = useStudent()
    const v = useCart()

    const route = useRoute()
    console.log("route",route)
</script>
    
<template>
    <div>
        <NuxtPage />
        <h2>{{ u }}</h2>
        <h3>{{ v }}</h3>
    </div>
</template>