<template>
    <div>
    <div>
        <div class="col-lg-12">
            <div class="reset-padding reset-margin">
                <router-link :to="{path:'/tests/'+gradeid.id+'/newtest'}" tag="button" class="btn newtestbutton pull-right ">New Test</router-link>
            </div>
        </div>
        
        <div class="row reset-padding reset-margin">
            <div>
                <div class="col-lg-4">
                    <div class="" v-for="test in listoftests" >
                        <div class="col-lg-8 col-lg-offset-2 testdetails" v-on:click="geteachtestdetails(test)">
                            <div class="row testtype text-center">
                                <h5><b>{{test.testtype}}</b></h5>
                            </div>
                            <h5><b>Start Date:</b>{{getstartdate(test.startdate)}}</h5>
                            <h5><b>End Date:</b>{{getenddate(test.enddate)}}</h5>
                            <h5><b>Total Marks:</b>{{test.maxmarks}}</h5>
                            <h5><b>Current Status:</b>{{test.status}}</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8" v-if="listoftests.length!=0">
                <h1 v-if="testsubjectdetails.length==0">No details</h1>
                <div class="row">
                    <div class="col-lg-2">
                        <h5 v-if="testsubjectdetails.length!=0"><b>{{geteachtestdetail.testtype}}</b></h5>
                    </div>
                    <div class="col-lg-2">
                        <button :disabled="testsubjectdetails[0].status === 'CLOSED'" v-if="testsubjectdetails.length!=0" v-on:click.prevent="changestatusoftest(geteachtestdetail)" class="btn btn-info statusbutton">{{testsubjectdetails[0].status}}</button>
                    </div>
                </div>
                <div class="" v-for="test in testsubjectdetails" >
                    <div class="col-lg-12 testdetails">
                        <div class="row testsubjectdetails">
                            
                            <div class="col-lg-4 testsubjectdetailscolumn text-center">
                                <b>{{test.subjectname}}</b>
                            </div>
                            <div class="col-lg-4 testsubjectdetailscolumn text-center">
                                <b>{{getsubjectdate(test.subjecttestdate)}}</b>
                            </div>
                            <div class="col-lg-4">
                            <b>{{test.maxmarks}}</b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <p><pre>{{test.syllabus}}</pre></p>
                            </div>
                            <div class="col-lg-6 col-lg-offset-3 dateform" v-if='testsubjectdetailsedit.subjectname==test.subjectname && testsubjectdetailsedit.edit==true'>
                                <div class="col-lg-12">
                                    <form name="addtestsubjectdetailmodal">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>Subject Date</label>
                                            </div>
                                            <div class="col-md-8">
                                                <date-picker lang="en" v-model="testsubjectdate"></date-picker>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="row">
                                            <div class="col-lg-6 col-lg-offset-3 text-center">
                                                <button id="btn-Register"  name="reset"  class="btn btn-info button" v-on:click.prevent="subjecttestdatereset"  >Reset</button>
                                                <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="subjecttestdate" class="btn btn-info button">Add</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="col-lg-2 pull-right">
                                <i v-if="test.status =='DRAFT' || test.status =='ACTIVE'" class="fa fa-pencil-square-o fa-1x pull-left" aria-hidden="true"  v-on:click.prevent="adddatetosubject(test)"></i>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
         

            </div>
        </div>
    </div>
    <router-view v-bind:gradeid="gradeid" v-bind:userdetails="userdetails" v-bind:school="school"></router-view>
        
    </div>
</template>
<script>
import moment from 'moment'
import DatePicker from 'vue2-datepicker';
import UserService from '../services/userService.js';
export default{
    props:['listoftests','gradeid','userdetails','school','testsubjectdetails'],
    components: { DatePicker },
    
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
        testsubjectdetailsedit:{
                edit:false
        },
        subjectdetails:{},
        testsubjectdate:'',
        geteachtestdetail:{},
        
        }
      
    },
    methods:{
        getstartdate:function(date){
            return moment(date).format('DD/MM/YYYY');
        },
        getenddate:function(date){
            return moment(date).format('DD/MM/YYYY')
        },
        geteachtestdetails:function(test){
            console.log(test);
            this.geteachtestdetail=test;
            this.testsubjectdetailsedit.edit=false
            var id={
                id:test.id
            }
            UserService.SubjectDetailsOfATest(id,this.id).then((response)=>{
                console.log(response);
                this.testsubjectdetails=response.data;
            })
        },
        adddatetosubject:function(subject){
               this.testsubjectdetailsedit={
                edit:true,
                subjectname:subject.subjectname
            }
            this.subjectdetails=subject
            console.log(subject)
             this.testsubjectdate=new Date();
            this.testsubjectdate.setTime(subject.subjecttestdate);
        },
        subjecttestdate:function(){
            var subjectdetails={
                "id":this.subjectdetails.id,
                "testid":this.subjectdetails.testid,
                "subjectid":this.subjectdetails.subjectid,
                "subjecttestdt":this.testsubjectdate.getTime()
            }
            console.log(subjectdetails);
            UserService.SubjectTestEdit(subjectdetails,this.id).then((response)=>{
                console.log(response);
                if(response.status==200)
                {
                    this.testsubjectdetailsedit.edit=false;
                    var id={
                        id:this.geteachtestdetail.id
                    }
                    UserService.SubjectDetailsOfATest(id,this.id).then((response)=>{
                        console.log(response);
                        this.testsubjectdetails=response.data;
                })

                }
            })
        },
        getsubjectdate:function(date){
            return moment(date).format('DD/MM/YYYY');
        },
        subjecttestdatereset:function(){
            this.testsubjectdetailsedit.edit=false
        },
        changestatusoftest:function(geteachtestdetail){
            var testidforstatus={
                "testid":geteachtestdetail.id,
                "id":geteachtestdetail.gradeid
            }
            console.log(testidforstatus);
            UserService.ChangeTestStatus(this.id,testidforstatus).then((response)=>{
                console.log(response.data);
                UserService.ListOfTests(this.gradeid,this.id).then((response)=>{
                console.log(response);
                this.listoftests=response.data;
                this.geteachtestdetails(geteachtestdetail);
            })
            })
        }
    },

}
</script>
<style>
.reset-padding
{
padding: 0;
} 
.reset-margin{
 margin: 0;
}
.testdetails{
    border:1px solid #eee;
    margin-bottom: 10px;
}
.newtestbutton{
background-color: #039be5;
background-image: none;
border-color: #039be5;
color:white;
padding: 5px 30px;
font-size: 14px;
font-weight: bold;
text-transform: uppercase;
text-decoration:none;
border-radius:0px
}
.newtestbutton:hover{
color:white;
}
button{
background-color:#039be5;
}
.btn{
    border-radius:0px;
    color:#fff
}
.btn:hover, .btn:focus {
    color: #fff;
    text-decoration: none;
}

.testtype{
    background:#eee
}
.testdetails{
    border:1px solid #eee;
    margin-bottom: 10px;
}
.testsubjectdetails{
    background:#eee;
    height:30px;
}
.testsubjectdetailscolumn{
    border-right:1px solid #fff;
    height:30px
}
pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 16px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color:transparent; 
     border: none;
     border-radius:0px;
}
.statusbutton{
    margin-bottom: 4px;
    border-radius: 3px;
}
</style>