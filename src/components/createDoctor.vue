<template>

 <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
  <div class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 ">
    Account Settings
  </div>
<div class="flex items-center justify-center p-6 mx-3 my-4  ">
  <form @submit.prevent="createDoctor" class="w-full max-w-lg " >
    <div class="mx-4 py-4 p-2">
   <h3 class="text-gray-500 font-semibold text-left underline ">Basic Information: </h3>
  </div>
    <div><!--Basic Profile-->
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="duuid">
        Duuid
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="duuid" type="text" placeholder="D123123123" v-model="formdata.duuid" >
      <!--<p class="text-red-500 text-xs italic">Please fill out this field.</p>-->
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nid">
        nid
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="nid" type="text" placeholder="11111111111" v-model="formdata.nid" >
      <!--<p class="text-red-500 text-xs italic">Please fill out this field.</p>-->
    </div>
    </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="firstName">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="firstName" type="text" placeholder="John" v-model="formdata.firstName" >
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="lastName">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lastName" type="text" placeholder="Doe" v-model="formdata.lastName">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="duuid">
        Duuid
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="duuid" type="text" placeholder="D123123123" v-model="formdata.duuid" >
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div> -->
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contact">
        Contact
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact" type="text" placeholder="Give contact!" v-model="formdata.contact" >
    </div>
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="dob">
        Date Of Birth
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="dob" type="date" placeholder="1990-09-08"  v-model="formdata.dob"> 
      <!-- <date-pick
        v-model="formdata.dob"
        :format="'YYYY.MM.DD'"
    ></date-pick>  -->
     <!-- <datepicker id="dob" type="date"  v-model="formdata.dob" format="YYYY-MM-dd"></datepicker>  -->
    </div>
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="gender">
        Gender
      </label>
      <div class="relative">
        <select value="male" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="gender" v-model="formdata.gender">
          <option  value="" selected disabled class="text-gray-200">Click here</option> 
          <option  value="male"  >Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="religion">
        Religion
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="religion" type="text" placeholder="" v-model="formdata.religion" >
    </div>
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nationality">
        Nationality
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nationality" type="text" placeholder="Bangladeshi" v-model="formdata.nationality">
    </div>
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="bloodGroup">
        Blood Group
      </label>
      <div class="relative">
        <select name="bloodGroup" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="bloodGroup" v-model="formdata.bloodGroup" >
          <option  value="" selected disabled class="text-gray-200">Click here</option> 
          <option>A+VE</option>
          <option>B+VE</option>
          <option>O+VE</option>
           <option>AB+VE</option>
            <option>A-VE</option>
             <option>B-VE</option>
              <option>O-VE</option>
                  <option>AB-VE</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    



  </div>
    </div>
  <div><!--Address-->
  <div class="mx-4 py-4">
<h3 class="text-gray-500 font-semibold text-left underline ">Address: </h3>
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-2 ">
    
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="country">
        Country
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="country" v-model="formdata.address.country" >
           <option  value="" selected disabled class="text-gray-200">Click here</option> 
          <option>Bangladesh</option>
          <option>India</option>
          <option>Canada</option>
           <option>USA</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
        City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="text" placeholder="Dhaka" v-model="formdata.address.city">
    </div>
   
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-2">
    
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="zipcode">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="zipcode" type="text" placeholder="1207" v-model="formdata.address.zipcode">
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="area">
        Area
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="area" type="text" placeholder="Dhanmondi" v-model="formdata.address.area">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="type">
        Locatiopn type
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type" type="text" placeholder="points" v-model="formdata.address.location.type">
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="coordinate">
        Coordinates
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="coordinate" type="text" placeholder="10.00" v-model.number="coordinate" @keyup="addCoordinate">
    </div>
  </div>
    </div>
    <!-- <div>
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
        </div> -->
    <div class="mt-8 py-3 px-3 flex justify-end">
      <button class="  bg-purple-500 hover:bg-purple-400  text-white font-bold py-2 px-4 rounded" >
      Create Profile
    </button>
    </div>
</form>
</div>
</section>
</template>



<!-- 
    <div style="padding-top:50px">
      <form @submit.prevent="createDoctor">
        <div>
          <label for="duuid">DUUID</label>
          <input type="text" id="duuid" v-model="formdata.duuid">
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

        <div>
          <label for="country">COUNTRY: </label>
          <input type="text" id="country" v-model="formdata.address.country">
        </div>
        <div>
          <label for="city">CITY: </label>
          <input type="text" id="city" v-model="formdata.address.city">
        </div>
        <div>
          <label for="area">AREA: </label>
          <input type="text" id="area" v-model="formdata.address.area">
        </div>
        <div>
          <label for="zipcode">ZIPCODE: </label>
          <input type="text" id="zipcode" v-model="formdata.address.zipcode">
        </div>
        <div>
          <label for="type">LOCATION TYPE: </label>
          <input type="text" id="type" v-model="formdata.address.location.type">
        </div>
        <div>
          <label for="coordinate">LOCATION COORDINATES: </label>
          <input type="text" id="coordinate" v-model.number="coordinate" @keyup="addCoordinate">
        </div>
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

         
        
        <button @click="queueEducation">Create Profile</button>
        
     </form>  -->

        <!-- <form @submit.prevent="addEducation('61195b8ccf1d893f24a76d63')">
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
        <button @click="queueEducation1">Add Education</button>
      </form> 
        
    </div> -->


<script>
import axios from 'axios'
//import moment from 'moment'
//import Datepicker from 'vuejs-datepicker';
//import DatePick from 'vue-date-pick';
export default {
  
  name: 'createDoctor',
  data(){
    return{
      coordinate:null,
      edu:{
          degreeTitle:'',
          graduationYear:'',
          institution:''
      },

      form:{
        education:[]
      },
      
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
        //education:[]
      }
    }
  },
  components:{
     //Datepicker
     //DatePick
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
  
  
    addCoordinate(e){
      if(e.key && this.coordinate){
        this.formdata.address.location.coordinates.push(this.coordinate)
        this.coordinate=''
      }
      //this.formdata.address.location.coordinates.push(this.coordinate)
    },
    createDoctor(){
      console.log(this.formdata);

      axios.post('http://localhost:9000/api/doctors/create',this.formdata)
      .then((response)=>{
              console.log(response)
              //this.doctors=response.data['result']

          })
          .catch((error)=>{
             console.log(error)
          })

    },
    // queueEducation(){
    //    this.formdata.education.push(this.edu);
    // },
     queueEducation1(){
       this.form.education.push(this.edu);
    }
  }

}
</script>

<style >

</style>