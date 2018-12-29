<template>
    <div @click="mytest">
        {{test}}
    </div>
</template>
<script>
export default {
    props:['test'],
    methods:{
        mytest(){
            this.test=50
            this.$emit('update:test',50)
        }
    }
}
</script>
