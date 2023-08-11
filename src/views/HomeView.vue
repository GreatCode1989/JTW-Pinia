<script setup>
import Button from "primevue/button";
</script>

<template>
  <router-link :to="{ name: 'signup' }">
    <main><Button label="signup" class="flex" /></main
  ></router-link>
  <router-link :to="{ name: 'signin' }">
    <main><Button label="signin" /></main
  ></router-link>
</template>
