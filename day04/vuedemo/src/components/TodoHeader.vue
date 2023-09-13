<template>
  <div class="TodoHeader">
    <!-- 输入框 -->
    <header class="header">
      <h1>小黑记事本</h1>
      <input v-model.trim="addEventName" placeholder="请输入任务" class="new-todo" />
      <button class="add" @click="addEventSonListen">添加任务</button>
    </header>
  </div>
</template>

<script>
export default {
  data(){
    return {
      addEventName:""
    }
  },  
  methods:{
    addEventSonListen(){
      this.$emit("addEventFatherListen",this.addEventName)
      this.addEventName = ""
    }
  }
}
</script>

<style>

</style>