<template>
    <div class="container">
        <div class="row reset-padding reset-margin">
            <div class="col-lg-12 text-left">
                <h3 class="student-head">New Student</h3>
                <hr>
            </div>
        </div>
        <div class="row reset-padding reset-margin">
            <div class="col-md-12">
                <div class="panel  addteacherpanel">
                    <div class="panel-body teacherpanel">
                        <form id="form" class="form-horizontal" role="form" name="studentregistrationform" >
                            <h4><u><b>Student Details</b></u></h4>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="left-side-form">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Admission No</label>
                                                </div>
                                                <div class="col-md-8 ">
                                                    <input type="text" class="form-control form-input"  placeholder="Admission Number*" v-model="student.admissionnumber" required>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>First Name</label>
                                                </div>
                                                 <div class="col-md-8 ">
                                                    <input type="text" class="form-control form-input" placeholder="Student Firstname*" v-model="student.name" required>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Middle Name</label>
                                                </div>
                                                <div class="col-md-8 ">
                                                    <input type="text" class="form-control form-input"  placeholder="Student Middlename" v-model="student.middlename">
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Last Name</label>
                                                </div>
                                                <div class="col-md-8 ">
                                                    <input type="text" class="form-control form-input"  placeholder="Student Lastname*" v-model="student.lastname" required>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Gender</label>
                                                </div>
                                                <div class="col-md-8">
                                                    <label><input type="radio"  value="female" v-model="student.gender">Female</label>
                                                    <label><input type="radio" value="male" v-model="student.gender">Male</label>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Height/Weight</label>
                                                </div>
                                                <div class="col-md-4 ">
                                                    <input type="text" class="form-control form-input" placeholder="Student Height*" v-model="student.height"   required>
                                                </div>
                                                <div class="col-md-4 ">
                                                    <input type="text" class="form-control form-input"  placeholder="Student Weight*" v-model="student.weight" required>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>E-mail</label>
                                                </div>
                                                <div class="col-md-8 ">
                                                    <input type="email" class="form-control form-input"  placeholder="xxxxxxxxx@yyyy.com*" v-model="student.emailid" required>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label for="class">Blood Group</label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input type="text" class="form-control form-input"  placeholder="O+,O-,B+,B-,A+,A- *" v-model="student.bloodgroup" required>
                                                </div>
                                            </div>
                                            <br>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="right-side-form">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Board Of Edu</label>
                                                </div>
                                                <div class="col-md-8">
                                                    <select class="form-control form-input" v-model="student.syllabustype" paceholder="Select" v-on:change="selectGradebasedonBoard">
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
                                                <div class="col-md-8 ">
                                                    <select class="form-control form-input" v-model="student.gradename" paceholder="Select Grade">
                                                        <option value="" disabled selected>Select your option</option>
                                                        <option v-for="grade in gradesbasedonboard">{{grade.gradename}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Date Of Birth</label>
                                                </div>
                                                <div class="col-md-8 ">
                                                    <date-picker lang="en" v-model="student.dateofbirth"></date-picker>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Date of Joining</label>
                                                </div>
                                                <div class="col-md-8 ">
                                                    <date-picker lang="en" v-model="student.dateofjoining"></date-picker>
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
                                                <textarea rows="4" cols="40"  class="form-control form-input" v-model="student.address" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                
                            </div>
                            <hr>
                            <h4><u><b>Parent Details :</b></u></h4>
                            <div class="col-md-6 col-md-offset-3" style="margin-top: -2%;margin-left: 18%;">
                                <label for="chkPassport">
                                    <input type="checkbox" id="chkPassport"  v-model="student.anotherchild" v-on:change="showHide()" />
                                    Another Child
                                </label>
                                <div v-show="isVisible" style="margin-left: 34%; margin-top: -5%;">
                                    <div class="row">
                                        <div class="col-md-3 ">
                                            <label>Emailid:</label>
                                        </div>
                                        <div class="col-md-9 ">
                                            <input type="email" class="form-control form-input" placeholder="xxxxxxxxx@gmail.com" id="txtPassportNumber" name="parentemailid" v-model="student.parentemailid"/>
                                            <label>(Please enter registred emailid)</label><br>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <br>
                                <div v-show="!isVisible">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="left-side-form">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Father Name</label>
                                                </div>
                                                <div class="col-md-8 ">
                                                    <input type="text" class="form-control form-input"  placeholder="Father Name*" v-model="student.fathername"  required>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Mother Name</label>
                                                </div>
                                                <div class="col-md-8 ">
                                                    <input type="text" class="form-control form-input"  placeholder="Mother Name*" v-model="student.mothername"  required>
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
                                                    <input type="text" class="form-control form-input"   placeholder="Contact Number*" v-model="student.contactnumber" required>
                                                </div>
                                            </div>
                                            <br> 
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Address</label>
                                                </div>
                                                <div class="col-md-8">
                                                    <textarea rows="4" cols="40" class="form-control form-input" v-model="student.parentaddress" required></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <h4><u><b>Login Details</b></u></h4>
                                <div class="row">
                                    <div class="col-md-6 col-md-offset-3">
                                        <div class="left-side-form">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Roles</label>
                                                </div>
                                                <div class="col-md-8">
                                                    <select class="form-control form-input" v-model="student.role">
                                                        <option value="" disabled selected>Select your option</option>
                                                        <option v-for="role in roles">{{role.role}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>e-mail</label>
                                                </div>
                                                <div class="col-md-8 ">
                                                    <input type="email" class="form-control form-input"  placeholder="xxxxxxxxx@yyyy.com*" v-model="student.parentemailid"  required>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Password</label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input type="password" class="form-control form-input"   placeholder="password*" v-model="student.password" required>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label>Confirm Password</label>
                                                </div>
                                                <div class="col-md-8">
                                                    <input type="password" class="form-control form-input"   placeholder="confirmpassword*" v-model="student.confirmpassword"  required>                             
                                                </div>
                                            </div>
                                            <br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-lg-offset-3 text-center">
                                    <button id="btn-reset" type="reset" class="btn button"> Reset</button>
                                    <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="newstudent" class="btn button"  >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserService from '../services/userService.js';
import DatePicker from 'vue2-datepicker';
export default{
    components: { DatePicker },
    props:['userdetails','school','boardofeducation','houses'],
    data(){
        return{
            isVisible:false,
            student:{},
            gradesbasedonboard:[],
            roles:[],
            boardforgrade:{},
            id:this.$cookie.get('id')
        }
    },
    methods:{
        showHide:function(){
            this.isVisible=this.student.anotherchild
        },
        selectGradebasedonBoard:function(){
            var boardforgrade={
                "syllabustype":this.student.syllabustype
            }
            UserService.GradesForStudentBasedOnBoard(boardforgrade,this.id).then((response)=>{
                this.gradesbasedonboard=response.data;
            })
        },
        newstudent:function(){
        console.log(this.student);
            var student={
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
                "doj":this.student.dateofjoining.getTime(),
                "dob":this.student.dateofbirth.getTime(),
                "housename":this.student.housename,
                "address":this.student.address,
                "parentemailid":this.student.parentemailid,
                "fathername":this.student.fathername,
                "mothername":this.student.mothername,
                "contactnumber":this.student.contactnumber,
                "parentaddress":this.student.parentaddress,
                "role":this.student.role,
                "password":this.student.password,
                "confirmpassword":this.student.confirmpassword,
                "anotherchild":this.isVisible
            }
            console.log(student)
            UserService.NewStudent(student,this.id).then((response)=>{
                console.log(response);
                if(response.status==200){
                    this.$router.push('/students');
                    
                }
            })
        }
    },
    created(){

        UserService.Roles(this.id).then((response)=>{
            this.roles=response.data;
        })
    }
}
</script>
