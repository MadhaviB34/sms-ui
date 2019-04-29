<template>
    <div>
        <nav class="navbar  testsbar" v-if="sections.length != 0">
            <div class="container-fluid">
                <ul class="nav navbar-nav  navbar-left testnavbar">
                    <li v-for="section in sections">
                        <router-link :to="{path:'/crm/'+section.gradenumber+section.sectionname}" active-class="active" v-on:click.native="sectionDetails(section)">{{section.gradenumber}}{{section.sectionname}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="sectionreset-padding sectionreset-margin">
            <router-view v-bind:school="school" v-bind:userdetails="userdetails" v-bind:myclass="myclass" v-bind:sectiondetails="sectiondetails" v-bind:acdemicyearandboard="acdemicyearandboard" v-bind:sections="sections"></router-view>
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
                sections:[],
                myclass:{
                    id:'',
                    gradeid:'',
                    sectionname:'',
                    gradenumber:''
                },
                sectiondetails:[],
                id:this.$cookie.get('id')
            }
        },
        created(){
            UserService.Sections(this.acdemicyearandboard,this.id).then((response)=>{
                console.log(response);
                this.sections=response.data;
            })
        },
        methods:{
            sectionDetails:function(section){
                console.log(section)
                this.myclass={
                    id:section.id,
                    gradeid:section.gradeid,
                    sectionname:section.sectionname,
                    teachername:section.teachername,
                    gradenumber:section.gradenumber
                }
                var sectionids={
                    id:this.myclass.id,
                    gradeid:this.myclass.gradeid
                }
                UserService.SectionDetails(sectionids,this.id).then((response)=>{
                    console.log(response);
                    this.sectiondetails=response.data;

                })
            }
        },
        mounted(){
            var ref=this;
            EventBus.$on('SECTIONS', function (yearandboard,id) {
                UserService.Sections(yearandboard,id).then((response)=>{
                    ref.sections=response.data;
                    console.log(ref.sections)
                  
                })
            });
        }



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
