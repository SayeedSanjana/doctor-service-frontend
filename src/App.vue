<template>
<!--<div>
<button @click="activeTab = 'getDoctor'" class="bg-green-600 m-2 text-white rounded p-3">Get Doctor</button>
<button @click="activeTab = 'createDoctor'"  class="bg-green-600 m-2 text-white rounded p-3">Create Doctor</button>
<button @click="activeTab = 'updateDoctor'"  class="bg-green-600 m-2 text-white rounded p-3">Update Doctor</button>
<button @click="activeTab = 'addEducation'"  class="bg-green-600 m-2 text-white rounded p-3">Add Education</button>
<button @click="activeTab = 'updateEducation'" class="bg-green-600 m-2 text-white rounded p-3">Update Education</button>
<button @click="activeTab = 'deleteEducation'" class="bg-green-600 m-2 text-white rounded p-3">Doctor's Education</button> -->


<!-- <keep-alive>
<component :is="activeTab"/>
</keep-alive>
</div> -->
<router-view />

</template>

<script>
//import getDoctor from './components/getDoctor.vue'
// import createDoctor from './components/createDoctor.vue'
// import updateDoctor from './components/updateDoctor.vue'
// import addEducation from './components/addEducation.vue'
// import updateEducation from './components/updateEducation.vue'
// import deleteEducation from './components/deleteEducation.vue'


export default {
  name: 'App',
  components: {
    //getDoctor,
    // createDoctor,
    // updateDoctor,
    // addEducation,
    // updateEducation,
    // deleteEducation
  },
  data(){
    return{
      activeTab:'getDoctor'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
