<template>
    <div>
        <div class="col-lg-12 text-left">
            <h3 class="student-head">New Test Type</h3>
            <hr>
        </div>
        <div class="panel  testtypepannel col-md-4 col-md-offset-4" >
            <div class="panel-body">
	            <form name="createtesttypemodal">
                     <div class="row">
                        <div class="col-md-4">
                            <label>Test Type</label>
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control " name="testtype" placeholder="Enter Test Name*" v-model="testtype.testtype"  required>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-lg-6 col-lg-offset-3 text-center">
                            <button id="btn-Register" type="reset" name="reset"  class="btn button">reset</button>
                            <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="newtesttype()" class="btn  button">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import UserService from '../services/userService.js';
export default{
    props:['school','userdetails'],
    data(){
        return{
            testtype:{},
            id:this.$cookie.get('id')
     
        }
    },
    methods:{
        newtesttype:function(){
            var testtype={
                "testtype":this.testtype.testtype
            }
            UserService.NewTestType(testtype,this.id).then((response)=>{
                this.$router.push('/admin/testtypes');
            }).catch((error)=>{
                console.log(error.response.data);
            })
        }
    }
}
</script>
<style>
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
</style>
