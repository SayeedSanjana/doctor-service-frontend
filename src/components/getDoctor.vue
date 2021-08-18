<template>
    <div style="padding-top:50px">
    <button @click="getDoctors">Load all doctors</button>
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
         <hr>
    </div>
    <!--<input type="text" v-model="name">-->

    </div>
    
</template>

<script>
import axios from 'axios'
export default {
  name: 'getDoctor',
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