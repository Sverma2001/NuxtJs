<script setup>
definePageMeta({
    layout: 'user'
})
const show = ref(false)
</script>

<template>
    <div style="text-align: center;">
        <h1 class="text-blue">This is index page</h1>
        <button @click="show = !show">Click to get social media links</button>
        <LazyProduct v-if="show"/>
        <!-- <ClientOnly> -->
            <Test />
        <!-- </ClientOnly> -->
    </div>
</template>

<style scoped>
h1 {
    padding: 10px;
}
</style>