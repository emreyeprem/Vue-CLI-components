<template>
<h1>Server Status: {{ status }}</h1>
</template>

<script>
export default {
   data: function(){
       return {
           status: 'Critical
       }
   },
   methods: {
       changeStatus(){
           this.status = 'Normal';
       }
   }
}
</script>

<style>

</style>
