const Aaa = () => require('./a.vue')
const Bbb = () => require('./b.vue')

export default [
    {
        path: '/a',
        component: Aaa()
    },
    {
        path: '/b/:id',
        component: Bbb()
    }
]