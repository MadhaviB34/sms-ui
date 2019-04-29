<template>
    <div>
        <div class="col-lg-12 text-left">
            <h3 class="student-head">Add Routes</h3>
            <hr>
        </div>
        <div class="panel panel-info  createclasspanel col-lg-6 col-lg-offset-3" >
            <div class="panel-body">
                <form name="newrouteform" >
                    <div class="row">
                        <div class="col-md-4">
                            <label>Bus Number</label>
                        </div>
                        <div class="col-md-8 ">
                            <select class="form-control form-input" v-model="route.busid">
                                <option value="" disabled selected>Select your option</option>
                                <option v-for="bus in buses" v-bind:value="bus.id">{{bus.busname}}</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="class">Route Name</label>
                        </div>
                        <div class="col-md-8">
                              <input type="text" class="form-control form-input" name="routename" placeholder="" v-model="route.routename" ng-pattern="" required>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="class">Distance</label>
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control form-input" name="distance" placeholder="" v-model="route.distance" ng-pattern="" required>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-lg-6 col-lg-offset-3 text-center">
                            <button id="btn-reset" type="reset" class="btn resetbutton"> Reset</button>
                            <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="newroute" class="btn submitbutton">Submit</button>
                        </div>
                   </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
import UserService from '../services/userService.js';
export default{
    components: {'multiselect':Multiselect},
    data(){
        return{
            route:{},
            id:this.$cookie.get('id'),
            buses:[],
            stopnames:[]
        }
    },
    created(){
        UserService.TransportBuses(this.id).then((response)=>{
            console.log(response.data);
            this.buses=response.data;

        })
    
    },
    methods:{
        customLabel (option) {
            return `${option.stopname}`
        },
        newroute:function(){
        
            var route={
                "busid":this.route.busid,
                "routename":this.route.routename,
                "stops":this.stopnames,
                "distance":this.route.distance
            }
            console.log(route)
            UserService.TransportNewRoute(this.id,route).then((response)=>{
                console.log(response.data);
                if(response.status==200){
                    this.$router.push('/transport/routes');
                }
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>