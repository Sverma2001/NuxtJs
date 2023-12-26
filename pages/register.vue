<template>
    <div class="signup-container">
        <form class="signup-form">
            <h1>Register</h1>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Register</button>
        </form>
    </div>
</template>

<style scoped>
.signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    font-weight: bold;
}

.signup-form {
    max-width: 300px;
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
}

label {
    display: block;
    margin-bottom: 8px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #27ae60;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #219d4e;
}
</style>