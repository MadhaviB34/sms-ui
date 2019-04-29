<template>
    <div>
    <div class="col-lg-12">
        <div class="col-lg-10 text-left">
            <h3 class="student-head">Houses</h3>
        </div>
        <div class="col-lg-2 reset-padding reset-margin">
            <router-link to="/admin/newhouse" tag="button" class="btn newacademicbutton pull-right ">New House</router-link>
        </div>
        </div>
        <div class="col-lg-12 housestable reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">House Name</div>
                        <div class="divTableCell">Description</div>
                        <div class="divTableCell">Edit</div>
                        <div class="divTableCell">Delete</div>
                        <div class="divTableCell">Details</div>
                    </div>
                    <div class="divTableRowdata" v-for="house in houses">
                        <div class="divTableCelldata">{{house.housename}}</div>
                        <div class="divTableCelldata">{{house.description}}</div>
                        <div class="divTableCelldata"><a data-toggle="modal" href="#edithousemodal" v-on:click="setHouse(house)"><i class="fa fa-pencil-square-o fa-1x" aria-hidden="true"></i></a></div>
                        <div class="divTableCelldata"><a data-toggle="modal" v-on:click.prevent="deleteHouse(house)"><i class="fa fa-trash fa-1x" aria-hidden="true" href="#"></i></a></div>
                        <div class="divTableCelldata"><a data-toggle="modal" href="#housedetailsmodal" v-on:click="loadhousecompletedetails(house)"><i class="fa fa-file-text" aria-hidden="true"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="edithousemodal" role="dialog">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Edit House</h4>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizantal" name="edithouseform">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="class">House Name:</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" class="form-control" name="housename" placeholder="House name*" v-model="sethouseforupdating.housename"  required>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="class">Description:</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" class="form-control" name="description" placeholder="Description*" v-model="sethouseforupdating.description"  required>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-lg-6 col-lg-offset-3 text-center">
                                    <button id="btn-reset" data-dismiss="modal" class="btn button">Cancel</button>
                                    <button id="btn-Register" type="submit" name="submit" v-on:click.prevent="edithouse()" class="btn button">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="housedetailsmodal" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Details</h4>
                    </div>
                    <div class="modal-body">
                        <div class="divTable">
                            <div class="divTableBody">
                                <div class="divTableRow">
                                    <div class="divTableCell">Grade Name</div>
                                    <div class="divTableCell">Syllabus Type</div>
                                    <div class="divTableCell">No. of Students</div>
                                    <div class="divTableCell">Total Students</div>
                                </div>
                                <div class="divTableRowdata" v-for="details in noofstudentsinhouse">
                                    <div class="divTableCelldata">{{details.gradename}}</div>
                                    <div class="divTableCelldata">{{details.syllabustype}}</div>
                                    <div class="divTableCelldata">{{details.noofstudents}}</div>
                                    <div class="divTableCelldata">{{details.totalnoofstudents}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            houses:[],
            sethouseforupdating:{},
            noofstudentsinhouse:[],
            id:this.$cookie.get('id')
        }
    },
    created(){
        UserService.Houses(this.id).then((response)=>{
        this.houses=response.data;
        }).catch((error)=>{
            console.log(error.response.data);
        })
    },
    methods:{
        deleteHouse:function(house){
            var houseid={
                "id":house.id
            }
            UserService.DeleteHouse(houseid,this.id).then((response)=>{
              if(response.status==200){
                  UserService.Houses().then((response)=>{
                      this.houses=response.data
                  })
              }
            }).catch((error)=>{
                console.log(error.response.data);
            })
        },
        setHouse:function(house){
            this.sethouseforupdating=house;
        },
        edithouse:function(){
            UserService.EditHouse(this.sethouseforupdating,this.id).then((response)=>{
                if(response.status==200){
                  $('#edithousemodal').modal('hide');   
                }
            }).catch((error)=>{
                console.log(error.response.data)
            })
            
        },
        loadhousecompletedetails:function(house){
            var housename={
                "housename":house.housename
            }
            UserService.NumberOfStudentsInHouse(housename,this.id).then((response)=>{
                this.noofstudentsinhouse=response.data
            }).catch((error)=>{
                console.log((error.response.data))
            })

        }

      
    }

}
 
</script>
<style>
.housestable{
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
.newacademicbutton{
background-color: #039be5;
background-image: none;
border-color: #039be5;
color:white;
padding: 5px 30px;
margin-top: 10px;
font-size: 14px;
font-weight: bold;
text-transform: uppercase;
text-decoration:none;
border-radius:0px
}
.newacademicbutton:hover{
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