<template>
<div>
    <br>
    <br>
    <div class="row">
        <div class="col-lg-12">
            <div class="col-lg-3">
                <label class="pull-right classlabel">Class:</label>
            </div>
            <div class="col-lg-3">
                <select class="forminput pull-left" >
                    <option v-for="classes in classes">{{classes.gradenumber}}{{classes.sectionname}}-{{classes.syllabustype}}</option>
                </select>
            </div>
            <div class="col-lg-3 studentslabelone">
                <label class="classlabel">Students:</label>
            </div>
            <div class="col-lg-3 studentlabel">
                <select class="forminput">
                    <option>Mohan</option>
                    <option>Gayatri</option>
                </select>
            </div>
        </div>
    </div>
    <br>
    <br>
    <highcharts :options="options"  style="height: 800px; width:1500px "></highcharts>
</div>
</template>
<script>
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import loadMap from 'highcharts/modules/map';
import loadStock from 'highcharts/modules/stock';
loadMap(Highcharts);
loadStock(Highcharts);
    export default{
        props:['classes'],
        data(){
            return{
                options:{
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
                            data: [[0, 0, 10], [0, 1, 19], [0, 2, 70], [0, 3, 24], [0, 4, 99],[0,5,24],[0,6,100], 
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
                    }
                }
            }
        }
</script>
<style>
    .highcharts-credits{
        display:none
    }
</style>