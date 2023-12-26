<script>
definePageMeta({
    layout: false,
})
</script>

<template>
<div>
    <NuxtLayout name="user">
        
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo esse dicta, laboriosam id, eius at praesentium
            accusantium officia voluptas deleniti</p>
        <template #socialmedia>
            <ul>
                <li>
                    <NuxtLink to="https://www.linkedin.com" target="_blank">Linkedin</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://www.argusoft.com" target="_blank">Argusoft</NuxtLink>
                </li>
            </ul>
        </template>
    </NuxtLayout>
</div>
</template>
