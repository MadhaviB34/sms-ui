<template>
    <div class="container">
        <div class="row reset-padding reset-margin">
            <div class="col-lg-12 text-left">
                <h3 class="student-head">Students</h3>
                <hr>
            </div>
        </div>
        <div class="row reset-padding reset-margin">
            <div id="custom-search-input" class="col-md-10 reset-padding reset-margin">
                <div class="input-group searchbar">
                    <input type="text" class="search-query form-control" placeholder="Search" v-model="search">
                    <span class="input-group-btn">
                        <button class="btn search-btn" type="button">
                            <span class=" glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </div>
              <div class="col-md-2 reset-padding reset-margin newstudentbutton">
            <router-link to="/students/newstudent" tag="button" class="btn newstudent pull-right ">New Student</router-link>
        </div>
        </div>
      
        <div class="row studentstable reset-padding reset-margin " >
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">ID</div>
                        <div class="divTableCell">Name</div>
                        <div class="divTableCell">Grade</div>
                        <div class="divTableCell">Parent/Gardian Name</div>
                        <div class="divTableCell">Contact Number</div>
                        <div class="divTableCell">Blood Group</div>
                        <div class="divTableCell">House Name</div>
                        <div class="divTableCell">Board Of Edu</div>
                        <div class="divTableCell">Edit</div>
                    </div>
                    
                    <div class="divTableRowdata" v-for="student in paginatedData"  >
                       <div class="divTableCelldata">{{student.id}}</div>
                        <div class="divTableCelldata"> <router-link to="/student" v-on:click.native="eachstudent(student)">{{student.name}}</router-link></div>
                        <div class="divTableCelldata">{{student.gradename}}</div>
                        <div class="divTableCelldata">{{student.fathername}}</div>
                        <div class="divTableCelldata">{{student.contactnumber}}</div>
                        <div class="divTableCelldata">{{student.bloodgroup}}</div>
                        <div class="divTableCelldata">{{student.housename}}</div>
                        <div class="divTableCelldata">{{student.syllabustype}}</div>
                        <div class="divTableCelldata"><a data-toggle="modal" href="#editstudent" v-on:click="setStudent(student);"><i class="fa fa-pencil-square-o fa-1x" aria-hidden="true"></i></a></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <br>
        <div>
            <button class="btn previousbutton" :disabled="pageNumber === 0" @click="prevPage"> Previous</button>
            <button class="btn nextbutton" :disabled="pageNumber >= pageCount -1" @click="nextPage">Next</button>
        </div>
        <div class="modal fade" id="editstudent" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Edit Student</h4>
         </div>
         <div class="modal-body">
            <form name="editstudentmodal">
               <h4><u><b>Student Details</b></u></h4>
               <div class="row">
                  <div class=col-lg-6>
                     <div class="row">
                        <div class="col-md-4">
                           <label>Admission No</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="text" class="form-control form-input" id="" name="admissionno" placeholder="admission number*" v-model="student.admissionnumber">
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>First Name</label>
                        </div>
                        <div class="col-md-8">
                           <input type="text" class="form-control form-input" name="studentname" v-model="student.name"  placeholder="studentname*">
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>Middle Name</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="text" class="form-control form-input" id="" name="middlename" placeholder="Student Middlename" v-model="student.middlename" >
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>Last Name</label>
                        </div>
                        <div class="col-md-8 ">
                           <input type="text" class="form-control form-input" id="" name="lastname" placeholder="Student Lastname*" v-model="student.lastname" required>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>Gender</label>
                        </div>
                        <div class="col-md-8">
                           <label><input type="radio"  name="gender" value="female" v-model="student.gender">Female</label>
                           <label><input type="radio"  name="gender" value="male" v-model="student.gender">Male</label>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>Height-Weight</label>
                        </div>
                        <div class="col-md-4 ">
                           <input type="text" class="form-control form-input" id="" name="height" placeholder="Student Height*" v-model="student.height"  required>
                        </div>
                        <div class="col-md-4 ">
                           <input type="text" class="form-control form-input" id="" name="weight" placeholder="Student Weight*" v-model="student.weight"  required>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>e-mail </label>
                        </div>
                        <div class="col-md-8">
                           <input type="text" class="form-control form-input" name="emailid" v-model="student.emailid" placeholder="xxxxxxxxx@yyy.com">
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label for="class">Blood Group</label>
                        </div>
                        <div class="col-md-8">
                           <input type="text" class="form-control form-input" name="bloodgroup" placeholder="O+,O-,B+,B-,A+,A- *" v-model="student.bloodgroup"  required>
                        </div>
                     </div>
                     <br>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                            <div class="col-md-4">
                                <label>Board Of Edu</label>
                            </div>
                            <div class="col-md-8">
                                <select class="form-control form-input" v-model="student.syllabustype" paceholder="Select" v-on:change="selectGradebasedonBoard" >
                                    <option value="" disabled selected>Select your option</option>
                                    <option v-for="board in boardofeducation" v-bind:value="board.syllabustype">{{board.syllabustype}}</option>
                                </select>
                            </div>
                        </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>Grade</label>
                        </div>
                        <div class="col-md-8">
                            <input type="text" name="Syllabustype" placeholder="Select/Search" list="grades" class="form-control form-input" v-model="student.gradename">
                            <datalist id="grades">
                              <select style="display: none;" id="_select" name="_select">
                                 <option v-for="grade in gradesbasedonboard" >{{grade.gradename}}</option>
                              </select>
                           </datalist>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>Date of Birth</label>
                        </div>
                        <div class="col-md-8 ">
                            <date-picker lang="en" v-model="setdateofbirth"></date-picker>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>Date of joining</label>
                        </div>
                        <div class="col-md-8 ">
                            <date-picker lang="en" v-model="setdateofjoining"></date-picker>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>House Name</label>
                        </div>
                        <div class="col-md-8 ">
                           <select class="form-control form-input" v-model="student.housename">
                                <option value="" disabled selected>Select your option</option>
                                <option v-for="house in houses">{{house.housename}}</option>
                           </select>
                        </div>
                     </div>
                     <br>
                     <div class="row">
                        <div class="col-md-4">
                           <label>Address</label>
                        </div>
                        <div class="col-md-8">
                           <textarea rows="4" cols="40" class="form-control form-input" name="address" v-model="student.address" ></textarea>
                        </div>
                     </div>
                     <br>
                  </div>
               </div>
               <h4><u><b>Parent Details</b></u></h4>
              
       
               <div ng-hide="IsVisible">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="left-side-form">
                           <div class="row">
                              <div class="col-md-4">
                                 <label>Father Name</label>
                              </div>
                              <div class="col-md-8 ">
                                 <input type="text" class="form-control form-input" id="" name="fathername"  placeholder="Father Name*" v-model="student.fathername" required>
                              </div>
                           </div>
                           <br>
                           <div class="row">
                              <div class="col-md-4">
                                 <label>Mother Name</label>
                              </div>
                              <div class="col-md-8 ">
                                 <input type="text" class="form-control form-input" id="" name="mothername" placeholder="Mother Name*" v-model="student.mothername"  required>
                              </div>
                           </div>
                           <br>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="right-side-form">
                           <div class="row">
                              <div class="col-md-4">
                                 <label>Contact Number</label>
                              </div>
                              <div class="col-md-8 ">
                                 <input type="text" class="form-control form-input" id="" name="contactnumber" 
                                    placeholder="Contact Number*" v-model="student.contactnumber"
                                    required>
                              </div>
                           </div>
                           <br> 
                           <div class="row">
                              <div class="col-md-4">
                                 <label>Address</label>
                              </div>
                              <div class="col-md-8">
                                 <textarea rows="4" cols="40" name="parentaddress" class="form-control form-input" v-model="student.parentaddress" required></textarea>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <br>
               <div class="row">
                  <div class="col-lg-6 col-lg-offset-3 text-center">
                     <button id="btn-reset"  data-dismiss="modal" class="btn btn-info button"> Cancel</button>
                     <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="editstudent()" class="btn btn-info button">Update</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
<router-view v-bind:userdetails="userdetails" v-bind:school="school" v-bind:boardofeducation="boardofeducation" v-bind:houses="houses"></router-view>
</div>
</template>
<script>
import UserService from '../services/userService.js';
import DatePicker from 'vue2-datepicker';
import EventBus from '../event-bus';
export default{
    components: { DatePicker},
    props:['school','userdetails'],
    data(){
        return{
             search: '',
            student:{},
            students:[],
            boardofeducation:[],
            gradesbasedonboard:[],
            houses:[],
            requestheaders:{
                headers:{
                "Content-Type": 'application/json; charset=utf-8',
                "authorization":this.userdetails.authorization,
                "tenant":this.userdetails.tenant
                }
            },
            id:this.$cookie.get('id'),
            setdateofbirth:'',
            setdateofjoining:'',
              pageNumber: 0,
              size:10
     
        }
    },
    created(){
        UserService.Students(this.id).then((response)=>{
           this.students=response.data;
           console.log(response.data)
        }),
        UserService.BoardOfEducation(this.id).then((response)=>{
            this.boardofeducation=response.data
        }),
        UserService.Houses(this.id).then((response)=>{
            this.houses=response.data
        })
    },
  
    methods:{
        setStudent:function(student){
            console.log(student)
            this.student=student
            this.setdateofbirth=new Date();
            this.setdateofbirth.setTime(student.dateofbirth);
            this.setdateofjoining=new Date();
            this.setdateofjoining.setTime(student.dateofjoining)
        },
        selectGradebasedonBoard:function(){
            var boardforgrade={
                "syllabustype":this.student.syllabustype
            }
            console.log(boardforgrade);
            UserService.GradesForStudentBasedOnBoard(boardforgrade,this.id).then((response)=>{
                console.log(response);
                this.gradesbasedonboard=response.data;
            })
        },
        editstudent:function(){
        var studentdetailsforedit={
            "id":this.student.id,
            "admissionnumber":this.student.admissionnumber,
            "name":this.student.name,
            "middlename":this.student.middlename,
            "lastname":this.student.lastname,
            "gender":this.student.gender,
            "height":this.student.height,
            "weight":this.student.weight,
            "emailid":this.student.emailid,
            "bloodgroup":this.student.bloodgroup,
            "syllabustype":this.student.syllabustype,
            "gradename":this.student.gradename,
            "dob":this.setdateofbirth.getTime(),
            "doj":this.setdateofjoining.getTime(),
            "housename":this.student.housename,
            "address":this.student.address,
            "parentemailid":this.student.parentemailid,
            "fathername":this.student.fathername,
            "mothername":this.student.mothername,
            "contactnumber":this.student.contactnumber,
            "parentaddress":this.student.parentaddress,
            "parentid":this.student.parentid,
        }
        UserService.UpdateStudent(studentdetailsforedit,this.id).then((response)=>{
            if(response.status==200){
                $('#editstudent').modal('hide');
            }

        })
       
        },
        eachstudent(student){
            console.log(student);
            this.$emit('student',student);
        },
           nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      }
        
     
	              
    },
    computed:
        {
        pageCount(){
            let l = this.students.length,
                s = this.size;
                return Math.ceil(l/s);
            },
        filterstudents:function()
        {
            var self=this;
            return this.students.filter(function(student){
            return student.name.toLowerCase().indexOf(self.search.toLowerCase())>=0 ||
            student.fathername.toLowerCase().indexOf(self.search.toLowerCase())>=0 ;
            });
        },
    paginatedData(){
        const start = this.pageNumber * this.size,
        end = start + this.size;
        return this.filterstudents.slice(start, end);
    },
},
 
}

</script>
<style scoped>
.reset-padding
{
padding: 0;
} 
.reset-margin{
 margin: 0;
}
.studentstable{
width:100%;
padding-top:1%;
}
.divTable{
display: table;
width: 100%;
text-align: center;
}
.divTableRow {
display: table-row;
background-color: dimgray;
color: white;
height: 30px;
}
.divTableRowdata {
display: table-row;
background-color: #fff;
color: #000;
height: 30px;
}
.divTableHeading {
background-color: #ffffff;
display: table-header-group;
}
.divTableCell, .divTableHead {
border: 1px solid #eee;
display: table-cell;
padding: 3px 10px;
}
.divTableCelldata{
border: 1px solid #eee;
display: table-cell;
padding: 3px 10px;
}
.divTableHeading {
background-color: #ffffff;
display: table-header-group;
font-weight: bold;
}
.divTableFoot {
background-color: #ffffff;
display: table-footer-group;
font-weight: bold;
}
.divTableBody {
display: table-row-group;
}
.newstudent{
background-color: #039be5;
background-image: none;
border-color: #039be5;
color:white;
padding: 5px 30px;
margin-top: -2px;
font-size: 14px;
font-weight: bold;
text-transform: uppercase;
text-decoration:none;
border-radius:0px
}
.newstudent:hover{
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
.previousbutton,.nextbutton,.previousbutton:hover,.nextbutton:hover{
        display: inline-block;
    padding: 5px 14px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 15px;
    color:black
}

</style>