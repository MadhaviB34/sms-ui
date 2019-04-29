<template>
    <div>
        <div class="row reset-padding reset-margin">
            <div class="col-lg-12 text-left">
                <h3 class="student-head">New Secion</h3>
                <hr>
            </div>
        </div>
        <div class="panel   createclasspanel col-lg-6 col-lg-offset-3" >
   <div class="panel-body">
      <form class="form-horizantal" name="CreateClassForm">
         <div class="col-md-12">
            <div class="leftside-form">
              <div class="row">
                           <div class="col-md-4">
                              <label>Periodtype</label>
                           </div>
                           <div class="col-md-8">
                              <select class="form-control form-input" paceholder="Select" v-model="section.period_type_id">
                                 <option value="" disabled selected>Select your option</option>
                                 <option v-for="period in periodtypes" v-bind:value="period.id">{{period.name}}</option>

                              </select>
                           </div>
                        </div>
               <br>
               <div class="row">
                  <div class="col-md-4">
                     <label>Board Of Edu</label>
                  </div>
                  <div class="col-md-8">
                     <select class="form-control form-input" v-model="section.syllabustype" paceholder="Select" v-on:change="selectGradebasedonBoard">
                        <option value="" disabled selected>Select your option</option>
                        <option v-for="board in boards">{{board.syllabustype}}</option>
                     </select>
                  </div>
               </div>
               <br>
               <div class="row">
                  <div class="col-md-4">
                     <label>Grade</label>
                  </div>
                  <div class="col-md-8 ">
                     <select class="form-control form-input" v-model="section.gradename">
                        <option value="" disabled selected>Select your option</option>
                        <option v-for="grade in gradesbasedonboard">{{grade.gradename}}</option>
                     </select>
                  </div>
               </div>
               <br>
               <div class="row">
                  <div class="col-md-4">
                     <label for="class">Section</label>
                  </div>
                  <div class="col-md-8">
                     <input type="text" class="form-control" name="sectionname" placeholder="section*" v-model="section.sectionname" ng-pattern="/[aA-zZ\s]$/" required>
                  </div>
               </div>
               <br>
               <div class="row">
                  <div class="col-md-4">
                     <label>Teacher</label>
                  </div>
                  <div class="col-md-8">
                    <select class="form-control form-input" v-model="section.teachername">
                        <option value="" disabled selected>Select your option</option>
                        <option v-for="teacher in teachers">{{teacher.teachername}}</option>
                    </select>
                  </div>
               </div>
               <br>
            </div>
            <div class="row">
               <div class="col-lg-6 col-lg-offset-3 text-center">
                  <button id="btn-reset" type="reset" class="btn button"> Reset</button>
                  <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="newsection" class="btn button" ng-disabled="CreateClassForm.$invalid"> 
                  Submit</button>
               </div>
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
            boards:[],
            grades:[],
            teachers:[],
            periodtypes:[],
            section:{},
            gradesbasedonboard:[],
            id:this.$cookie.get('id')

        }
    },
    created(){
            UserService.BoardOfEducation(this.id).then((response)=>{
                this.boards=response.data;
            }),
    
            UserService.Teachers(this.id).then((response)=>{
                this.teachers=response.data;
            }),
            UserService.Getperiodtypes(this.id).then((response)=>{
            this.periodtypes=response.data;
            
        })
    },
    methods:{
        selectGradebasedonBoard:function(){
            var boardforgrade={
                "syllabustype":this.section.syllabustype
            }
            UserService.GradesForStudentBasedOnBoard(boardforgrade,this.id).then((response)=>{
                this.gradesbasedonboard=response.data;
            })
        },
        newsection:function(){
            console.log(this.section)
            UserService.NewSection(this.section,this.id).then((response)=>{
                if(response.status==201){
                 this.$router.push('/admin/sections'); 
                }
            })
        }
    }
}
</script>