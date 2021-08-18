import getDoctor from './components/getDoctor.vue'
import createDoctor from './components/createDoctor.vue'
import updateDoctor from './components/updateDoctor.vue'
// import addEducation from './components/addEducation.vue'
//import updateEducation from './components/updateEducation.vue'
// import deleteEducation from './components/deleteEducation.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'getDoctor',
        component:getDoctor,
        path:'/'
    },
    {
        name:'createDoctor',
        component:createDoctor,
        path:'/create-doctor'
    },
    {
        name:'updateDoctor',
        component:updateDoctor,
        path:'/update-doctor/:id'
    },
];
const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router