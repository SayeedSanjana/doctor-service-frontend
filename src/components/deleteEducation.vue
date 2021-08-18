<template>
    <div style="padding-top:50px">
     
      <div v-for="edu in this.formdata.education" :key="edu._id">
   
        <h3>Degree Title: {{edu.degreeTitle}} </h3>
        <h3>Graduation Year: {{edu.graduationYear}}</h3>
        <h3>Institution: {{edu.institution}}</h3>

       <button @click.prevent="deleteEducation('61067cff09c50c1618b10bb0',edu._id)" class="bg-red-300 rounded p-1 text-white m-2">Delete</button>
    </div> 
        
     
    
    

    </div>
    
</template>

<script>
import axios from 'axios'
export default {
  name: 'deleteEducation',
  created(){
      this.getEducation('61067cff09c50c1618b10bb0')
  },
  data(){
      return{
       
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
  },
  
  methods:{
      getEducation(id){
          axios.get('http://localhost:9000/api/doctors/'+id)
          .then((response)=>{
              this.formdata=response.data.result
              console.log(this.formdata)

          })
          .catch((error)=>{
          console.log(error)
          })
      },
      deleteEducation(id,eid){
          //console.log(this.formdata);
      axios.delete('http://localhost:9000/api/doctors/'+id+'/'+eid+'/remove-doctor-education',this.formdata)
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