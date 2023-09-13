<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeaderVue @addEventFatherListen="addEvent"></TodoHeaderVue>
    <!-- 输入框 -->
    <!-- <header class="header">
      <h1>小黑记事本</h1>
      <input placeholder="请输入任务" class="new-todo" />
      <button class="add">添加任务</button>
    </header> -->

    <!-- 列表区域 -->
    <section class="main">
      <TodoMainVue :list="list" @delEventFatherListen="delEvent"></TodoMainVue>
      <!-- <ul class="todo-list">
        <li class="todo">
          <div class="view">
            <span class="index">1.</span> <label>吃饭饭</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul> -->
    </section>
    
    <!-- 统计和清空 -->
    <!-- <footer class="footer"> -->
      <TodoFooterVue :listCount="list.length" @delAllEventFatherListen="delAllEvent"></TodoFooterVue>
      <!-- 统计 -->
      <!-- <span class="todo-count">合 计:<strong> 1 </strong></span> -->
      <!-- 清空 -->
      <!-- <button class="clear-completed"> -->
        <!-- 清空任务 -->
      <!-- </button> -->
    <!-- </footer> -->
  </section>
</template>

<script>
import TodoHeaderVue from './components/TodoHeader.vue'
import TodoMainVue from './components/TodoMain.vue'
import TodoFooterVue from './components/TodoFooter.vue'
export default {
  data () {
    return {
      list:[
      {
        id:1,
        name:"运动"
      },
      {
        id:2,
        name:"学习"
      },
      {
        id:3,
        name:"做游戏"
      }
    ]
    }
  },
  components:{
  TodoHeaderVue,
  TodoMainVue,
  TodoFooterVue,    
  },
  methods:{
    addEvent(eventName){
      // console.log(eventName)
      this.list.unshift({
        id : +new Date,
        name : eventName 
      })
    },
    delEvent(id){
      this.list = this.list.filter(item=>item.id != id)
    },
    delAllEvent(){
      this.list = []
    }
  }
}
</script>

<style>

</style>
