<template>
  <div id="app">
    <!-- router-view显示的是当前路由地址所对应的内容 -->
    <!-- keep-alive 渲染一次后，把数据保存在缓存中 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
