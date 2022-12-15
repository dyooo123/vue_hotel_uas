//import vue router
import { createRouter, createWebHistory } from 'vue-router'
//define a routes
const routes = [
    {
        path: '/',
        name: 'beranda',
        component: () => import('@/components/DashboardLayout.vue'),
        children:[
            // {
            // path: "/departemen",
            // name: "departemen.index",
            // component: () =>
            // import('@/views/Departemen/indexPage.vue'),
            // },
            // {
            // path: "/departemen/create",
            // name: "departemen.create",
            // component: () =>
            // import('@/views/Departemen/createPage.vue'),
            // },
            // {
            // path: "/departemen/edit",
            // name: "departemen.edit",
            // component: () =>
            // import('@/views/Departemen/editPage.vue'),
            // },
            // {
            // path: "/pegawai",
            // name: "pegawai.index",
            // component: () =>
            // import('@/views/Pegawai/indexPegawaiPage.vue'),
            // },
            // {
            // path: "/pegawai/create",
            // name: "pegawai.create",
            // component: () =>
            // import('@/views/Pegawai/createPegawaiPage.vue'),
            // },
            // {
            // path: "/pegawai/edit",
            // name: "pegawai.edit",
            // component: () =>
            // import('@/views/Pegawai/editPegawaiPage.vue'),
            // },
        ],
    },
]
//create router
const router = createRouter({
history: createWebHistory(),
routes // config routes
})  
export default router;