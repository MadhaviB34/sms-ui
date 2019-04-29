<template>
    <div>
        <div class="row">
        <div class="col-lg-4 reset-margin">
            <div class="" v-for="test in testdetails" >
                <div class="col-lg-8 col-lg-offset-2 testdetails " v-on:click.prevent="geteachtestdetails(test)">
                    <div class="row testtype text-center">
                        <h5><b>{{test.testtype}}</b></h5>
                    </div>
                    <h5><b>Start Date:</b>{{getstartdate(test.startdate)}}</h5>
                    <h5><b>End Date:</b>{{getenddate(test.enddate)}}</h5>
                    <h5><b>Total Marks:</b>{{test.maxmarks}}</h5>

                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <h1 v-if="testsubjectdetails.length==0">No details</h1>
            <h5><b>{{gettestdetails.testtype}}</b></h5>
            <div class="testdetails" v-for="subject in testsubjectdetails"  >
                <div class="col-lg-12 testsubjectdetails">
                   
                    <div class="col-lg-4 testsubjectdetailscolumn text-center">
                        <b>{{subject.subjectname}}</b>
                    </div>
                    <div class="col-lg-4 testsubjectdetailscolumn text-center">
                        <b>{{getsubjectdate(subject.subjecttestdate)}}</b>
                    </div>
                    <div class="col-lg-4">
                    <b>{{subject.maxmarks}}</b>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <p><pre>{{subject.syllabus}}</pre></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style>
.reset-margin{
    margin:0px;
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
</style>
<script>
import moment from 'moment'
import UserService from '../services/userService.js';

    export default{
        props:['school','userdetails','sectionid','sectiondetails','acdemicyearandboard','testdetails'],
        data(){
            return{
                testsubjectdetails:[],
                gettestdetails:{},
                id:this.$cookie.get('id')
            }
        },
        methods:{
        getsubjectdate:function(date){
            return moment(date).format('DD/MM/YYYY');
        },
        getstartdate:function(date){
            return moment(date).format('DD/MM/YYYY');
        },
        getenddate:function(date){
            return moment(date).format('DD/MM/YYYY')
        },
        geteachtestdetails:function(test){
            this.gettestdetails=test
            console.log(test)
            var id={
                id:test.id
            }
            UserService.SubjectDetailsOfATest(id,this.id).then((response)=>{
                console.log(response);
                this.testsubjectdetails=response.data;
            })
        }
        }
    }
</script>