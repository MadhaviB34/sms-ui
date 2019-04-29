<template>
   <div>
      <div class="">
         <div class="row reset-padding reset-margin">
            <div class="col-lg-12 text-left">
               <h3 class="student-head">New Academic</h3>
               <hr>
            </div>
         </div>
         <div class="panel col-lg-6 col-lg-offset-3" >
            <div class="panel-body">
               <form class="form-horizantal" name="addacademicform">
                  <div class="col-lg-12">
                     <div class="row">
                        <div class="col-md-3">
                           <label>Passing Year</label>
                        </div>
                        <div class="col-md-9">
                           <input type="text" class="form-control" name="passingyear" placeholder="YYYY*" v-model="academic.passingyear"  required>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-3">
                           <label>Academic Year start</label>
                        </div>
                        <div class="col-md-9">
                            <date-picker lang="en"  v-model="academic.acdemicyearstarting"></date-picker>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-3">
                           <label>Academic Year Ending</label>
                        </div>
                        <div class="col-md-9">
                            <date-picker lang="en"  v-model="academic.academicyearending"></date-picker>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-3">
                           <label>Status</label>
                        </div>
                        <div class="col-md-9">
                           <input type="text" class="form-control" name="status" placeholder="status*" v-model="academic.active"  required>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-lg-6 col-lg-offset-3 text-center">
                           <button id="btn-reset" type="reset" class="btn button"> Reset</button>
                           <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="newacademicyear()"  class="btn button"> 
                           Submit</button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import UserService from '../services/userService.js'
export default {
components: { DatePicker },
props:['school','userdetails'],
  data() {
    return {
        academic:{
            passingyear:'',
            acdemicyearstarting:'',
            academicyearending:'',
            active:''
            },
            id:this.$cookie.get('id')
        }
    },
    methods:{
        newacademicyear:function(){
            var academicstart=this.academic.acdemicyearstarting.getTime();
            var academicend=this.academic.academicyearending.getTime();
            
            var addacademicyear={
                "passingyear":this.academic.passingyear,
                "academicyearstartdt":academicstart,
                "academicyearenddt":academicend,
                "active":this.academic.active
            }
            UserService.AddAcademicyear(addacademicyear,this.id).then((response)=>{
            if(response.status==200){
            this.$router.push('/admin/academics');
                
            }
        })
        }
    }
}
</script>
<style>
.mx-datepicker{
    min-width:505px
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
</style>