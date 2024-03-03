<template>
  <form @submit.prevent="handleLogin" class="form">
    <h1>{{ title }}</h1>
    <label class="input-label">
      Password
      <input type="text" v-model="password" />
    </label>
    <p class="message">{{ message }}</p>
    <button @click="handleSubmit">Log in</button>
  </form>
</template>