<template>
    <div>
        <h2>Monthly Reward : {{ Reward }}</h2>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup>
    const Reward = useReward()
    const increment = ()=> {
        Reward.value++
    }
</script>