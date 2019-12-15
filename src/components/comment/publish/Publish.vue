<template>
	<div id="publish">
		<div class="box">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Publish',
		components: {
			
		}
	}
</script>

<style scoped="scoped">
	#publish{
		text-align: center;
	}
	.box{
		width: 100%;
		height: 400px;
		margin-top: 40px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content: space-around;
	}
	.box div{
		background-color: #FFA626;
		width: 45%;
		height: 180px;
		border-radius: 15px;
	}
</style>