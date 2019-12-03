<template>
    <div class="my-wrap-tab-bar">
        <topTabBar :tabList="tabList"
                   :toggleActive="toggleActive"
                   :listItemStyle="listItemStyle"
                   :moveTagStyle="moveTagStyle"
                   :tabBarStyle="tabBarStyle"
                   :dragWhiteSpace="dragWhiteSpace"
                   :activeFontColor="activeFontColor"
                   :noActiveFontColor="noActiveFontColor"
                   @handleChange="handleChange"
        ></topTabBar>
    </div>
</template>
<script type="text/ecmascript-6">
    import topTabBar from './tabBar'
    export default {
        name: 'wrapTabBar',
				data() {
					return {
						tabList: [
							{title: '测试数据', isActive: true},
							{title: '测试数据', isActive: false},
							{title: '测试数据', isActive: false},
							{title: '测试数据', isActive: false},
							{title: '测试数据', isActive: false},
							{title: '测试数据', isActive: false}                  
						]
					}
				}, 
        props: {
        //     tabList: {
        //         type: Array,
        //         default: function () {
								// 	return [
								// 	    {title: '测试数据', isActive: true},
								// 	    {title: '测试数据', isActive: false},
								// 	    {title: '测试数据', isActive: false},
								// 	    {title: '测试数据', isActive: false},
								// 	    {title: '测试数据', isActive: false},
								// 	    {title: '测试数据', isActive: false}                  
								// 	]
								// },
        //         required: true
        //     },
            tabBarStyle: {
                type: Object,
                default: function () {
									return {backgroundColor: ''}
								}
            },
            listItemStyle: {
                type: Object,
                default: function () {
									return {width: 70, height: 50, fontSize: 12, fontWeight: 400}
								}
            },
            moveTagStyle: {
                type: Object,
                default: function () {
									return {width: 30, height: 2, offsetBottom: 5, color: 'skyblue'}
								}
            },
            dragWhiteSpace: {
                type: Number,
                default: 100
            },
            activeFontColor: {
                type: Object,
                default: function () {
									return {color: 'skyblue'}								
								}
            },
            noActiveFontColor: {
                type: Object,
                default: function () {
									return {color: '#6c6c6c'}
								}
            }
        },
        components: {
            topTabBar,
        },
        methods: {
            toggleActive(index) {
                for (let i = 0; i < this.tabList.length; i++) {
                    this.tabList[i].isActive = false;
                    this.tabList[index].isActive = true;
                }
            },
            handleChange(index){
                this.$emit('change', index)
            }
        },
        mounted(){
            this.$el.style.height = this.listItemStyle.height + 'px';
            this.$el.style.backgroundColor = this.tabBarStyle.backgroundColor;
        }
    }
</script>
<style scoped>
	.my-wrap-tab-bar{
		width: 100%;
		overflow: scroll;
	}
</style>

