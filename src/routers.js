import getDoctor from './components/getDoctor.vue'
import createDoctor from './components/createDoctor.vue'
import updateDoctor from './components/updateDoctor.vue'
import addEducation from './components/addEducation.vue'
import updateEducation from './components/updateEducation.vue'
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
    {
        name:'addEducation',
        component:addEducation,
        path:'/add-doctor-education'
    },
    {
        name:'updateEducation',
        component:updateEducation,
        path:'/update-doctor-education/:id/:eid'
    },
];
const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router