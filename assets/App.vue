<template>
    <div>
        <h1>{{msg}}</h1>
        <router-link :to="'/'">home</router-link>
        <a href="javascript:;" @click="toA">a</a>
        <router-link :to="'/b/111'">b</router-link>
        <router-view/>
    </div>
</template>
<script>
    class msg{
        constructor(msg){
            this.msg=msg
        }
        init(){
            return this.msg
        }
    }
    export default {
        data(){
            return {
                msg:new msg("The server is running!").init()
            }
        },
        methods:{
            toA(){
                this.$router.push({path:'/a',params:{}})
            }
        }
    }
</script>
<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    body{
        h1{
            font-size: 30px;
            font-weight: 400;
        }
    }
</style>
