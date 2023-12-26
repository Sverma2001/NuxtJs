<template>
    <div>
        <h2>Yearly Reward : {{ Reward*12 }}</h2>
    </div>
</template>

<script setup>
    const Reward = useReward()
</script>