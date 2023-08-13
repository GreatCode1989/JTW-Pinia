<script setup>
import { computed } from "vue";
import { useAuthStore } from "./stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const token = computed(() => authStore.userInfo.token);

const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem("userTokens"));
  if (tokens) {
    authStore.userInfo.token = tokens.token;
    authStore.userInfo.refreshToken = tokens.refreshToken;
  }
};

const logout = () => {
  authStore.logout();
  localStorage.removeItem("userTokens");
  router.push("/signin");
};

checkUser();
</script>

<template>
  <div class="menu">
    <router-link class="menu__link" to="/">Home</router-link>
    <router-link class="menu__link" to="/signin" v-if="!token"
      >Login</router-link
    >
    <router-link class="menu__link" to="/cars" v-if="token">Cars</router-link>
    <router-link
      class="menu__link"
      to="/signin"
      v-if="token"
      @click.prevent="logout"
      >Logout</router-link
    >
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 700px;
}
</style>
