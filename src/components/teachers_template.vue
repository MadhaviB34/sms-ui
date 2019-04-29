<template>
    <div class="container">
        <div class="row reset-padding reset-margin">
            <div class="col-lg-12 text-left">
                <h3 class="student-head">Teachers</h3>
                <hr>
            </div>
        </div>
        <div class="col-lg-12 reset-padding reset-margin">
            <router-link to="/teachers/newteacher" tag="button" class="btn newteacher pull-right ">New Teacher</router-link>
        </div>
        <div class="row teacherstable reset-padding reset-margin " >
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">ID</div>
                        <div class="divTableCell">Teacher Name</div>
                        <div class="divTableCell">Contact Number</div>
                        <div class="divTableCell">Email-id</div>
                        <div class="divTableCell">DateOfJoining</div>
                        <div class="divTableCell">Edit</div>
                    </div>
                    <div class="divTableRowdata" v-for="teach in teachers">
                        <div class="divTableCelldata">{{teach.id}}</div>
                        <div class="divTableCelldata">{{teach.teachername}}</div>
                        <div class="divTableCelldata">{{teach.contactnumber}}</div>
                        <div class="divTableCelldata">{{teach.emailid}}</div>
                        <div class="divTableCelldata">{{getDateOfJoining(teach.dateofjoining)}}</div>
                        <div class="divTableCell"><a data-toggle="modal" href="#editteacher" v-on:click="setTeacher(teach)"><i class="fa fa-pencil-square-o fa-1x" aria-hidden="true"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editteacher" role="dialog" name="editteachermodal">
   <div class="modal-dialog modal-lg">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Edit Teacher</h4>
         </div>
         <div class="modal-body">
            <form name="editteachermodal">
            <div class="row">
               <div class=col-lg-6>
                  <div class="row">
                     <div class="col-md-4">
                        <label>First Name</label>
                     </div>
                     <div class="col-md-8">
                        <input type="text" class="form-control form-input" name="teachername" v-model="teacher.teachername" placeholder="teachername*" required>
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label>Middle Name</label>
                     </div>
                     <div class="col-md-8 ">
                        <input type="text" class="form-control form-input" id="" name="middlename" placeholder="Teacher Middlename*" v-model="teacher.middlename" >
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label for="class">Last Name</label>
                     </div>
                     <div class="col-md-8">
                        <input type="text" class="form-control" name="lastname" placeholder="Teacher LastName*" v-model="teacher.lname"  required>
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label>Gender</label>
                     </div>
                     <div class="col-md-8">
                        <label><input type="radio" value="female"  name="gender" v-model="teacher.gender">Female</label>
                        <label><input type="radio" value="male" name="gender" v-model="teacher.gender">Male</label>
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label>Marital Status</label>
                     </div>
                     <div class="col-md-8">
                        <label><input type="radio" value="married" name="maritalstatus" v-model="teacher.maritalstatus">  Married</label>
                        <label><input type="radio" value="unmarried" name="maritalstatus" v-model="teacher.maritalstatus">  Unmarried</label>
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label for="class">Date Of Birth</label>
                     </div>
                    <div class="col-md-8 ">
                        <date-picker lang="en" v-model="setteacherdateofbirth"></date-picker>
                    </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label for="class">Blood Group</label>
                     </div>
                     <div class="col-md-8">
                        <input type="text" class="form-control" name="bloodgroup" placeholder="O+,O-,B+,B-,A+,A- *" v-model="teacher.bloodgroup" ng-pattern="" required>
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label>Contact Number</label>
                     </div>
                     <div class="col-md-8">
                        <input type="text" class="form-control form-input" name="contact number" v-model="teacher.contactnumber" placeholder="contactnumber*" ng-pattern="">
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label>E-mail </label>
                     </div>
                     <div class="col-md-8">
                        <input type="email" class="form-control form-input" name="emailid" v-model="teacher.emailid" placeholder="xxxxxxxxx@yyy.com" >
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label>Qualification </label>
                     </div>
                     <div class="col-md-8">
                        <input type="text" class="form-control form-input" name="qualification" v-model="teacher.qualification" placeholder=" for ex:Phd,B.tech">
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label>Tags</label>
                     </div>
                     <div class="col-md-8">
                        <input type="text" class="form-control form-input" name="subjects" v-model="teacher.subjects" placeholder="subjects she/he can teach" ng-pattern="/[aA0-zZ9\s\-\_]$/">
                     </div>
                  </div>
                  <br>
               </div>
               <div class="col-lg-6">
                  <div class="row">
                     <div class="col-md-4">
                        <label>Date of joining</label>
                     </div>
                    <div class="col-md-8 ">
                        <date-picker lang="en" v-model="setteacherdateofjoining"></date-picker>
                    </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label>About</label>
                     </div>
                     <div class="col-md-8">
                        <textarea rows="7" cols="40" class="form-control form-input" name="about" v-model="teacher.about" ></textarea>
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-md-4">
                        <label>Address</label>
                     </div>
                     <div class="col-md-8">
                        <textarea rows="7" cols="40" class="form-control form-input" v-model="teacher.address"></textarea>
                     </div>
                  </div>
               </div>
            
            <div class="row">
               <div class="col-lg-6 col-lg-offset-3 text-center">
                  <button id="btn-reset" type="reset" class="btn btn-info button"> Reset</button>
                  <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="editteacher" class="btn btn-info button">Update</button>
               </div>
            </div>
            </div>
            </form>
         </div>
      </div>
   </div>
</div>

        <router-view v-bind:userdetails="userdetails" v-bind:school="school"></router-view>
    </div>
</template>
<script>
import UserService from '../services/userService.js';
import DatePicker from 'vue2-datepicker';
import moment from 'moment'

export default{
    components: { DatePicker },
    props:['school','userdetails'],
    data(){
        return{
            teacher:{},
            teachers:[],
            setteacherdateofbirth:'',
            setteacherdateofjoining:'',
            id:this.$cookie.get('id')
        
        }
    },
    created(){
        UserService.Teachers(this.id).then((response)=>{
            this.teachers=response.data;
        }).catch((error)=>{
            console.log(error.response.data)
        })
    },
    methods:{
        setTeacher:function(teacher){
            this.teacher=teacher;
            this.setteacherdateofbirth=new Date();
            this.setteacherdateofbirth.setTime(teacher.dateofbirth);
            this.setteacherdateofjoining=new Date();
            this.setteacherdateofjoining.setTime(teacher.dateofjoining)
        },
        editteacher:function(){
            var teacher={
                "id":this.teacher.id,
                "teachername":this.teacher.teachername,
                "middlename":this.teacher.middlename,
                "lname":this.teacher.lname,
                "gender":this.teacher.gender,
                "maritalstatus":this.teacher.maritalstatus,
                "contactnumber":this.teacher.contactnumber,
                "emailid":this.teacher.emailid,
                "qualification":this.teacher.qualification,
                "subjects":this.teacher.subjects,
                "dateofbirth":this.setteacherdateofbirth.getTime(),
                "dateofjoining":this.setteacherdateofjoining.getTime(),
                "bloodgroup":this.teacher.bloodgroup,
                "about":this.teacher.about,
                "address":this.teacher.address,
                "role":this.teacher.role,
            }
            UserService.UpdateTeacher(teacher,this.id).then((response)=>{
                console.log(response);
                if(response.status==400){
                     $('#editteacher').modal('hide');
                }
            }).catch((error)=>{
                console.log(error.response.data)
            })
        },
        getDateOfJoining:function(date){
            return moment(date).format('DD/MM/YYYY');
        }
    }
}
</script>
<style>
.teacherstable{
width:100%;
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
.newteacher{
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
</style>