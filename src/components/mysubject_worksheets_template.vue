<template>
    <div>
    <div class="col-lg-12">
        <div class="col-lg-10 text-left">
            <h3 class="student-head">Worksheets</h3>
        </div>
        <div class="col-lg-2 reset-padding reset-margin">
            <a tag="button" class="btn newworksheetbutton pull-right" data-toggle="modal" href="#worksheet">New Worksheet</a>
        </div>
        </div>
        <div class="col-lg-12 worksheetstable reset-padding reset-margin">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divTableCell">Date</div>
                        <div class="divTableCell">Subject</div>
                        <div class="divTableCell">Worksheet Name</div>
                        <div class="divTableCell">Due Date</div>
                        <div class="divTableCell">Tags</div>
                        <div class="divTableCell">Delete</div>
                    </div>
                    <div class="divTableRowdata">
                        <div class="divTableCelldata"></div>
                        <div class="divTableCelldata"></div>
                        <div class="divTableCelldata"></div>
                        <div class="divTableCelldata"></div>
                        <div class="divTableCelldata"></div>
                        <div class="divTableCelldata"><a data-toggle="modal"><i class="fa fa-trash fa-1x" aria-hidden="true" href="#"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="worksheet" role="dialog" name="newworksheet">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">New Worksheet</h4>
                    </div>
                    <div class="modal-body">
                         <form class="form-horizantal" name="newworksheet">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="class">Tags</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" class="form-control" name="Tags" placeholder="Tags*"  required>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="class">Worksheet Name</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text" class="form-control" name="assignmentname" placeholder="Name Of Assignment*"   required>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Date Of Worksheet</label>
                                </div>
                                <div class="col-md-8">
                                    <date-picker lang="en" v-model="dateOfWorksheet" ></date-picker>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <label>Due Date</label>
                                </div>
                                <div class="col-md-8 ">
                                                    <date-picker lang="en" v-model="dueDate"></date-picker>
                                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-lg-6 col-lg-offset-3 text-center">
                                    <router-link :to="{path:'/mysubjects/'+mysubject.gradenumber+mysubject.sectionname+'-'+mysubject.subjectname+'-'+mysubject.syllabustype+'/assignments'}" tag="button" class="btn button">Cancel</router-link>
                                    <button id="btn-post" type="submit" name="submit"  class="btn button" v-on:click.prevent="newassignment" >Save</button>
                                </div>
                            </div>
                         </form>
                      
                    </div>
                    
                </div>

            </div>
        </div>
            <router-view v-bind:mysubject="mysubject" v-bind:school="school" v-bind:userdetails="userdetails" v-bind:acdemicyearandboard="acdemicyearandboard"></router-view>

    </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';

export default{
    components: { DatePicker },
     props:['mysubject','school','userdetails','acdemicyearandboard'],
     data(){
        return {
            dueDate: '',
            dateOfWorksheet : ''
        }

     }
}
</script>
<style>
.worksheetstable{
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
.newworksheetbutton{
    background-color: #039be5;
    background-image: none;
    border-color: #039be5;
    color:white;
    padding: 5px 30px;
    margin-top: 12%;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration:none;
    border-radius:0px
}
.newworksheetbutton:hover{
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