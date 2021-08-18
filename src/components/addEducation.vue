<template>
    <div style="padding-top:50px">
      <form @submit.prevent="addEducation('6119e3b03b81cd1b88ca94d4')">
        <div>
          <label for="degreeTitle">DEGREE TITLE</label>
          <input type="text" id="degreeTitle" v-model="edu.degreeTitle">
        </div>
        <div>
          <label for="graduationYear">GRADUATION YEAR: </label>
          <input type="text" id="graduationYear" v-model="edu.graduationYear">
        </div>
        <div>
          <label for="institution">INSTITUTION: </label>
          <input type="text" id="institution" v-model="edu.institution">
        </div>
        <button @click="queueEducation1" class="font-green-200">Add Education</button>
      </form>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
  
  name: 'addEducation',
  data(){
    return{
      edu:{
          degreeTitle:'',
          graduationYear:'',
          institution:''
      },

      form:{
        education:[]
      },
      
    }
  },
  methods:{
    addEducation(id){
      console.log(this.education);

      axios.post('http://localhost:9000/api/doctors/'+id+'/add-doctor-education',this.form)
      .then((response)=>{
              console.log(response)
              //this.doctors=response.data['result']

          })
          .catch((error)=>{
             console.log(error)
          })

    },
  
    queueEducation(){
       this.formdata.education.push(this.edu);
    },
     queueEducation1(){
       this.form.education.push(this.edu);
    }
  }

}
</script>

<style >

</style>