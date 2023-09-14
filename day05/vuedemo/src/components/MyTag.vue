<template>
    <div class="my-tag"  >
        <input  v-input v-if="tagEdit"  :value="value" @blur="tagEditBlur" @keyup.enter="keyHandle($event)"
        class="input"
        type="text"
        placeholder="输入标签"
        />
        <div v-else @dblclick="tagEditHandle"
         class="text">{{value}}</div>
    </div>
</template>

<script>
export default {
    props:{
        value: String
    },
    data(){
        return {
            tagEdit:false,
        }
    },
    methods:{
        tagEditHandle(){
            this.tagEdit = true;
        },
        tagEditBlur(){
            this.tagEdit = false;
        },
        keyHandle(e){
            console.log(e)
            this.tagEdit = false;
            // this.value = e.target.value 
            this.$emit('input',e.target.value)
        }
    },
    // 没有记住 自定义 v-标签
    directives:{
        "input" : {
            inserted (el) {
                el.focus()
            }
        }
    }
}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>