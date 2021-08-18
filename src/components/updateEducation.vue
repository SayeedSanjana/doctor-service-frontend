<template>
    <div style="padding-top:50px">
     
       <form @submit.prevent="updateEducation('6119e3b03b81cd1b88ca94d4','6119e3b03b81cd1b88ca94d6')">

       
        <div>
          <label for="degreeTitle">DEGREE TITLE:</label>
          <input type="text" id="degreeTile" v-model="formdata.degreeTitle" >
        </div>
        <div>
          <label for="graduationYear">GRADUATION YEAR: </label>
          <input type="text" id="graduationYear" v-model="formdata.graduationYear">
        </div>
        <div>
          <label for="institution">INSTITUTION: </label>
          <input type="text" id="institution" v-model="formdata.institution">
        </div>

       <button>Update</button>
        
     </form>
    
    

    </div>
    
</template>

<script>
import axios from 'axios'
export default {
  name: 'updateEducation',
  created(){
      this.getEducation("6119e3b03b81cd1b88ca94d4","6119e3b03b81cd1b88ca94d6")
  },
  data(){
      return{
       
        formdata:{
        degreeTitle:'',
        graduationYear:'',
        institution:'',
        
      }
    }
  },
  
  methods:{
      getEducation(id,eid){
          axios.get('http://localhost:9000/api/doctors/'+id+'/'+eid+'/doctor-specific-education')
          .then((response)=>{
              this.formdata=response.data.result
              console.log(this.formdata)

          })
          .catch((error)=>{
          console.log(error)
          })
      },
      updateEducation(id,eid){
          console.log(this.formdata);
      axios.put('http://localhost:9000/api/doctors/'+id+'/'+eid+'/update-doctor-education',this.formdata)
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