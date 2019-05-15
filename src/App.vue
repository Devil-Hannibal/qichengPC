<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    import Header from './../src/components/common/Header'
    import Footer from './../src/components/common/Footer'
    export default {
        name: 'App',
        components:{
            "my-header":Header,
            "my-footer":Footer,
        },
        data(){
            return{
               
            }
        }
        
    }
</script>

<style>
  #app {
    background: #ffffff;
  }
</style>