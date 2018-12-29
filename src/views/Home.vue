<template>
  <div class="home">
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item,index) in imgArr" :key="index">
        <img :src="item" height="200" width="100%" alt="" srcset=""/>
        </el-carousel-item>
    </el-carousel>
    <div>
        <el-table
            :data="tableData3"
            style="width: 99%"
            height="250">
            <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="120">
            <template slot-scope="scope">
                {{scope.row.name}}
            </template>
            </el-table-column>
            <el-table-column
            prop="province"
            label="省份"
            width="120">
            </el-table-column>
            <el-table-column
            prop="city"
            label="市区"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址"
            width="300">
            </el-table-column>
            <el-table-column
            prop=""
            label=""
            >
            </el-table-column>
        </el-table>
        <!-- <img :src="mysrc" alt=""> -->
    </div>
    <el-button @click="postExamples()">增加数据</el-button>
    <el-button @click="getExamples()">获取数据</el-button>
    <input type="file" id="test">
    <el-button @click="upload()">上传</el-button>
    <el-button @click="test()">foo</el-button>
    <router-view/>
    <div class="outer">
        <div class="animate">
            
        </div>
    </div>
    <test :test.sync="num"> </test>{{num}}
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import test from '@/components/test.vue'
import {index,postExample,getExample,getUsers,uploadFile} from '../api/api.js';
import axios from 'axios';
export default {
  name: 'home',
  data(){
    return{
        imgArr:['/img/test.jpg','/img/test.jpg','/img/test.jpg','/img/test.jpg','/img/test.jpg'],
        tableData3:[],
        mysrc:require('../assets/logo.png'),
        num:10,
        context:null,
        awards:[
            { level: '特等奖', name: '我的亲笔签名', color: '#576c0a' },
            { level: '未中奖', name: '未中奖', color: '#ad4411' },
            { level: '一等奖', name: '玛莎拉蒂超级经典限量跑车', color: '#43ed04' },
            { level: '未中奖', name: '未中奖', color: '#d5ed1d' },
            { level: '二等奖', name: '辣条一包', color: '#32acc6' },
            { level: '未中奖', name: '未中奖', color: '#e06510' },
          ]
        }  
  },
  components: {
    HelloWorld,
    test
  },
  created(){
        this.getList()
  },
  mounted(){
      this.$nextTick(() => {
          this.drawCanvas()
      })
  },
  methods:{
      getList(){
         getUsers()
         .then((res)=>{
             console.log(res);
             this.tableData3=res
         })
         .catch(err=>{
             console.log(err);
         })
      },
      postExamples(){
        postExample({msg:"hello,新增数据"})
        .then((res)=>{
            console.log(res)
        })
          .catch((err) => {
            console.log(err);
        })
      },
      getExamples(){
          getExample()
          .then((res)=>{
              console.log(res)
          })
          .catch((err)=>{
              console.log(err);
          })
      },
      upload(){
          var formData=new FormData();
          var file=document.getElementById('test').files[0];
          formData.append("userfile",file);
          uploadFile(formData)
          .then(res=>{
              console.log(res);
          })
      },
      test(){
          this.$router.push({path:"/user/fo"})
      },
      getLineTextList(context, text, maxLineWidth) {
        let wordList = text.split(''), tempLine = '', lineList = []
        for (let i = 0; i < wordList.length; i++) {
          // measureText方法是测量文本的宽度的,这个宽度相当于我们设置的
          // fontSize的大小,所以基于这个,我们将maxLineWidth设置为当前字体大小的倍数
          if (context.measureText(tempLine).width >= maxLineWidth) {
            lineList.push(tempLine)
            maxLineWidth -= context.measureText(text[0]).width
            tempLine = ''
          }
          tempLine += wordList[i]
        }
        lineList.push(tempLine)
        return lineList
      },
      drawCanvas () {
        let canvas = document.getElementById('myCanvas')
        let context = canvas.getContext('2d')
        this.context = context 
        canvas.width = 300
        canvas.height = 300
        context.save()
        context.arc(150, 150, 150, 0, Math.PI * 2, false)
        context.fillStyle='#FD6961'
        context.fill()
        context.restore()
        // 第一个奖品色块开始绘制时开始的弧度及结束的弧度,因为我们这里
        // 暂时固定设置为6个奖品,所以以6为基数
        let startRadian = 0, RadianGap = Math.PI * 2 / 6, endRadian = startRadian + RadianGap
        for (let i = 0; i < 6; i++) {
          context.save()
          context.beginPath()
          // 为了区分不同的色块,
          context.fillStyle = this.awards[i].color
          
          // 这里需要使用moveTo方法将初始位置定位在圆点处,这样绘制的圆
          // 弧都会以圆点作为闭合点,下面有使用moveTo和不使用moveTo的对比图
          context.moveTo(150, 150)
          // 画圆弧时,每次都会自动调用moveTo,将画笔移动到圆弧的起点,半
          // 径我们设置的比转盘稍小一点
          context.arc(150, 150, 140, startRadian, endRadian, false)
          context.fill()
          context.restore()
          context.save()
          context.fillStyle = '#FFFFFF'
          context.font='14px sans-serif';
          context.translate(150 + Math.cos(startRadian + RadianGap / 2) *140 , 150 + Math.sin(startRadian + RadianGap / 2) *140);
          //context.fillText(this.awards[i].name);
          // 旋转角度,这个旋转是相对于原点进行旋转的.
          context.rotate(startRadian + RadianGap / 2 + Math.PI / 2);
          // 一行我们最多展示5个文字
          this.getLineTextList(context, this.awards[i].name, 70).forEach((line, index) => {
            // 绘制文字的方法,三个参数分别带别:要绘制的文字,开始绘制的x坐标,开始绘制的y坐标
            context.fillText(line, -context.measureText(line).width / 2, ++index * 25);
          })
          context.restore();
          // 每个奖品色块绘制完后,下个奖品的弧度会递增
          startRadian += RadianGap
          endRadian += RadianGap
        }
        this.drawButton()
        this.drawArrow()

      },
    // 绘制按钮，以及按钮上start的文字，这里没有新的点，不再赘述
    drawButton() {
      const context = this.context
      context.save()
      context.beginPath()
      context.fillStyle = '#FF0000'
      context.arc(150, 150, 30, 0, Math.PI * 2, false)
      context.fill()
      context.restore()
    
      context.save()
      context.beginPath()
      context.fillStyle = '#FFF'
      context.font = '20px Arial'
      context.translate(150, 150)
      context.fillText('Start', -context.measureText('Start').width / 2, 8)
      context.restore()
    },
    // add
    // 绘制箭头，用来指向我们抽中的奖品
    drawArrow() {
      const context = this.context
      context.save()
      context.beginPath()
      context.fillStyle = '#FF0000'
      context.moveTo(140, 125)
      context.lineTo(150, 100)
      context.lineTo(160, 125)
      context.closePath()
      context.fill()
      context.restore()
    }

  }
}
</script>
<style scoped>
  :root{
      --bg-color:black
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .outer{
      height:60px;
      width:60px;
      border-radius: 50%;
      border:1px solid black;
      line-height: 60px;
      text-align: center;
      vertical-align: middle;
      animation: outer 5s infinite;
      animation-direction:alternate;
      background-color: var(--bg-color)
  }
  .animate{
      height: 40px;
      width:40px;
      border:1px solid red;
      animation: test 5s  infinite ;
      animation-timing-function:linear;
     -webkit-animation-timing-function:linear;
      border-radius: 50%;
      position: relative;
      top:50%;
      left: 50%;
      margin-top:-20px;
      margin-left: -20px;
  }
  @keyframes test {
      from {transform:rotate(0deg); }
      to   {transform:rotate(360deg);}
  }
    @keyframes outer {
      from {transform:rotate(0deg); }
      to   {transform:rotate(-360deg);}
  }
</style>
