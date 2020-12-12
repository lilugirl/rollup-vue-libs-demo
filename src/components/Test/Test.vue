<template>
  <div class="test" >test {{message}} 
    <br/> doubleCount:{{doubleCount}}
    <br/>
    <button @click="add">Add count</button>
  </div>
</template>

<script>
import {computed ,ref} from 'vue'
export default {
  name:'TestComponent',
  setup(){
    const message="hello world"
    const count=ref(1)
    const doubleCount=computed(()=>count.value*2)
    const add=()=>{
      count.value++;
    }
    return {
      message,
      doubleCount,
      add
    }
  }
}
</script>

<style lang="scss" scoped>
 .test{
   color:red;
 }
</style>
