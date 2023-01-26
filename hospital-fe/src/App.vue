<template>
  <div class="flex flex-row justify-between w-screen h-screen p-5">
    <div class="flex flex-col">
      <div class="flex flex-row space-x-10">
        <button class="rounded-full bg-blue-400 h-fit px-4">Get data</button>
        <input type="checkbox" class="rounded-full bg-blue-400 h-fit px-4">
        <p>Auto fetch</p>
      </div>
      <p>Patients</p>
      <PatientsCard />
      <i class="fa-solid fa-plus"></i>
      <p>Drugs</p>
      <DrugsCard />
    </div>

    <button class="rounded-full bg-blue-400 h-fit px-4">Simulate</button>

    <div class="flex flex-col">
      <SimulationCard />
      <div class="flex flex-row">
        <button class="fa-solid fa-left-long"></button>
        <button class="fa-solid fa-right-long"></button>
      </div>
    </div>
  </div>
</template>

<script>
import SimulationCard from './components/SimulationCard.vue'
import PatientsCard from './components/PatientsCard.vue'
import DrugsCard from './components/DrugsCard.vue'

export default {
  name: 'App',
  components: {
    SimulationCard,
    PatientsCard,
    DrugsCard
  }
}
</script>

<style>
</style>
