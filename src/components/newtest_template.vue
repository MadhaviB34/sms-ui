<template>
    <div>
        <div class="row reset-padding reset-margin">
            <div class="col-lg-12 text-left">
                <h3 class="student-head">New Test</h3>
                <hr>
            </div>
        </div>
        <div class="panel   createclasspanel col-lg-6 col-lg-offset-3" >
            <div class="panel-body">
   		        <form  class="form-horizontal" role="form" name="createtestform" >
                    <div class="col-md-12">
                        <div class="leftside-form">
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Test Type</label>
                                </div>
                                <div class="col-md-8">
                                    <select class="form-control form-input" v-model="newtest.testtype">
                                        <option value="" disabled selected>Select your option</option>
                                        <option v-for="testtype in testtypes">{{testtype.testtype}}</option>
                                    </select>
                                </div> 
                            </div><br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Test Mode</label>
                                </div>
                                <div class="col-md-8">
                                    <select class="form-control form-input" v-model="newtest.testmode" paceholder="Select">
                                        <option value="" disabled selected>Select your option</option>
                                        <option v-for="testmode in testmodes">{{testmode.testmode}}</option>
                                    </select>
                                </div>
                            </div><br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Academic Year</label>
                                </div>
                                <div class="col-md-8">
                                    <select v-model="newtest.presentyear" class="form-control form-input">
                                        <option value="" disabled selected>Select your option</option>
                                        <option v-for="academicyear in academicyears" v-bind:value=academicyear.id>{{academicyear.passingyear}}</option>
                                    </select>
                                </div>
                            </div><br>
                           <div class="row">
                                <div class="col-md-4">
                                    <label>Status</label>
                                </div>
                                <div class="col-md-8">
                                    <select v-model="newtest.teststatus" class="form-control form-input">
                                        <option value="" disabled selected>Select your option</option>
                                        <option v-for="status in status">{{status.status}}</option>
                                    </select>
                                </div>
                            </div><br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Test Start Date</label>
                                </div>
                                <div class="col-md-8">
                                    <date-picker lang="en" v-model="newtest.startdate"></date-picker>
                                </div>
                            </div><br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Test End Date</label>
                                </div>
                                <div class="col-md-8">
                                    <date-picker lang="en" v-model="newtest.enddate"></date-picker>
                                </div>
                            </div><br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Test TotalMarks</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" class="form-control form-input" name="maximummarks" placeholder="maximum marks*" v-model="newtest.maxmarks" required>
                                </div>
                            </div><br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-lg-offset-3 text-center">
                            <button id="btn-reset" type="reset" class="btn button"> Reset</button>
                            <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="newtests" class="btn button"> 
                            Submit</button>
                        </div>
                    </div>
                </form>
	        </div>
        </div>
    </div>
</template>
<script>
    import DatePicker from 'vue2-datepicker';
    import UserService from '../services/userService.js';
    export default{
        components: { DatePicker },
        props:['gradeid','userdetails','school'],
        data(){
            return{
        requestheaders:{
            headers:{
            "Content-Type": 'application/json; charset=utf-8',
            "authorization":this.userdetails.authorization,
            "tenant":this.userdetails.tenant
            }
        },
        id:this.$cookie.get('id'),
        testtypes:[],
        testmodes:[],
        status:[],
        academicyears:[],
         newtest:{} 
        }
       
    },
    created(){
        UserService.TestTypes(this.id).then((response)=>{
            this.testtypes=response.data;
        }),
        UserService.AcademicYears(this.id).then((response)=>{
            this.academicyears=response.data.academics;
            console.log(response)
        }),
        UserService.Testmodes(this.id).then((response)=>{
            this.testmodes=response.data;
        }),
        UserService.StatusOfTests(this.id).then((response)=>{
            this.status=response.data;
        })
    },
    methods:{
        newtests:function(){
            var createtest={
                "id":this.gradeid.id,
                "testtype":this.newtest.testtype,
                "testmode":this.newtest.testmode,
                "startdt":this.newtest.startdate.getTime(),
                "enddt":this.newtest.enddate.getTime(),
                "status":this.newtest.teststatus,
                "academicyear":this.newtest.presentyear,
                "maxmarks":this.newtest.maxmarks
            }
            console.log(createtest);
            UserService.NewTest(createtest,this.id).then((response)=>{
                console.log(response);
                if(response.status==200){
                    this.$router.push('/tests/'+this.gradeid.id);
                }
            })
        }
    }
   
    }
</script>