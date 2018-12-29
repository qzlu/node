<template>
<div class="content">
    <div class="chat-list">
        <ul>
            <li v-for="item in list"  :class="{tr:item.id===id}">{{item.msg}}</li>
        </ul>
    </div>
    <el-input type="textarea" :row="2" v-model="message" @keyup.enter="send"></el-input>
    <el-button class="send" @click="send()">发送</el-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            message:"",
            id:"",
            list:[]
        }
    },
    created(){

    },
    mounted(){
        this.$socket.emit('connect'); //在这里触发connect事件
    },
    sockets:{
        connect: function(){
            console.log('socket connected',this.$socket.id);
            this.id=this.$socket.id;
            this.$socket.on("message1",obj => {
                console.log(obj);
            })

        },
        message: function(val){
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)',val);
            val.id=null;
            this.list.unshift(val)
        }
    },
    methods:{
        send(){
          if(this.message==""){
              return
          }
          this.$socket.emit("message", {msg:this.message});
          this.list.unshift({id:this.id,msg:this.message})
/*           this.$socket.on('message', (obj) => {
              console.log(obj);
              obj.id=null;
              this.list.push(obj)
          }); */
        }
    }
}
</script>
<style>
    .content{
        overflow: hidden;
        width: 50%;
        margin: 0px auto;
        padding-top: 100px;
    }
    .chat-list{
        height: 300px;
        border: 2px solid #9999;
        margin-bottom: 20px;
        overflow-y: auto;
    }
    .chat-list ul{
        display: flex;
        flex-direction: column-reverse
    }
    .chat-list ul li{
        padding: 0 20px;
        /* display: flex; */
        /* flex-direction: column-reverse */
    }
    .send{
        float:right;
        margin-top:20px;
    }
    .tr{
        text-align:right
    }
</style>
