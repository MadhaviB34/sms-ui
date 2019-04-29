<template>
    <div>
        <div class="col-lg-12 text-left">
            <h3 class="student-head">New Driver</h3>
            <hr>
        </div>
        <div class="col-md-12">
            <div class="panel panel-info addteacherpanel">
                <div class="panel-body teacherpanel">
                    <form id="form" class="form-horizontal" role="form" name="newdriverform" >
                        <div class="row">
                            <div class="col-md-6">
                                <div class="left-side-form">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>First Name</label>
                                        </div>
                                        <div class="col-md-8 ">
                                            <input type="text" class="form-control form-input" id="" name="firstname" placeholder="Firstname*" v-model="staff.firstname" required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Middle Name</label>
                                        </div>
                                        <div class="col-md-8 ">
                                            <input type="text" class="form-control form-input" id="" name="middlename" placeholder="Middlename" v-model="staff.middlename" >
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Last Name</label>
                                        </div>
                                        <div class="col-md-8 ">
                                            <input type="text" class="form-control form-input" id="" name="lastname" placeholder="Lastname*" v-model="staff.lastname" required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Contact Number</label>
                                        </div>
                                        <div class="col-md-8 ">
                                            <input type="text" class="form-control form-input" id="" name="contactnumber" placeholder="Contact Number*" v-model="staff.contactnumber" required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="class">Qualification</label>
                                        </div>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" name="qualification" placeholder="Ex:Ph.d,MBA,M.Tech*" v-model="staff.qualification"  required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="class">Experience</label>
                                        </div>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control" name="experience" placeholder="Experience*" v-model="staff.experience" required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="class">Blood Group</label>
                                        </div>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control form-input" name="bloodgroup" placeholder="O+,O-,B+,B-,A+,A- *" v-model="staff.bloodgroup" required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>e-mail</label>
                                        </div>
                                        <div class="col-md-8 ">
                                            <input type="email" class="form-control form-input" id="" name="e-mail" placeholder="xxxxxxxxx@yyyy.com*" v-model="staff.mailid" required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="class">Role</label>
                                        </div>
                                        <div clas="col-md-8">
                                            <label class="col-md-4">
                                                <input type="radio" name="role" value="DRIVER" v-model="staff.role" >DRIVER
                                            </label>
                                            <label class="col-md-4">
                                                <input type="radio" name="role" value="ATTENDER" v-model="staff.role" >ATTENDER
                                            </label>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label for="class">License Number</label>
                                        </div>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control form-input" name="licensenumber" placeholder="" v-model="staff.licensenumber" required>
                                        </div>
                                    </div>
                                    <br>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="right-side-form">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Date Of Birth</label>
                                        </div>
                                        <div class="col-md-8 ">
                                            <date-picker lang="en" v-model="staff.dateofbirth" ></date-picker>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                         <div class="col-md-4">
                                            <label>Date of Joining</label>
                                        </div>
                                        <div class="col-md-8 ">
                                            <date-picker lang="en" v-model="staff.dateofjoining" ></date-picker>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>License Expire Date</label>
                                        </div>
                                        <div class="col-md-8 ">
                                            <date-picker lang="en" v-model="staff.licenseexpiredate" ></date-picker>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Door Number</label>
                                        </div>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control form-input" name="doornumber" placeholder="" v-model="staff.doornumber" required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Line 1</label>
                                        </div>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control form-input" name="line1" placeholder="" v-model="staff.line1"  required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Line 2</label>
                                        </div>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control form-input" name="line2" placeholder="" v-model="staff.line2" >
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Village</label>
                                        </div>
                                        <div class="col-md-8">
                                            <input type="text" class="form-control form-input" name="vilage" placeholder="" v-model="staff.village"  required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>City/District</label>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control form-input" name="city" placeholder="City name" v-model="staff.city" required>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control form-input" name="district" placeholder="district name" v-model="staff.district"  required>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>State/Pincode</label>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control form-input" name="state" placeholder="state" v-model="staff.state" required>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control form-input" name="pincode" placeholder="pincode" v-model="staff.pincode" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-lg-6 col-lg-offset-3 text-center">
                                <button id="btn-reset" type="reset" class="btn resetbutton"> Reset</button>
                                <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="newstaff" class="btn submitbutton">Submit</button>
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
import DatePicker from 'vue2-datepicker';
import UserService from '../services/userService.js';
    export default{
        components: { DatePicker },
        data(){
            return{
                staff:{},
                id:this.$cookie.get('id'),
            }
        },
        methods:{
            newstaff:function(){
                var newstaff={
                    "bloodgroup":this.staff.bloodgroup,
                    "city":this.staff.city,
                    "contactnumber":this.staff.contactnumber,
                    "dateofbirth":this.staff.dateofbirth.getTime(),
                    "dateofjoining":this.staff.dateofjoining.getTime(),
                    "doornumber":this.staff.doornumber,
                    "district":this.staff.district,
                    "experience":this.staff.experience,
                    "firstname":this.staff.firstname,
                    "lastname":this.staff.lastname,
                    "middlename":this.staff.middlename,
                    "licenseexpiredate":this.staff.licenseexpiredate.getTime(),
                    "licensenumber":this.staff.licensenumber,
                    "line1":this.staff.line1,
                    "line2":this.staff.line2,
                    "mailid":this.staff.mailid,
                    "pincode":this.staff.pincode,
                    "qualification":this.staff.qualification,
                    "role":this.staff.role,
                    "state":this.staff.state,
                    "village":this.staff.village
                }
                console.log(newstaff);
                UserService.TransportNewStaff(this.id,newstaff).then((response)=>{
                    console.log(response.data)
                    if(response.status==200){
                        this.$router.push('/transport/staff')
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