<template>
  <div id="app">
  	<!-- <div class="app">
  		<p>图片为：App.vue的内容</p>
    	<img src="./assets/logo.png">
  	</div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './style/common.scss';
</style>
<style lang="less">
@import '~vux/src/styles/reset.less';
</style>