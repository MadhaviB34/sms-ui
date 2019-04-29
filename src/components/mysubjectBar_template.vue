<template>
    <div>
        <nav class="navbar iteachbar" v-if="mysubjects.length != 0">
            <div class="container-fluid">
                <ul class="nav navbar-nav  navbar-left testnavbar">
                    <li v-for="grade in mysubjects">
                        <router-link :to="{path:'/mysubjects/'+grade.gradenumber+grade.sectionname+'-'+grade.subjectname+'-'+grade.syllabustype}" active-class="active" v-on:click.native="setMySubject(grade)">{{grade.gradenumber}}{{grade.sectionname}}-{{grade.subjectname}}-{{grade.syllabustype}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="sectionreset-padding sectionreset-margin">
            <router-view v-bind:school="school" v-bind:userdetails="userdetails" v-bind:mysubject="mysubject" v-bind:acdemicyearandboard="acdemicyearandboard" v-bind:academicsandboards="academicsandboards" v-bind:userid="userid"></router-view>
        </div>
    </div>
</template>
</template>
<script>
import UserService from '../services/userService.js'

    export default{
        props:['school','userdetails','acdemicyearandboard','userid','academicsandboards','userid'],
        data(){
            return{
                mysubjects:[],
                mysubject:{},
                userId:{
                        id:this.$cookie.get('userid')
                },
                id:this.$cookie.get('id')
            }
        },
        created(){
            UserService.MySubjects(this.userId,this.id).then((response)=>{
                console.log(response.data);
                this.mysubjects=response.data
            })
        },
        methods:{
            setMySubject:function(grade){
                console.log(grade);
                this.mysubject=grade
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