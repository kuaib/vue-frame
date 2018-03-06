<template>
	<div id="page-home">
		<page-wrapper>
			<div class="page-index">
				<p>首页</p>
				<p><img src="../../assets/images/logo.png" alt=""></p>
			</div>
			<input type="text" placeholder="输入姓名">
		</page-wrapper>
	</div>
</template>
<script>
	import { numberComma,Alert } from 'vux'
	export default({
		mounted() {
			console.log(numberComma(123456.89,4))
			this.$vux.toast.show({
				text: '哈哈哈',
				time: 2000000
			})
		}

	})
</script>
<style lang="scss">
	@import 'src/style/mixin.scss';
	.page-index {
		// 因为有postcss-loader、autoprefixer，不需要手动添加前缀
		// 浏览器中会自动添加
		text-align: center;
		p {
			color: $red;
			img {
				@include wh(3rem,3rem);
				transform: rotate(15deg);
			}
		}
	}
	@include placeholder(red,1.5rem);
	input {
		@include wh(8rem,2rem);
	}
</style>