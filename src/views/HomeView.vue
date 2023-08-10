<script setup>
import Button from "primevue/button";
</script>

<template>
  <router-link :to="{ name: 'singup' }">
    <main><Button label="singup" class="flex" /></main
  ></router-link>
  <router-link :to="{ name: 'singin' }">
    <main><Button label="singin" /></main
  ></router-link>
</template>
