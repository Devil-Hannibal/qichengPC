<template>
  <div id="app">
    <my-header v-if="isHide"></my-header>
    <router-view/>
    <my-footer  v-if="isHide"></my-footer>
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
                isHide:false,
            }
        },
        methods:{
            init(){
                var path=this.$route.path
                if(path=='./'){
                    this.isHide=true
                }else{
                    this.isHide=false
                }
            }
        }
    }
</script>

<style>
  #app {
    background: #ffffff;
  }
</style>