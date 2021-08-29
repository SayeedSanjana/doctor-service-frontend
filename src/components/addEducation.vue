<template>

    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Education</h2>
        
        <form @submit.prevent>
            <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-4" v-for="(edu,index) in this.form.education" :key="index">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="degreeTitle" v-show="index==0">Degree Title</label>
                    <input id="degreeTitle" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" v-model="edu.degreeTitle">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="graduationYear" v-show="index==0">Graduation Year</label>
                    <input id="graduationYear" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  v-model="edu.graduationYear">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="password" v-show="index==0">Institution</label>
                    <input id="institution" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  v-model="edu.institution">
                </div>
            <div class="flex justify-center">
              
              <button class="px-4 py-2 mt-2" @click ="addNewEducationForm()" v-show="index==this.form.education.length-1">
              <svg class="w-8 h-8 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#fff" d="M21,14h6v20h-6V14z"/><path fill="#fff" d="M14,21h20v6H14V21z"/></svg>
              </button>

              <button class="px-4 py-2 mt-2" @click="deleteEducationForm(index)" v-show="index||(!index && this.form.education.length>1)">
             <svg class="w-7 h-7 " height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
              </button>
                    
            </div>

                
            </div>

            <div class="flex justify-end mt-6">
                <button @click="addEducation('6119e3b03b81cd1b88ca94d4')" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    
  <!-- <div>
    <button @click="addNewEducationForm">
      Add
    </button>
  </div>
  
      <form @submit.prevent="addEducation('6119e3b03b81cd1b88ca94d4')">
        <div  class="container px-5 py-24 mx-auto" v-for="(edu,index) in this.form.education" :key="index">
         <div class=" -m-4 border border-rounded "  >
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
        </div>
         </div>
        <button  class="font-green-200">Add Education</button>
      </form>  -->

      <!-- <form @submit.prevent="addEducation('6119e3b03b81cd1b88ca94d4')">
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
      </form> -->
        
    </section> 
</template>

<script>
import axios from 'axios'
export default {
  
  name: 'addEducation',
  data(){
    return{
      // edu:{
      //     degreeTitle:'',
      //     graduationYear:'',
      //     institution:''
      // },

      form:{
        education:[
          {
          degreeTitle:'',
          graduationYear:'',
          institution:''
      }
        ]
      },
      
    }
  },
  methods:{
    addEducation(id){
      //console.log(this.education);

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
     addNewEducationForm(){
       this.form.education.push({
          degreeTitle:'',
          graduationYear:'',
          institution:''
       });

       
    },
    deleteEducationForm(i){
       this.form.education.splice(i,1);

       
    },
    

  }

}
</script>

<style >

</style>