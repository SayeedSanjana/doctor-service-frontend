<template>

<section class="text-gray-600 body-font" >
  <div  class="container px-5 py-24 mx-auto">
    <div class=" -m-4 grid grid-cols-3 " >
      <div class="p-4 "  v-for="doctor in doctors" :key="doctor._id" >
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{doctor.nationality}}</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-600 mb-3">{{doctor.firstName}} {{doctor.lastName}}</h1>
          <p class=" mb-3 text-gray-500">{{doctor.contact}}</p>
          <p class="tracking-widest text-xs title-font font-bold text-gray-500 mb-2">DOB: <span class="text-medium text-gray-400 mb-2">{{doctor.dob}}</span></p>
          <p class="tracking-widest text-xs title-font font-bold text-gray-500 mb-2">Gender: <span class="text-medium text-gray-400 mb-2">{{doctor.gender}}</span></p>
          <p class="tracking-widest text-xs title-font font-bold text-gray-500 mb-2">Religion: <span class="text-medium text-gray-400 mb-2">{{doctor.religion}}</span></p>
          <p class="tracking-widest text-xs title-font font-bold text-gray-500 mb-2">Blood Group: <span class="text-medium text-gray-400 mb-2">{{doctor.bloodGroup}}</span></p>
           <p class="tracking-widest text-xs title-font font-bold text-gray-500 mb-2">NID: <span class="text-medium text-gray-400 mb-2">{{doctor.nid}}</span></p>
          <!-- <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a> -->
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <div class=" border-r-2 border-gray-300 pr-3  mr-3 ">
            <button class="bg-transparent text-center hover:bg-blue-200  text-blue-700 font-semibold hover:text-white p-1 border border-blue-400 hover:border-transparent rounded">
            <span class="text-gray-400 inline-flex items-center leading-none text-sm text-blue-500">
              <svg class="w-4 h-4 mr-1 fill-current text-blue-500"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" ><g><path xmlns="http://www.w3.org/2000/svg" d="M200,24a24,24,0,1,1-24,24A24,24,0,0,1,200,24ZM32,192a24,24,0,1,0,24-24A24,24,0,0,0,32,192Zm53-91a24,24,0,1,0,24-24A24,24,0,0,0,85,101Zm354.039,7.273A237.668,237.668,0,0,0,315.461,24.881a24,24,0,1,0-12.883,46.238,189.368,189.368,0,0,1,98.448,66.463A185.963,185.963,0,0,1,440,252.116C440,355.716,355.629,440,251.922,440a186.451,186.451,0,0,1-114.189-38.577,188.962,188.962,0,0,1-36.191-36.548L88,361.865v59.956a236.16,236.16,0,0,0,330.847-2.9,235.762,235.762,0,0,0,20.192-310.646ZM72,456V341.919l114.794,25.51a24,24,0,1,0,10.412-46.858l-144-32A24,24,0,0,0,24,312V456a24,24,0,0,0,48,0Z" fill="" data-original="#000000" style=""/></g>
              </svg>Edit
            </span>
            </button>
            </div>
            <div class="  pr-3  mr-3 ">
            <button class="bg-transparent text-center hover:bg-red-200  text-red-500 font-semibold hover:text-white p-1 border border-red-400 hover:border-transparent rounded">
            <span class="text-gray-400 inline-flex items-center leading-none text-sm text-red-400">
              <svg class="w-4 h-4 mr-1 fill-current text-red-600" id="Icons" height="512" viewBox="0 0 74 74" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m49.37 72h-24.74a5 5 0 0 1 -5-4.52l-4.63-48.38a1 1 0 0 1 .26-.77 1 1 0 0 1 .74-.33h42a1 1 0 0 1 .74.33 1 1 0 0 1 .26.77l-4.66 48.38a5 5 0 0 1 -4.97 4.52zm-32.27-52 4.55 47.29a3 3 0 0 0 3 2.71h24.72a3 3 0 0 0 3-2.71l4.53-47.29z"/><path d="m26 29h2v32h-2z"/><path d="m36 29h2v32h-2z"/><path d="m46 29h2v32h-2z"/><path d="m63 20h-50a1 1 0 0 1 -1-1v-9a1 1 0 0 1 1-1h50a1 1 0 0 1 1 1v9a1 1 0 0 1 -1 1zm-49-2h48v-7h-48z"/><path d="m49 11h-24a1 1 0 0 1 -1-1v-5a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v5a1 1 0 0 1 -1 1zm-23-2h22v-4a1 1 0 0 0 -1-1h-20a1 1 0 0 0 -1 1z"/></svg>
              Delete
            </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
</section>
    <!-- <div style="padding-top:50px">
    
    <div v-for="doctor in doctors" :key="doctor._id">
        <h3>Doctor's Name: {{doctor.firstName}} {{doctor.lastName}}</h3>
        <h3>Contact: {{doctor.contact}}</h3>
        <h3>Date Of Birth: {{doctor.dob}}</h3>
        <h3>Gender: {{doctor.gender}}</h3>
        <h3>Religion: {{doctor.religion}}</h3>
        <h3>BloodGroup: {{doctor.bloodGroup}}</h3>
        <h3>Nid: {{doctor.nid}}</h3>
        <h3>Nationality: {{doctor.nationality}}</h3>
        <h3>Address: {{doctor.address.country}} {{doctor.address.city}} {{doctor.address.area}} {{doctor.address.zipcode}} {{doctor.address.location.type}}</h3>
         <div v-for="coordinate in doctor.address.location.coordinates" :key="coordinate._id">
             <h3>Location Cordinates: {{coordinate}}</h3>
         
         </div>
         <a><router-link :to="'/update-doctor/'+doctor._id">Update</router-link></a>
         <hr>
    </div>
    
    </div> -->
    
</template>

<script>
import axios from 'axios'
export default {
  name: 'getDoctor',
  created(){
      this.getDoctors()
  },
  data(){
      return{
        doctors:[],
      }
  },
  methods:{
      getDoctors(){
          axios.get('http://localhost:9000/api/doctors')
          .then((response)=>{
              console.log(response.data['result'])
              this.doctors=response.data['result']

          })
          .catch((error)=>{
              console.log(error)
          })
      },
  },

}
</script>

<style >

</style>