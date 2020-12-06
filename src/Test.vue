<template>
  <div class="test" >test {{message}}</div>
</template>

<script>
export default {
  name:'TestComponent',
  setup(){
    const message="hello world"
    return {
      message
    }
  }
}
</script>

<style lang="scss" scoped>
 .test{
   color:red;
 }
</style>
