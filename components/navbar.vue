<script setup>
const user = ref('admin')
</script>

<template>
  <div class="nav-container">
      <ul class="nav-list">
        <li><NuxtLink to="/" class="nav-link">Index</NuxtLink></li>
        <li><NuxtLink to="/home" class="nav-link">Home</NuxtLink></li>
        <li><NuxtLink to="/login" class="nav-link">Login</NuxtLink></li>
        <li><NuxtLink to="/register" class="nav-link">Register</NuxtLink></li>
        <li><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>
        <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
        <li><NuxtLink to="/reward" class="nav-link">Reward</NuxtLink></li>
        <li><NuxtLink :to="`/${user}`" class="nav-link">Test</NuxtLink></li>
      </ul>
  </div>
</template>

<style scoped>
.nav-container {
  background-color: rgb(222, 169, 255);
}

.nav-list {
  list-style-type: none;
  display: flex;
  padding: 20px;
  margin: 0;
}

ul.nav-list li {
  margin-right: 10px;
}

li {
  font-weight: bold;
  font-size: 20px;
}

/* Add styling for the links */
.nav-link {
  text-decoration: none;
  color:black;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  color: blue;
}
</style>