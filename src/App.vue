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
                isHide:true,
            }
        },
        mounted(){
        // this.init()
        },
        methods:{
            init(){
                var path=this.$route.path;
                console.log(path)
                if(path=='/'){
                    this.isHide=false
                }else{
                    this.isHide=true
                }
            }
        },
    }
</script>

<style>
  #app {
    background: #ffffff;
  }
</style>