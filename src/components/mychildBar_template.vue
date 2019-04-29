<template>
    <div>
        <nav class="navbar  testsbar" v-if="childrens.length != 0">
            <div class="container-fluid">
                <ul class="nav navbar-nav  navbar-left testnavbar">
                    <li v-for="children in childrens">
                       <router-link :to="{path:'/mychild/'+children.name}" active-class="active" v-on:click.native="childDetails(children)">{{children.name}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="sectionreset-padding sectionreset-margin">
          <router-view  v-bind:school="school" v-bind:userdetails="userdetails" v-bind:mychild ="mychild"></router-view>
        </div>
    </div>
</template>
<script>
import UserService from '../services/userService.js';
import EventBus from '../event-bus'
    export default{
        props:['school','userdetails','acdemicyearandboard'],
        data(){
            return{
                id:this.$cookie.get('id'),
                userid:this.$cookie.get('userid'),
                childrens: [],
                mychild: {

                }
            }
        },
        created(){
            const parentid = {
              "id": this.userid
            }
            UserService.MyChild(this.id,parentid).then((response)=>{
                console.log(response);
                this.childrens=response.data;
            });
        },
        methods:{
            childDetails:function(children){
                console.log(children);
                this.mychild = children;
          
            }
        },
      }
</script>
<style>
.sectionreset-padding{
    padding:0;
}
.sectionreset-margin{
    margin:0
}
.navbar{
position: relative;
    min-height: 50px;
    margin-bottom:0px;
    border: 1px solid transparent;
}
.navbar-nav>li>a {
padding-top:10px;
     padding-bottom:15px;
}
.active{
    border-bottom:3px solid #fb6750;
}
</style>
