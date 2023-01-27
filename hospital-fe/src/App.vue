<template>
  <div class="flex flex-col w-screen h-screen p-5">
    <div class="flex flex-row h-[5%] w-full">
        <button class="rounded-full bg-purple text-blackbrown w-[10%] px-4 hover:border-2 border-beige">Get data</button>
    </div>
    <div class="flex flex-row my-auto h-[95%] mx-4 justify-between gap-4">
      <div class="flex flex-col justify-between h-full w-1/5">
        <div class="flex flex-col h-full justify-center">
          <div>
            <p class="mb-4">Patients</p>
            <PatientsCard :states="patientStates" :numbers="patientNumbers"/>
          </div>
          <div class="flex flex-row place-content-center my-4">
            <i class="fa-solid fa-plus fa-2x"></i>
          </div>
          <div>
            <p class="mb-4">Drugs</p>
            <DrugsCard :drugs="drugs"/>
          </div>
        </div>
      </div>

      <div class="flex flex-col place-content-center my-auto">
        <button @click="addSimulation" class="rounded-full bg-purple text-blackbrown h-fit px-4 hover:border-2 border-beige">Simulate</button>
      </div>

      <div class="flex flex-col my-auto border-2 w-[55%] h-3/4 overflow-y-auto">
        <ul>
          <li v-for="simulation in simulations" :key="simulation">
            <component :is="simulation.component" :number="simulation.number" :results="simulation.results"></component>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import SimulationCard from './components/SimulationCard.vue'
import PatientsCard from './components/PatientsCard.vue'
import DrugsCard from './components/DrugsCard.vue'

import { Quarantine } from 'hospital-lib'

export default {
  name: 'App',
  components: {
    SimulationCard,
    PatientsCard,
    DrugsCard
  },
  data() {
    return {
      patientStates: ["Fever", "Healthy", "Diabetes", "Tuberculosis", "Dead"],
      patientNumbers: [1, 2, 3, 1, 0],
      drugs: ["Antibiotic", "Insulin"],
      simulations: [],
      quarantine: Quarantine({F: 1, H: 2, D: 3, T: 1, X: 0})
    }
  },
  methods: {
    addSimulation() {
      if(this.simulations.length == 0) {
        this.simulations.push(this.createSimulation(1))
      }else{
        if (this.simulations.length > 10) {
          this.simulations.pop()
        }
        this.simulations.unshift(this.createSimulation(this.simulations[0].number + 1))
      }
    },
    createSimulation(num) {
      return {component: SimulationCard,
              number: num,
              results: {
                        before: {states: this.patientStates, numbers: this.patientNumbers, drugs: this.drugs},
                        after: {numbers: this.simulate()}
                       }
             }
    },
    simulate() {
      this.quarantine.setDrugs(['An', 'I'])
      this.quarantine.wait40Days()
      return this.quarantine.report().values()
    }
  },
}
</script>

<style>
</style>
