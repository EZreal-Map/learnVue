<template>
  <div class="TodoMain">
    <ul class="todo-list" v-for="(item,index) in list" :key="item.id">
        <li class="todo">
          <div class="view">
            <span class="index">{{index+1}}</span> <label>{{item.name}}</label>
            <button class="destroy" @click="delEventSonListen(item.id)"></button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props:["list"],
  methods:{
    delEventSonListen(id){
      this.$emit("delEventFatherListen",id)
    }
  }
}
</script>

<style>

</style>