<template>
  <div>
    <div v-if="show">
      <h1>List of Cars:</h1>
      <ul>
        <li v-for="(car, index) in cars" :key="index">{{ car.name }}</li>
      </ul>
    </div>
    <div v-else>
      <p>No cars available.</p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useAuthStore } from "../stores/auth";

const token = useAuthStore().userInfo.token;

const cars = ref([]);

const show = ref(false);

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://jtw-anatoliy-default-rtdb.europe-west1.firebasedatabase.app/cars.json?auth=${token}`
    );
    cars.value = response.data;
    show.value = true;
  } catch (err) {
    console.log(err.response);
  }
});
</script>
