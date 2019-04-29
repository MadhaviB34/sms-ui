<template>
    <div>
        <div class="col-lg-12 text-left">
            <h3 class="student-head">Dashboard</h3>
            <hr>
        </div>
        <div class="col-lg-12">
            <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">   
                        <div class="divTableCell">Bus No.</div>
                        <div class="divTableCell">Driver Name</div>
                        <div class="divTableCell">Driver ContactNumber</div>
                        <div class="divTableCell">Driver Licence</div>
                        <div class="divTableCell">Attender Name</div>
                        <div class="divTableCell">Attender Phone Number</div>
                        <div class="divTableCell">Teacher Name</div>
                        <div class="divTableCell">Teacher ContactNumber</div>
                        <div class="divTableCell">No.of Seats</div>
                        <div class="divTableCell">No.of Students</div>
                        <div class="divTableCell">Route</div>
                        <div class="divTableCell">Stops</div>
                    </div>
                    <div class="divTableRowdata" v-for="dashboard in transportdashboard">
                        <div class="divTableCelldata">{{dashboard.busnumber}}</div>
                        <div class="divTableCelldata">{{dashboard.drivername}}</div>
                        <div class="divTableCelldata">{{dashboard.drivercontactnumber}}</div>
                        <div class="divTableCelldata">{{dashboard.licensenumber}}</div>
                        <div class="divTableCelldata">{{dashboard.attendername}}</div>
                        <div class="divTableCelldata">{{dashboard.attendercontactnumber}}</div>
                        <div class="divTableCelldata">{{dashboard.teachername}}</div>
                        <div class="divTableCelldata">{{dashboard.teachercontactnumber}}</div>
                        <div class="divTableCelldata">{{dashboard.noofseats}}</div>
                        <div class="divTableCelldata">{{dashboard.noofstudents}}</div>
                        <div class="divTableCelldata">{{dashboard.routename}}</div>
                        <div class="divTableCelldata">{{dashboard.stops}}</div>
                    </div>
                </div>
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
                transportdashboard:[]
            }
        },
        created(){
            UserService.TransportDashboard(this.id).then((response)=>{
                console.log(response.data);
                this.transportdashboard=response.data
            }).
            catch((response)=>{
                console.log(response.data)
            })
        }
    }
</script>
<style scoped>
    .reset-padding{
        padding:0;
    }
    .reset-margin{
        padding:0;
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
</style>