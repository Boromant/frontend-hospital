<template>
  <div class="flex flex-col w-screen h-screen p-5">
    <div class="flex flex-row h-[5%] w-full">
        <button @click="getData" class="rounded-full bg-purple text-blackbrown w-fit px-4 hover:border-2 border-beige">Get data</button>
    </div>
    <div class="flex flex-col xl:flex-row my-auto h-[95%] mx-4 justify-between gap-4">
        <div class="flex flex-row xl:flex-col h-1/4 xl:h-full justify-center w-full xl:w-1/5 mt-4 gap-[10%]">
          <div class="w-1/4 xl:w-full">
            <p class="mb-4">Patients</p>
            <PatientsCard class="text-xs px-1 sm:text-base sm:px-4" :states="patientStates" :numbers="patientNumbers"/>
          </div>
          <div class="flex flex-row">
            <i class="fa-solid fa-plus fa-2x m-auto"></i>
          </div>
          <div class="w-1/4 xl:w-full">
            <p class="mb-4">Drugs</p>
            <DrugsCard class="text-xs px-1 sm:text-base sm:px-4" :drugs="drugs"/>
          </div>
        </div>

      <div class="flex flex-col mx-auto xl:my-auto w-28 xl:w-[10%]">
        <button @click="addSimulation" class="rounded-full bg-purple text-blackbrown h-fit px-4 hover:border-2 border-beige">Simulate</button>
      </div>

      <div class="flex flex-col my-auto border-2 w-full xl:w-[55%] h-3/4 overflow-y-auto">
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

import axios from 'axios'

import { Quarantine } from 'hospital-lib'
import { PatientsRegister } from 'hospital-lib'

let patients = new PatientsRegister(new Map({F: 1, H: 2, D: 3, T: 1, X: 0}))
let quarantine = new Quarantine(patients)

export default {
  name: 'App',
  components: {
    SimulationCard,
    PatientsCard,
    DrugsCard,
  },
  data() {
    return {
      patientStates: ["Fever", "Healthy", "Diabetes", "Tuberculosis", "Dead"],
      patientNumbers: [0, 0, 0, 0, 0],
      drugs: [],
      simulations: []
    }
  },
  methods: {
    // SIMULATION
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
                        after: {numbers: this.simulate(this.drugs)}
                       }
             }
    },

    simulate(drugs) {
      
      console.log(quarantine, drugs)
      //let quarantine = new Quarantine({F: 1, H: 2, D: 3, T: 1, X: 0})
      //quarantine.setDrugs(drugs)
      //quarantine.wait40Days()
      //console.log(quarantine.report().values())
      //return [0,0,0,0,7]
    },

    // SERVER DATA
    async getData() {
      let patients = []
      let drugs = []
      await axios.get("http://localhost:7200/patients")
      .then((response) => {
        response.data.split(",").forEach(patient => {
          patients.push(patient)
        })
      })
      

      await axios.get("http://localhost:7200/drugs")
      .then((response) => {
        response.data.split(",").forEach(drug => {
          drugs.push(drug)
        })
      })
      this.setData(patients, drugs)
    },
    setData(patients, drugs) {
      this.patientNumbers = [0, 0, 0, 0, 0]
      this.drugs = []
      patients.forEach(patient => {
        switch(patient){
          case "F":
            this.patientNumbers[0] += 1
            break
          case "H":
            this.patientNumbers[1] += 1
            break
          case "D":
            this.patientNumbers[2] += 1
            break
          case "T":
            this.patientNumbers[3] += 1
            break
          case "X":
            this.patientNumbers[4] += 1
            break
        }
      })
      drugs.forEach(drug => {
        switch(drug){
          case "As":
            this.drugs.push("Aspirin")
            break
          case "An":
            this.drugs.push("Antibiotics")
            break
          case "I":
            this.drugs.push("Insulin")
            break
          case "P":
            this.drugs.push("Paracetamol")
            break
        }
      })
    }
  },
}
</script>

<style>
</style>
