<script>
definePageMeta({
    layout: false,
})
const show = ref(false)
</script>

<template>
<div>
    <NuxtLayout name="user"> 
        <h1>Contact Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo esse dicta, laboriosam id, eius at praesentium
            accusantium officia voluptas deleniti</p>

        <template #socialmedia>
            <ul>
                <li>
                    <NuxtLink to="https://www.facebook.com" >FaceBook</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://www.instagram.com" >Instagram</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://www.twitter.com" >Twitter</NuxtLink>
                </li>
            </ul>
        </template>
    </NuxtLayout>
</div>
</template>
