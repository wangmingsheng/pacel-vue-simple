<template>
<div>
    <h5>{{msg}}</h5>
    <h6>{{param}}</h6>
</div>
</template>
<script type="text/babel">
    export default {
        data(){
            return {
                msg:"comB"
            }
        },
        created(){
            this.param=this.$route.params.id
            console.log(this.param)
        }
    }
</script>
