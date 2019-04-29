<template>
    <div >
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-6 col-md-6">
                    <div class="row">
                        <div class="col-lg-10">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h4><b>{{singlestudent.name}}</b></h4>
                                </div>
                                 <div class="col-sm-6">
                                    <h4><b>{{singlestudent.gradename}}</b></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                      
                        <div class="row">
                            <div class="col-lg-10 col-md-8">
                                <hr style="margin:5px 0 5px 0;">
                                    <div class="row">
                                        <div class="col-sm-3 col-xs-6 tital " >First Name:</div><div class="col-sm-3 col-xs-6 ">{{singlestudent.name}}</div>
                                        <div class="col-sm-3 col-xs-6 tital ">Board Of Education:</div><div class="col-sm-3 col-xs-6">{{singlestudent.syllabustype}}</div>
                                            <div class="clearfix"></div>
                                            <div class="bot-border"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3 col-xs-6 tital " >Middle Name:</div><div class="col-sm-3"> {{singlestudent.middlename}}</div>
                                        <div class="col-sm-3 col-xs-6 tital ">e-mail:</div><div class="col-sm-3">{{singlestudent.emailid}}</div>
                                            <div class="clearfix"></div>
                                            <div class="bot-border"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3 col-xs-6 tital " >Last Name:</div><div class="col-sm-3"> {{singlestudent.lastname}}</div>
                                        <div class="col-sm-3 col-xs-6 tital " >Address:</div><div class="col-sm-3">{{singlestudent.address}}</div>
                                            <div class="clearfix"></div>
                                            <div class="bot-border"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3 col-xs-6 tital " >Father Name:</div><div class="col-sm-3"> {{singlestudent.fathername}}</div>
                                            <div class="clearfix"></div>
                                            <div class="bot-border"></div>
                                    </div>
                                     <div class="row">
                                        <div class="col-sm-3 col-xs-6 tital " >Mother Name:</div><div class="col-sm-3"> {{singlestudent.mothername}}</div>
                                            <div class="clearfix"></div>
                                            <div class="bot-border"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3 col-xs-6 tital " >Contact Number:</div><div class="col-sm-3">{{singlestudent.contactnumber}}</div>
                                             <div class="clearfix"></div>
                                            <div class="bot-border"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3 col-xs-6 tital " >Date Of Joining:</div><div class="col-sm-3">{{dateofjoining(singlestudent.dateofjoining)}}</div>
                                            <div class="clearfix"></div>
                                            <div class="bot-border"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3 col-xs-6 tital " >Date Of Birth:</div><div class="col-sm-3">{{dateofbirth(singlestudent.dateofbirth)}}</div>
                                             <div class="clearfix"></div>
                                            <div class="bot-border"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3 col-xs-6 tital " >Blood Group:</div><div class="col-sm-3">{{singlestudent.bloodgroup}}</div>
                                           
                                    </div>
                                    
                            </div>
                            <div class="col-lg-2 col-md-4">
                                <img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive image" />
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <hr class="studenthr" style="margin:5px 0 5px 0;">
                        <br>
                        <div class="row">
                            <div class="col-lg-3">
                            <h4><b>Performance</b></h4>
                            
                            </div>
                             <div class="col-lg-4"  v-if="marks==false && marksintable==false" >
                             </div>
                            <div class="col-lg-4"  v-if="marks==true || marksintable==true">
                            <button type="button" class="btn btn-info" v-on:click.prevent="Marks">Heatmap</button>
                             <button type="button" class="btn btn-info" v-on:click.prevent="marksbytable">Table</button>
                            
                            </div>
                            <div class="col-lg-4">
                                <div class="col-lg-6">
                                    <label class="acdmcyr">Academic Year:</label>
                                </div>
                                <div class="col-lg-6">
                                    <select class="forminput pull-left" >
                                        <option v-for="year in academicsandboards.academics">{{year.passingyear}}</option>
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                        
                        </div>
                        <div class="row">
                            <div class="col-lg-7 col-md-6"  v-if="attendance==true">
                           
                                <highcharts :options="options1"></highcharts>
                               
                            </div>
                            <div class="col-lg-7 col-md-6" v-if="marks==true">
                             
                                <highcharts :options="options2"  ></highcharts>
                            </div>
                                 <div class="col-lg-7 col-md-6" v-if="marksintable==true">
                         
                                        <div class="divTable">
                                            <div class="divTableBody">
                                                <div class="divTableRow">
                                                    <div class="divTableCell">Subject/Test</div>
                                                    <div class="divTableCell">Telugu</div>
                                                    <div class="divTableCell">Hindi</div>
                                                    <div class="divTableCell">English</div>
                                                    <div class="divTableCell">Maths</div>
                                                    <div class="divTableCell">Science</div>
                                                    <div class="divTableCell">Social</div>
                                                </div>
                                                <div class="divTableRowdata">
                                                    <div class="divTableCelldata">Test 1</div>
                                                    <div class="divTableCelldata">10</div>
                                                    <div class="divTableCelldata">15</div>
                                                    <div class="divTableCelldata">18</div>
                                                    <div class="divTableCelldata">17</div>
                                                    <div class="divTableCelldata">20</div>
                                                    <div class="divTableCelldata">21</div>
                                                </div>
                                                 <div class="divTableRowdata">
                                                    <div class="divTableCelldata">Test 2</div>
                                                    <div class="divTableCelldata">19</div>
                                                    <div class="divTableCelldata">22</div>
                                                    <div class="divTableCelldata">20</div>
                                                    <div class="divTableCelldata">18</div>
                                                    <div class="divTableCelldata">25</div>
                                                    <div class="divTableCelldata">20</div>
                                                </div>
                                                 <div class="divTableRowdata">
                                                    <div class="divTableCelldata">Quarterly</div>
                                                    <div class="divTableCelldata">70</div>
                                                    <div class="divTableCelldata">78</div>
                                                    <div class="divTableCelldata">60</div>
                                                    <div class="divTableCelldata">88</div>
                                                    <div class="divTableCelldata">48</div>
                                                    <div class="divTableCelldata">50</div>
                                                </div>
                                                 <div class="divTableRowdata">
                                                    <div class="divTableCelldata">Test 3</div>
                                                    <div class="divTableCelldata">24</div>
                                                    <div class="divTableCelldata">23</div>
                                                    <div class="divTableCelldata">21</div>
                                                    <div class="divTableCelldata">19</div>
                                                    <div class="divTableCelldata">20</div>
                                                    <div class="divTableCelldata">22</div>
                                                </div>
                                                 <div class="divTableRowdata">
                                                    <div class="divTableCelldata">Half-Yearly</div>
                                                    <div class="divTableCelldata">99</div>
                                                    <div class="divTableCelldata">88</div>
                                                    <div class="divTableCelldata">70</div>
                                                    <div class="divTableCelldata">66</div>
                                                    <div class="divTableCelldata">46</div>
                                                    <div class="divTableCelldata">90</div>
                                                </div>
                                                 <div class="divTableRowdata">
                                                    <div class="divTableCelldata">Test 4</div>
                                                    <div class="divTableCelldata">24</div>
                                                    <div class="divTableCelldata">22</div>
                                                    <div class="divTableCelldata">23</div>
                                                    <div class="divTableCelldata">10</div>
                                                    <div class="divTableCelldata">9</div>
                                                    <div class="divTableCelldata">22</div>
                                                </div>
                                                 <div class="divTableRowdata">
                                                    <div class="divTableCelldata">Annual</div>
                                                    <div class="divTableCelldata">100</div>
                                                    <div class="divTableCelldata">95</div>
                                                    <div class="divTableCelldata">94</div>
                                                    <div class="divTableCelldata">54</div>
                                                    <div class="divTableCelldata">44</div>
                                                    <div class="divTableCelldata">100</div>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                            <div class="col-lg-7 col-md-6" v-if="barchart==true">
                                 <column-chart download="data" xtitle="Subjects" ytitle="Marks" :data="booksdata"  :messages="{empty: 'No data'}" :min="0" :max="100"></column-chart>
                            </div>
                            <div class="col-lg-7 col-md-6" v-if="boxplot==true">
                                 <highcharts :options="options3"></highcharts>
                            </div>
                            <div class="col-lg-1">
                            <div class="vl"></div>
                            </div>
                            <div class="col-lg-2 col-md-6">
                                <div class="row">
                                    <div class="left-navigation">
                                        <ul class="menulist">
                                            <li class="studentanalyticslist"><a v-on:click.prevent="Attendance" class="link">Attendance</a></li>
                                            <li class="studentanalyticslist"><a v-on:click.prevent="Marks" class="link">Marks of a student</a></li>
                                            <li class="studentanalyticslist"><a v-on:click.prevent="Barchart" class="link">Clustered Bar</a></li>
                                            <li class="studentanalyticslist"><a v-on:click.prevent="Boxplot" class="link">Box Plot</a></li>
                                        </ul>
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
import moment from 'moment'
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import loadMap from 'highcharts/modules/map';
import loadStock from 'highcharts/modules/stock';
import EventBus from '../event-bus';
import UserService from '../services/userService.js';
loadMap(Highcharts);
loadStock(Highcharts);
    export default{
         props:['school','userdetails','acdemicyearandboard','academicsandboards','singlestudent'],
        data(){
            return{
                attendance:true,
                marks:false,
                barchart:false,
                boxplot:false,
                marksintable:false,
                id:this.$cookie.get('id'),
                tests:[{testname:"Test 1"},{testname:"Test 2"},{testname:"Quarterly"},{testname:"Test 3"},{testname:"Half-Yearly"},{testname:"Test 4"},{testname:"Annual"}],
                money:[['Kinder-Garten', 300000],['Grade-1', 400000], ['Grade-2',500000],['Grade-3', 600000],['Grade-4',700000],['Grade-5',800000],['Grade-6',900000],['Grade-7',1000000],['Grade-8',1100000],['Grade-9',1200000],['Grade-10',1300000]],
                    options1:{
                      chart: {
                        type: 'heatmap',
                        marginTop: 40,
                        marginBottom: 80,
                        plotBorderWidth: 0
                        },
                        title: {
                         text: 'Attendance'
                        },
                        legend: {
                            enabled: true
                            },
                        xAxis: {
                            categories:['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                        },

                        yAxis: {
                            categories:  ['Mohan', 'Gayatri', 'Yamini', 'Rohith', 'Mounika', 'Surya', 'Ravinder', 'Tanmai', 'Nikitha', 'Vinitha'],
                            title: null
                        },
                        tooltip: {
                            formatter: function () {
                                return '<b>' + this.series.yAxis.categories[this.point.y]+ '</b> Present for <br><b>' +
                                this.point.value+' days '+ '</b> in <b>' +this.series.xAxis.categories[this.point.x] + '</b>';
                            }
                        },
                        colorAxis: {
                            min: 0,
                            max:30,
                            minColor: '#D1C4E9',
                            maxColor: '#673AB7'
                        },

    
                        // legend: {
                        //     align: 'right',
                        //     layout: 'vertical',
                        //     margin: 0,
                        //     verticalAlign: 'top',
                        //     y: 25,
                        //     symbolHeight: 300
                        // },

                        series: [{
                            name: 'Marks per Student',
                            
                            borderWidth: 0.5,
                            data: [[0, 0, 25], [0, 1, 18], [0, 2, 8], [0, 3, 20], [0, 4, 22],[0,5,25],[0,6,30],[0, 7, 10], [0, 8, 17], [0, 9, 31], 
                                    [1, 0, 30], [1, 1, 20], [1, 2, 25], [1, 3,30], [1, 4, 25],[1,5,17],[1,6,18],[1, 7, 20], [1, 8, 25], [1, 9, 28], 
                                    [2, 0, 31], [2, 1, 26], [2, 2, 21], [2, 3, 30], [2, 4, 30],[2,5,30],[2,6,27],[2, 7, 26], [2, 8, 25], [2, 9, 18],
                                    [3, 0, 30], [3, 1, 20], [3, 2, 28], [3, 3, 30], [3, 4, 25],[3,5,27],[3,6,30],[3, 7, 31], [3, 8, 22], [3, 9, 30], 
                                    [4, 0, 30], [4, 1, 25], [4, 2, 28], [4, 3, 19], [4, 4, 28],[4,5,30],[4,6,14],[4, 7, 11], [4, 8, 29], [4, 9, 28],
                                    [5, 0, 27], [5, 1, 28], [5, 2, 12], [5, 3, 20], [5, 4, 29],[5,5,31],[5,6,18],[5, 7, 20], [5, 8, 29], [5, 9, 30],
                                    [6, 0, 28], [6, 1, 26], [6, 2, 14], [6, 3, 19], [6, 4, 22],[6,5,26],[6,6,30],[6, 7, 26], [6, 8, 25], [6, 9, 30],
                                    [7, 0, 31], [7, 1, 21], [7, 2, 22], [7, 3, 15], [7, 4, 30],[7,5,28],[7,6,24],[7, 7, 10], [7, 8, 29], [7, 9, 31],
                                    [8, 0, 25], [8, 1, 27], [8, 2, 12], [8, 3, 19], [8, 4, 28],[8,5,29],[8,6,14],[8, 7, 10], [8, 8, 19], [8, 9, 23],
                                    [9, 0, 27], [9, 1, 11], [9, 2, 31], [9, 3, 30], [9, 4, 29],[9,5,29],[9,6,14],[9, 7, 11], [9, 8, 29], [9, 9, 24],
                                    [10, 0, 10], [10, 1, 29], [10, 2, 28], [10, 3, 17], [10, 4, 26],[10,5,26],[10,6,24],[10, 7, 13], [10, 8, 19], [10, 9, 15],
                                    [11, 0, 22], [11, 1, 18], [11, 2, 28], [11, 3, 28], [11, 4, 28],[11,5,18],[11,6,15],[11, 7, 15], [11, 8, 13], [11, 9, 12],
                                  ],
                            dataLabels: {
                                enabled: false,
                            }
                        }]
                    },
                     options2:{
                      chart: {
                        type: 'heatmap',
                        marginTop: 40,
                        marginBottom: 80,
                        plotBorderWidth: 0.5
                        },
                        title: {
                         text: 'Marks of a student '
                        },

                        xAxis: {
                            categories: ['Telugu', 'Hindi', 'English', 'Maths', 'Science', 'Social', ]
                        },

                        yAxis: {
                            categories: ['Test-1', 'Test-2', 'Quarterly', 'Test-3', 'Half-Yearly','Test-4','Annual'],
                            title: null
                        },
                        legend: {
                            enabled: true
                        },
                        tooltip: {
                            formatter: function () {
                                return '<b>' + this.series.xAxis.categories[this.point.x] + '</b><br><b>' +
                                this.point.value + '</b> marks in <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
                            }
                        },
                        colorAxis: {
                            min: 0,
                            max:100,
                            minColor: '#FFCC80',
                            maxColor: '#FF9800'
                        },

    
                        // legend: {
                        //     align: 'right',
                        //     layout: 'vertical',
                        //     margin: 0,
                        //     verticalAlign: 'top',
                        //     y: 25,
                        //     symbolHeight: 300
                        // },

                        series: [{
                            name: 'Marks per Student',
                            borderWidth: 0,
                            data: [{x:0, y:0, value:10}, {x:0, y:1, value:19}, {x:0, y:2, value:70}, {x:0, y:3, value:24}, {x:0, y:4, value:99},{x:0,y:5,value:24},{x:0,y:6,value:100}, 
                                    [1, 0, 15], [1, 1, 22], [1, 2, 78], [1, 3, 23], [1, 4, 88],[1,5,22],[1,6,95], 
                                    [2, 0, 18], [2, 1, 20], [2, 2, 66], [2, 3, 21], [2, 4, 70],[2,5,23],[2,6,94], 
                                    [3, 0, 17], [3, 1, 18], [3, 2, 88], [3, 3, 19], [3, 4, 66],[3,5,10],[3,6,54], 
                                    [4, 0, 20], [4, 1, 25], [4, 2, 48], [4, 3, 10], [4, 4, 46],[4,5,9],[4,6,44], 
                                    [5, 0, 21], [5, 1, 20], [5, 2, 50], [5, 3, 22], [5, 4, 90],[5,5,22],[5,6,100],
                                   ],
                            dataLabels: {
                                enabled: false,
                            }
                        }]
                    },
                    booksdata : [
                        {
                            name: "High Score", 
                            data: [["Telugu", 99],["Hindi", 99],["English", 98], ["Maths", 100], ["Science", 100],["Social", 100]]
                        },
                        {
                            name: "Low Score", 
                            data: [["Telugu", 35],["Hindi", 35],["English",40], ["Maths", 45], ["Science", 48],["Social", 50]]
                        },
                        {
                            name: "Your Score", 
                            data: [["Telugu", 88],["Hindi", 84],["English",71], ["Maths",86], ["Science", 75],["Social", 90]]
                        }
                    ],
                    options3:{
                            chart: {
                            type: 'boxplot'
                            },

                            title: {
                                text: 'Marks Of A Student In Box Plot'
                            },

                            legend: {
                                enabled: false
                            },

                            xAxis: {
                                categories: ['Telugu', 'Hindi', 'English', 'Maths', 'Science','Social'],
                                title: {
                                        text: 'Subjects'
                                }
                            },

                            yAxis: {
                                title: {
                                    text: 'Marks'
                                },
                                plotLines: [{
                                    value: 95,
                                    color: 'red',
                                    width: 1,
                                    label: {
                                        align: 'center',
                                        style: {
                                            color: 'gray'
                                        }
                                    }
                                }]
                            },

                            series: [{
                                 name: 'Observations',
                                    data: [
                                        [80, 82, 84, 89, 96],
                                        [70, 85, 93, 98, 100],
                                        [60, 76, 81, 87, 91],
                                        [90, 82, 83, 87, 95],
                                        [92, 83, 86, 88, 91],
                                        [93, 84, 86, 90, 91]
                                        ],
                                    tooltip: {
                                        headerFormat: '<em> {point.key}</em><br/>'
                                    }
                                },]
                            }
                        }
                },
        methods:{
            Attendance:function(){
                console.log( this.attendance=true)
                this.attendance=true;
                this.marks=false;
                this.barchart=false;
                this.boxplot=false;
                this.marksintable=false;
            },
            Marks:function(){
                this.attendance=false;
                this.marks=true;
                this.barchart=false;
                this.boxplot=false;
                this.marksintable=false;
                
            },
            Barchart:function(){
                this.attendance=false;
                this.marks=false;
                this.barchart=true;
                this.boxplot=false;
                this.marksintable=false;
            },
            Boxplot:function(){
                this.attendance=false;
                this.marks=false;
                this.barchart=false;
                this.boxplot=true;
                this.marksintable=false;
            },
            dateofjoining:function(date){
                return moment(date).format('DD/MM/YYYY');
            },
            dateofbirth:function(date){
                return moment(date).format('DD/MM/YYYY')
            },
            marksbytable:function(){
                this.marksintable=true;
                this.marks=false;
            }
                
        },
        mounted(){
        $(document).ready(function() {
            $(".menulist > li").click(function() {
                $(".menulist > li").removeClass('current');
                $(this).addClass('current');
            });
        });
        }
    }
</script>
<style>
body{padding-top:30px;}
.image{
    height:213px
}
.tital{ 
    font-size:16px; font-weight:500;
    }
.bot-border{ 
    border-bottom:1px #f8f8f8 solid;  margin:5px 0  5px 0
    }
.sidebar3{
    padding-top:30px;
    padding-left:30px;
    padding-right:0px;
    }
.studentanalyticslist{
    list-style-type: none;
    padding:5px;
    border-bottom:1px solid #848FD8;
    }
ul{
    padding-left:0px
    }
li:hover{
  background-color:rgba(255, 255, 255, 0.25);
  cursor:pointer;
}
.link,.link:hover{
    text-decoration:none;
    color:black;
}
 .highcharts-credits{
    display:none
    }
.forminput{
     width:150px;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.acdmcyr{
    margin-left: 40px;
    margin-top: 5px;
}
.studenthr{
    border-top:3px solid darkgrey;
}
.vl {
    border-left: 3px solid darkgrey;
    height: 400px;
}
* {
	margin: 0px;
	padding: 0px;
}

menulist {
	background-color: #e4801c;
	height: 100%;
}
.current {
	background: #faaf5e;
}
.current:hover{
	background: #faaf5e;
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