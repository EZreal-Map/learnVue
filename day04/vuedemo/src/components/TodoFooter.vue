<template>
  <div class="TodoFooter">
 <!-- 统计和清空 -->
    <footer class="footer">
      <!-- 统计 -->
      <span class="todo-count">合 计:<strong> {{listCount}} </strong></span>
      <!-- 清空 -->
      <button class="clear-completed" @click="delAllEventSonListen">
        清空任务
      </button>
    </footer>
  </div>
     
</template>

<script>
export default {
  props:["listCount"],
  methods:{
    delAllEventSonListen(){
      this.$emit("delAllEventFatherListen")
    }
  }
}
</script>

<style>

</style>