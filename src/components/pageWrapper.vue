<template>
	<div class="mainbody">
		<div class="maininner">
			<!-- 
				匿名插槽，它是默认插槽，作为找不到匹配的内容片段的备用插槽。
				如果没有默认插槽，这些找不到匹配的内容片段将被抛弃
			 -->
			<slot></slot>
		</div>
	</div>
</template>
<style lang="scss">
	@import 'src/style/mixin.scss';
	// 页面主体(该写法可以防止页面在Safari浏览器中滚动时不固定)
	.mainbody {
		background-color: $backcolor;
		max-width: 640px;
		margin: 0 auto;
	  	position: absolute;
	  	top: $paddingTop;
	  	bottom: 0;
	  	left: 0;
	  	right: 0;
	  	overflow: hidden;
	    z-index: 10;
	}
	// 页面主体(可滚动区域)
	.maininner {
	  	overflow: auto;
	  	height: 100%;
	  	-webkit-overflow-scrolling:touch;
	    margin-top: $margin;
	}
</style>