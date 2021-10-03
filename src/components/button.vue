<template>
    <button>{{title}}</button>
</template>

<script>
module.exports ={ 
    props:['title'],
    data:function() { 
        return {
           
        }
    }

}
</script>

<style scoped>
 button{
     background:red;
 }
</style>