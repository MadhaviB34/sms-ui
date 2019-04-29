<template>
    <div class="container-fluid">
        <h2>Teachers</h2>
        <hr>
        <br>
        <div class='chart'>
            <highcharts :options="options" ></highcharts>
        </div>
        <div class="dendogram">
        <br>
            <tree  :zoomable="zoomable" :data="treeData" :node-text="nodeText"  type="tree" layout-type="euclidean" class="tree_style" />
        </div>
       

    </div>
</template>
<script>
import * as d3 from 'd3'
import {tree} from 'vued3tree';
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import loadStock from 'highcharts/modules/stock';
import loadSunBurst from 'highcharts/modules/sunburst';
import loadExporting from 'highcharts/modules/exporting';
loadStock(Highcharts);
loadSunBurst(Highcharts);
loadExporting(Highcharts);
export default{
    components:{
        tree
    },
    data(){
        return{
        //tree
        type: 'tree',
        layoutType: 'euclidean',
        nodeText: 'name',
        zoomable: true,
        treeData:  {
        name: 'Teachers',
            children: [
                        {
                            name: 'Pushpa',
                                children:
                                    [
                                        {
                                            name: '1A-STATE',
                                                children:[
                                                    {name:'Maths'},
                                                    {name:'Physics'}
                                                ]},
                                        {
                                            name: '1B-CBSE',
                                                children:[
                                                    {name:'Maths'},
                                                    {name:'Physics'}
                                                ]}
                                    ]
                        },
                        {
                            name: 'Mamatha',
                                children: [
                                    {
                                        name: '3A-STATE',
                                        children:[
                                            {name:'Telugu'},
                                            {name:'Hindi'}
                                        ]},
                                    {
                                        name: '4A-ICSE', 
                                            children:[
                                                {name:'Telugu'},
                                                {name:'Hindi'}
                                            ]}
                                ]
                        }
                    ]
                },
                options:{
                 chart: {
        height: '45%'
    },

    title: {
        text: 'Teachers'
    },
    
    series: [{
        type: "sunburst",
        data: [{
    'id': '0.0',
    'parent': '',
    'name': 'Teachers'
}, {
    'id': '1.1',
    'parent': '0.0',
    'name': 'Pushpa'
}, {
    'id': '1.2',
    'parent': '0.0',
    'name': 'Mamatha'
}, 

/*pushpa */
{
    'id': '2.1',
    'parent': '1.1',
    'name': '1B-state'
},

{
    'id': '3.1',
    'parent': '2.1',
    'name': 'Physics',
    'value': 104957438
}, 
{
    'id': '2.2',
    'parent': '1.1',
    'name': '1B-cbse'
},

{
    'id': '3.2',
    'parent': '2.2',
    'name': 'chemistry',
    'value': 190886311
}, {
    'id': '3.3',
    'parent': '2.2',
    'name': 'maths',
    'value': 288336290
}, 
{
    'id': '2.3',
    'parent': '1.1',
    'name': '2b-state'
},

{
    'id': '3.4',
    'parent': '2.3',
    'name': 'Maths',
    'value': 97553151
}, {
    'id': '3.5',
    'parent': '2.3',
    'name': 'chemistry',
    'value': 41318142
}, 
{
    'id': '2.4',
    'parent': '1.1',
    'name': '2b-cbse'
},

{
    'id': '3.6',
    'parent': '2.4',
    'name': 'social',
    'value': 81339988
}, {
    'id': '3.7',
    'parent': '2.4',
    'name': 'telugu',
    'value': 29784193
}, {
    'id': '3.8',
    'parent': '2.4',
    'name': 'chemistry',
    'value': 24053727
},
{
    'id': '2.5',
    'parent': '1.1',
    'name': '3b-state'
},

{
    'id': '3.8',
    'parent': '2.5',
    'name': 'hindi',
    'value': 56717156
}, {
    'id': '3.9',
    'parent': '2.5',
    'name': 'english',
    'value': 25337940
}, {
    'id': '3.10',
    'parent': '2.5',
    'name': 'physics',
    'value': 22916610
}, 

/* mamatha */
{
    'id': '2.6',
    'parent': '1.2',
    'name': '4a-state'
},

{
    'id': '3.11',
    'parent': '2.6',
    'name': 'maths',
    'value': 209288278
}, {
    'id': '3.12',
    'parent': '2.6',
    'name': 'hindi',
    'value': 49065615
}, {
    'id': '3.13',
    'parent': '2.6',
    'name': 'physics',
    'value': 44271041
}, 
{
    'id': '2.7',
    'parent': '1.2',
    'name': '4b-cbse'
},

{
    'id': '3.14',
    'parent': '2.7',
    'name': 'english',
    'value': 324459463
}, {
    'id': '3.15',
    'parent': '2.7',
    'name': 'social',
    'value': 36624199
}, 
{
    'id': '2.8',
    'parent': '1.2',
    'name': '5b-state'
},

{
    'id': '3.16',
    'parent': '2.8',
    'name': 'chemistry',
    'value': 129163276
}, {
    'id': '3.17',
    'parent': '2.8',
    'name': 'telugu',
    'value': 169135030
}, 

{
    'id': '2.9',
    'parent': '1.2',
    'name': '6b-state'
},

{
    'id': '3.18',
    'parent': '2.9',
    'name': 'maths',
    'value': 114846361
}, {
    'id': '3.19',
    'parent': '2.9',
    'name': 'physics',
    'value': 109812293
}, {
    'id': '3.20',
    'parent': '2.9',
    'name': 'telugu',
    'value': 107669985
}, 
],
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
            format: '{point.name}',
            filter: {
                property: 'innerArcLength',
                operator: '>',
                value: 16
            }
        },
        levels: [{
            level: 1,
            levelIsConstant: false,
            dataLabels: {
                rotationMode: 'parallel',
                filter: {
                    property: 'outerArcLength',
                    operator: '>',
                    value: 64
                }
            }
        }, {
            level: 2,
            colorByPoint: true,
            dataLabels: {
                rotationMode: 'parallel'
            }
        },
        {
            level: 3,
            colorVariation: {
                key: 'brightness',
                to: -0.5
            }
        }, {
            level: 4,
            colorVariation: {
                key: 'brightness',
                to: 0.5
            }
        }]

    }],
    tooltip:false
                }
    }
}
}
</script>
<style>
.spark {
  stroke: steelblue;
  stroke-width: 1;
}
.svg-line-container {
    display: inline-block;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    vertical-align: top;
    overflow: visible;
}
.svg-content {
    display: inline-block;
    position: absolute;
    overflow: visible !important;
    top: 0;
    left: 0;
}
.axis {
    shape-rendering: crispEdges;
}
.spark-x line {
  stroke: lightgrey;
}
.spark-x .minor {
  stroke-opacity: .5;
}
.spark-x path {
  display: block;
}
.spark-y line, .spark-y path {
  fill: #999;
  stroke: #000;
}
.axis path,
.axis line {
    fill: none;
    stroke: grey;
    stroke-width: 1;
    shape-rendering: crispEdges;
}
	.tree_style {
 		height: 600px;
 		width: 100%;
 	}
      .chart{
    width: 100%;
    height: 500px;
  }
  .dendogram{
      margin-top:300px
  }
</style>