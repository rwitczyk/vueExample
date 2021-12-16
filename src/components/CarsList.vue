<template>
  <div>
    <ul>
      <li v-for="car in cars" :key="car.id">
        {{ car.company }}
        {{ car.model }}
        {{ car.numberOfDoors }}
      </li>
    </ul>
  </div>
</template>

<script>

import CarsService from "@/services/carsService.ts";

export default {
  name: "carsList",
  data() {
    return {
      cars: []
    }
  },
  mounted() {
    this.carsService = new CarsService();
    this.carsService.getCarsList().then(response => {
      this.cars = response.data;
    });

  }
}

</script>

<style scoped>

</style>