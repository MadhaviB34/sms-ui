<template>
   <div>
      <app-header v-bind:school="school" v-bind:userdetails="userdetails" v-bind:academicsandboards="academicsandboards" v-bind:acdemicyearandboard="acdemicyearandboard" v-on:changingacademicyear="changingAcademicYear($event)" v-on:changingboard="changingBoard($event)" v-on:login="userLogin($event)" v-bind:error="error" v-on:errormessage="Errormessage()" v-if="!this.$cookie.get('userrole')" ></app-header>
      <product-header-admin v-bind:school="school" v-bind:userdetails="userdetails" v-bind:academicsandboards="academicsandboards" v-bind:acdemicyearandboard="acdemicyearandboard" v-on:changingacademicyear="changingAcademicYear($event)" v-on:changingboard="changingBoard($event)" v-on:login="userLogin($event)"  v-if="this.$cookie.get('userrole')=='ADMIN'" ></product-header-admin>
      <product-header-teacher v-bind:school="school" v-bind:userdetails="userdetails" v-bind:academicsandboards="academicsandboards" v-bind:acdemicyearandboard="acdemicyearandboard" v-on:changingacademicyear="changingAcademicYear($event)" v-on:changingboard="changingBoard($event)" v-on:login="userLogin($event)" v-if="this.$cookie.get('userrole')=='TEACHER'" ></product-header-teacher>
    <product-header-parent v-bind:school="school" v-bind:userdetails="userdetails" v-bind:academicsandboards="academicsandboards" v-bind:acdemicyearandboard="acdemicyearandboard"  v-on:login="userLogin($event)"  v-if="this.$cookie.get('userrole')=='PARENT'" ></product-header-parent>
      <router-view  v-bind:school="school" v-bind:userdetails="userdetails" v-bind:acdemicyearandboard="acdemicyearandboard" v-on:login="userLogin($event)" v-bind:academicsandboards="academicsandboards" v-bind:error="error" v-bind:userid="userid" v-on:student="Student($event)" v-bind:singlestudent="singlestudent"></router-view>
    <app-footer v-if="!this.$cookie.get('userrole')"></app-footer>
   </div>
</template>
<script>
   import header from './components/header.vue';
   import adminheader from './components/adminheader.vue';
   import teacherheader from './components/teacherheader.vue';
   import parentheader from './components/parentheader.vue';
   import footer from './components/footer.vue';
   import hosturl from './hosturl.js'
   import AuthenticationService from './services/authenticationService.js';
   import UserService from './services/userService.js';
   import EventBus from './event-bus';
   import axios from 'axios'
   export default {
    data() {
        return {
            school: {

            },
            singlestudent:{},
            userdetails: {
                userid: '',
                username:this.$cookie.get('username'),
                userrole:'',
                authorization:'',
                tenant:'',
                schoolname:''
            },
            academicsandboards:{
                academics:[],
                boards:[]
            },
            acdemicyearandboard:{
                acddemicyear:'',
                academicyearid:'',
                syllabustype:''
            },
            error:{

            },
            userid:this.$cookie.get('userid'),
             id:this.$cookie.get('id'),
           

        }
    },
    components: {

        'app-header': header,
        'product-header-admin':adminheader,
        'product-header-teacher':teacherheader,
        'product-header-parent': parentheader,
        'app-footer': footer
    },
    created() {
        console.log(hosturl)
        var self=this
        axios.get(hosturl + "tenant/for/dps.omniwyse.co.in").then(function(response) {
            console.log(response);
            self.school = {
                schoolname: response.data.sname,
                id: response.data.id,
                dbname: response.data.dbname,
                code:response.data.code
            },
            self.error={}
        
        }),

        axios.defaults.headers.common['Authorization'] = this.$cookie.get('authorization');
        axios.defaults.headers.common['tenant'] = this.$cookie.get('tenant');
        UserService.AcademicYears(this.$cookie.get('id')).then((response)=>{
            this.academicsandboards.academics=response.data.academics;
            this.academicsandboards.boards=response.data.boards;
                for(var i=0;i<response.data.academics.length;i++){
                    if(response.data.academics[i].active==1){
                        this.acdemicyearandboard.academicyear=response.data.academics[i].passingyear;
                        this.$cookie.set('academicyearid',response.data.academics[i].id);
                        this.acdemicyearandboard.academicyearid=this.$cookie.get('academicyearid');
                        
                    }
                }
                for(var i=0;i<response.data.boards.length;i++){
                    if(response.data.boards[i].syllabustype=='STATE'){
                        this.$cookie.set('syllabustype',response.data.boards[i].syllabustype);
                        this.acdemicyearandboard.syllabustype=this.$cookie.get('syllabustype')
                    }
                }

        })
    },
    methods: {
        userLogin: function(user) {
            this.$cookie.delete('userrole');
            this.$cookie.delete('userid');
            this.$cookie.delete('username');
            this.$cookie.delete('authorization');
            this.$cookie.delete('tenant');
            this.$cookie.delete('id');
            this.$cookie.delete('academicyearid');
            this.$cookie.delete('syllabustype');
        AuthenticationService.Login(user).then((response) => {
                console.log(response)
                this.userdetails = {
                    userid: response.data.userId,
                    username: response.data.username,
                    userrole: response.data.userrole,
                    authorization:response.config.headers.Authorization,
                    tenant:response.config.headers.tenant,
                    id: response.data.tenant.id,
                    schoolname: response.data.tenant.sname,
                    dbname: response.data.tenant.dbname
                }
                this.school = {
                    id: response.data.tenant.id,
                    schoolname: response.data.tenant.sname,
                    dbname: response.data.tenant.dbname
                }
                if (response.status == 200) {
                    this.$cookie.set('userrole',response.data.userrole,1);
                    this.$cookie.set('userid',response.data.userId,1);
                    this.$cookie.set('username',response.data.username,1);
                    this.$cookie.set('authorization',response.config.headers.Authorization,1);
                    this.$cookie.set('tenant',response.config.headers.tenant,1);
                    this.$cookie.set('id', response.data.tenant.id,1);
                
                    axios.defaults.headers.common['Authorization'] = this.$cookie.get('authorization');
                    axios.defaults.headers.common['tenant'] = this.$cookie.get('tenant');
         
                    UserService.AcademicYears(this.$cookie.get('id')).then((response)=>{
                        console.log(response.data)
                        this.academicsandboards.academics=response.data.academics;
                        this.academicsandboards.boards=response.data.boards;
                        for(var i=0;i<response.data.academics.length;i++){
                            if(response.data.academics[i].active==1){
                                this.acdemicyearandboard.academicyear=response.data.academics[i].passingyear;
                                this.$cookie.set('academicyearid',response.data.academics[i].id);
                                this.acdemicyearandboard.academicyearid=this.$cookie.get('academicyearid');
                            }
                        }
                        for(var i=0;i<response.data.boards.length;i++){
                            if(response.data.boards[i].syllabustype=='STATE'){
                                this.$cookie.set('syllabustype',response.data.boards[i].syllabustype);
                                this.acdemicyearandboard.syllabustype=this.$cookie.get('syllabustype')
                            }
                        }

                    })
                        this.$router.push('/dashboard');
                }
            }).catch((response)=>{
                this.error=response.response.data;
                console.log(this.error);
                
            })
            
        },
       
        changingAcademicYear:function(passingyearid){
            this.acdemicyearandboard.academicyearid=passingyearid;
            EventBus.$emit('GRADES',this.acdemicyearandboard.syllabustype,this.$cookie.get('id'));
            EventBus.$emit('SECTIONS',this.acdemicyearandboard,this.$cookie.get('id'));

        },
        changingBoard:function(syllabustype){
            this.acdemicyearandboard.syllabustype=syllabustype;
            EventBus.$emit('GRADES',this.acdemicyearandboard.syllabustype,this.$cookie.get('id'));
            EventBus.$emit('SECTIONS',this.acdemicyearandboard,this.$cookie.get('id'));
        },
        Errormessage:function(){
            this.error={}
        },
        Student:function(student){
                 UserService.Studentdetails(this.id,student).then((response)=>{
                this.singlestudent=response.data;
            }).catch((error)=>{
                console.log(error.data)
            })
        }

    },
    computed:{
        vueRoot()
            {
                return this.$root;
            },
    }

}
</script>
<style>
</style>
