<script setup>
    const route = useRoute()
    // console.log("route",route)
    // console.log(route.params.id)

    definePageMeta({
        validate: async(route) => {
            return /^\d+$/.test(route.params.id)
        }
    })
</script>

<template>
    <h3>I am user - {{ $route.params.id }} page</h3>
</template>