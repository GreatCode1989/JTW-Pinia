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
import axiosApiInstance from "../api";

const cars = ref([]);

const show = ref(false);

onMounted(async () => {
  try {
    const response = await axiosApiInstance.get(
      `https://jtw-anatoliy-default-rtdb.europe-west1.firebasedatabase.app/cars.json`
    );
    cars.value = response.data;
    show.value = true;
  } catch (err) {
    console.log(err.response);
  }
});
</script>
