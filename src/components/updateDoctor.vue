<template>
    <div style="padding-top:50px">
    <!--<button @click="getDoctor('6119e3b03b81cd1b88ca94d4')">Doctor's Profile</button>-->
    <!--<div v-for="doctor in doctors" :key="doctor._id">-->
       <form @submit.prevent="updateDoctor('6119e3b03b81cd1b88ca94d4')">
        <div>
          <label for="duuid">DUUID</label>
          <input type="text" id="duuid" v-model="formdata.duuid"  readonly>
        </div>
        <div>
          <label for="firstName">FIRST NAME: </label>
          <input type="text" id="firstName" v-model="formdata.firstName">
        </div>
        <div>
          <label for="lastName">LAST NAME: </label>
          <input type="text" id="lastName" v-model="formdata.lastName">
        </div>
        <div>
          <label for="contact">CONTACT: </label>
          <input type="text" id="contact" v-model="formdata.contact">
        </div>
        <div>
          <label for="dob">DATE OF BIRTH: </label>
          <input type="text" id="dob" v-model="formdata.dob">
        </div>
        <div>
          <label for="gender">GENDER</label>
          <input type="text" id="gender" v-model="formdata.gender">
        </div>
        <div>
          <label for="bloodGroup">BLOOD GROUP: </label>
          <input type="text" id="bloodGroup" v-model="formdata.bloodGroup">
        </div>
        <div>
          <label for="nid">NID: </label>
          <input type="text" id="nid" v-model="formdata.nid">
        </div>
        <div>
          <label for="nationality">NATIONALITY: </label>
          <input type="text" id="nationality" v-model="formdata.nationality">
        </div>
        <div>
          <label for="religion">RELIGION: </label>
          <input type="text" id="religion" v-model="formdata.religion">
        </div>
         <button>Update Profile</button>
     </form>
    

    </div>
    
</template>

<script>
import axios from 'axios'
export default {
  name: 'updateDoctor',
  created(){
      this.getDoctor("6119e3b03b81cd1b88ca94d4")
  },
  data(){
      return{
        doctor:{},
         formdata:{
        duuid:'',
        firstName:'',
        lastName:'',
        contact:'',
        dob:'',
        gender:'',
        bloodGroup:'',
        nid:'',
        nationality:'',
        religion:'',
        address:{
          country:'',
          city:'',
          area:'',
          zipcode:'',
          location:{
            type:'',
            coordinates:[]
          },
          //education:[ ]
        },
        education:[],
        affiliations:[]
      }
    }
  }
  ,
  
  methods:{
      getDoctor(id){
          axios.get('http://localhost:9000/api/doctors/'+id)
          .then((response)=>{
              //console.log(response.data['result'])
             // this.doctor=response.data['result']
              //console.log("bhbhbhbhbhbhbhbh")
              //console.log(response.data.result)
              this.formdata=response.data.result
             // console.log(this.formdata)

          })
          .catch((error)=>{
              console.log(error)
          })
      },
      updateDoctor(id){
          console.log(this.formdata);
      axios.put('http://localhost:9000/api/doctors/'+id+'/update',this.formdata)
      .then((response)=>{
              console.log(response)
              //this.doctors=response.data['result']

          })
          .catch((error)=>{
             console.log(error)
          })
      }
  },

}
</script>

<style >

</style>