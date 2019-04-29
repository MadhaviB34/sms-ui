<template>
    <div>
        <nav class="navbar iteachbar" v-if="classes.length != 0">
            <div class="container-fluid">
                <ul class="nav navbar-nav  navbar-left testnavbar">
                    <li v-for="grade in classes">
                        <router-link :to="{path:'/myclass/'+grade.gradenumber+grade.sectionname+'-'+grade.syllabustype}" active-class="active" v-on:click.native="setmyclass(grade)">{{grade.gradenumber}}{{grade.sectionname}}-{{grade.syllabustype}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="sectionreset-padding sectionreset-margin">
            <router-view v-bind:school="school" v-bind:userdetails="userdetails" v-bind:myclass="myclass" v-bind:acdemicyearandboard="acdemicyearandboard" v-bind:singlestudent="singlestudent" v-bind:academicsandboards="academicsandboards" v-bind:userid="userid"></router-view>
        </div>
    </div>
</template>

<script>
import UserService from '../services/userService.js'

    export default{
        props:['school','userdetails','acdemicyearandboard','userid','singlestudent','academicsandboards'],
        data(){
            return{
                classes:[],
                myclass:'',
                userId:{
                    id:this.$cookie.get('userid')
                },
                requestheaders:{
                    headers:{
                    "Content-Type": 'application/json; charset=utf-8',
                    "authorization":this.userdetails.authorization,
                    "tenant":this.userdetails.tenant
                    }
                },
                id:this.$cookie.get('id')
            
            }
        },
        created(){
            UserService.MyClass(this.userId,this.id).then((response)=>{
                console.log(response);
                this.classes=response.data
            })
        },
      
        methods:{
            setmyclass:function(grade){
                console.log(grade);
                this.myclass=grade
            }
        }

    }
</script>
<style>
.iteachbar{
    background:#eee;
    border-radius:0px;
    height:50px
}
.active{
border-bottom:3px solid #fb6750;
}
.iteachnavbar>li>a:focus{
    background-color:transparent;
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
</style>