<template>
	<div class="my-mt">
		<mt-search
			class="my-mt-search"
		  cancel-text="取消"
		  placeholder="搜索">
		</mt-search>
	</div>	
</template>

<script>
</script>

<style scoped="scoped">
	.my-mt{
		display: flex;
		justify-content: center;
		height: 36px;
		margin-bottom: 8px;
	}
	.my-mt .my-mt-search{
		width: 96%;
		height: 36px;
		border-radius: 50px;
	}
	.my-mt .my-mt-search >>> .mint-searchbar{
		padding: 0!important;
		height: 36px!important;
		background-color: #eae7e7;
	}
	.my-mt .my-mt-search >>> .mint-searchbar .mint-searchbar-inner{
		height: 36px;
		border: 1px solid #EEE;
	}
	.my-mt >>> .mint-searchbar-core{
		margin: 0;
		background-color: #FFFFFF;
	}
	.my-mt >>> .mint-searchbar-inner .mintui-search{
		font-size: 16px;
	}
	.my-mt >>> .mint-searchbar-cancel{
		margin-left: 3px;
		margin-right: 10px;
	/* 	background-color: #E5E5EE; */
	}
</style>
