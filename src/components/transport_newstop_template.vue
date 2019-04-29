<template>
    <div>
        <div class="col-lg-12 text-left">
            <h3 class="student-head">New Stop</h3>
            <hr>
        </div>
        <div class="panel panel-info  createclasspanel col-lg-6 col-lg-offset-3" >
            <div class="panel-body">
                <form name="newstopform" >
                    <div class="row">
                        <div class="col-md-4">
                            <label>Lattitude</label>
                        </div>
                        <div class="col-md-8 ">
                            <input type="text" class="form-control form-input" id="" name="latitude" placeholder="Latitude*" v-model="stop.latitude" value="" required>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-4">
                            <label>Longitude</label>
                        </div>
                        <div class="col-md-8 ">
                            <input type="text" class="form-control form-input" id="" name="longitude" placeholder="Longitude*" v-model="stop.longitude"  value="" required>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-4">
                            <label>Stop Name</label>
                        </div>
                        <div class="col-md-8 ">
                            <input type="text" class="form-control form-input" id="" name="stopname" placeholder="Stop Name*" v-model="stop.stopname"   required>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-4">
                            <label>Land Mark</label>
                        </div>
                        <div class="col-md-8 ">
                            <input type="text" class="form-control form-input" id="" name="landmark" placeholder="Land Mark*" v-model="stop.landmark"   required>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-lg-6 col-lg-offset-3 text-center">
                            <button id="btn-reset" type="reset" class="btn resetbutton"> Reset</button>
                            <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="newstop()" class="btn submitbutton" >Submit</button>
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
    data(){
        return{
             id:this.$cookie.get('id'),
             stop:{},
        }
    },
    methods:{
        newstop:function(){
            console.log(this.stop),
            UserService.TransportNewStop(this.stop,this.id).then((response)=>{
                console.log(response.data);
                if(response.status==200){
                    this.$router.push('/transport/stops')
                }
            }).catch((error)=>{
                console.log(error.response.data)
            })
        }
    }

}
</script>
<style>
 .resetbutton,.resetbutton:hover{
    background-color: #039be5;
    background-image: none;
    border-color: #039be5;
    border-radius:0px;
    color:white;
    }
.submitbutton,.submitbutton:hover{
    background-color: #039be5;
    background-image: none;
    border-color: #039be5;
    border-radius:0px;
    color:white;
    }
</style>