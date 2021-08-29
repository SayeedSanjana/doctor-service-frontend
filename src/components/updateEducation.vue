<template>

    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update Education</h2>
        
        <form @submit.prevent="updateEducation(this.$route.params.id,this.$route.params.eid)">
            <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-3">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="degreeTitle">Degree Title</label>
                    <input id="degreeTitle" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" v-model="formdata.degreeTitle">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="graduationYear">Graduation Year</label>
                    <input id="graduationYear" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  v-model="formdata.graduationYear">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="password" >Institution</label>
                    <input id="institution" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  v-model="formdata.institution">
                </div>
            

                
            </div>

            <div class="flex justify-end mt-6">
                <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Edit</button>
            </div>
        </form>
    </section>
    <!-- <div style="padding-top:50px">
     
       <form @submit.prevent="updateEducation(this.$route.params.id,this.$route.params.eid)">

       
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

       <button >Update</button>
        
     </form>
    
    

    </div> -->
    
</template>

<script>
import axios from 'axios'
export default {
  name: 'updateEducation',
  created(){
      this.getEducation(this.$route.params.id,this.$route.params.eid)
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
              console.log(id,eid)
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