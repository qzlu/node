<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="show">点击我</button>
    <div>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
    <div style="width:500px">
        <el-progress :percentage="0"></el-progress>
        <el-progress :percentage="70"></el-progress>
        <el-progress :percentage="80" color="#8e71c7"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
    </div>
<!--     <div style="width:500px;height:700px;overflow:hidden">
        <canvas id="myChart" width="400" height="400"></canvas>
    </div> -->
    <div class="lucky-container">
        <div class="lucky-box">

        </div>
    </div>
  </div>
</template>
<script>
import {index} from '../api/api.js';
import Chart from 'chart.js';
export default {
  data() {
    return {
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        lottery:['奖品1','谢谢', '奖品2','谢谢', '奖品3','谢谢']
    };
  },
  mounted(){
    this.$nextTick(()=>{
        this.showChart()
    })
  },
  methods: {
    show() {
 /*        index({action:2})
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        }); */
    },
    showChart(){
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
  }
};
</script>
<style>
    .lucky-container{
        width: 590px;
        height: 590px;
        margin: 0 auto;
        border-radius: 50%;
        background: url('../assets/img/draw_wheel.png');
        position: relative
    }
    .lucky-box{
        
    }
</style>
