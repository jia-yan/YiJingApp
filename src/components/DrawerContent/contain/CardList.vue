<template>
	<div class="son1 page2" id="mycardlist">
	        <div class="page1-son page-son">		              			    
	          <div class="aui-card-list">
	              <div class="aui-card-list-header aui-card-list-user aui-border-b">
	                  <div class="aui-card-list-user-avatar">
	                      <img src="../../comment/chat/images/pic.png" class="aui-img-round" />
	                  </div>
	                  <div class="aui-card-list-user-name">
	                      <div>Fighting</div>
	                      <small>1天前</small>
	                  </div>
	                  <div class="aui-card-list-user-info my-set11">安徽芜湖</div>
	              </div>
	              <div class="aui-card-list-content-padded my-set12">
	    <!-- <img src="../image/pic4.jpg" /> -->
	    清人沈复写《浮生六记》，将与爱妻芸娘的点滴韵事都落诸笔端。 沈复说自己“爱花成癖，喜剪盆树”。他育碗莲，叹其亭亭可爱；他爱兰花，取其幽香韵致；他赏杜鹃，爱其色可久玩；待到秋日篱东菊绽，更是在千姿万华间雅兴不减。
	                <ul class="aui-list aui-media-list my-set13">
	                    <li class="aui-list-item">
	                        <div class="aui-list-item-inner">
	                            <div class="aui-row aui-row-padded">
	                                <div class="aui-col-xs-4">
	                                    <img src="../../comment/chat/images/pic1.jpg" />
	                                </div>
	                                <div class="aui-col-xs-4">
	                                    <img src="../../comment/chat/images/cbd.jpg" />
	                                </div>
	                                <div class="aui-col-xs-4">
	                                    <img src="../../comment/chat/images/cbd.jpg" />
	                                </div>
	                                <div class="aui-col-xs-4">
	                                    <img src="../../comment/chat/images/cbd.jpg" />
	                                </div>
	                            </div>
	                        </div>
	                    </li>
	                </ul>
	              </div>
	
	              <div class="aui-card-list-footer aui-border-t">
	                  <div><i class="aui-iconfont aui-icon-note"></i> 666</div>
	                  <div><i class="aui-iconfont aui-icon-laud"></i> 888</div>
	                  <div><i class="mui-icon mui-icon-redo"></i> 888</div>
	              </div>
	          </div>
	        </div>
	      </div>
</template>

<script>
	export default {
		name: 'CardList',
		data() {
			return {
				
			}
		},
		components: {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped="scoped">
	/*卡片列表布局*/
	#mycardlist .aui-card-list {
		position: relative;
	    margin-bottom: 12px;
	    background: #ffffff;
	}
	#mycardlist .aui-card-list-header,
	#mycardlist .aui-card-list-footer {
		position: relative;
		min-height: 35px;
	    padding: 8px 12px;
	    -webkit-box-sizing: border-box;
	    		box-sizing: border-box;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-pack: justify;
	    -webkit-justify-content: space-between;
	    		justify-content: space-between;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    		align-items: center;
	}
	#mycardlist .aui-card-list-header {
		font-size: 12.5px;
		color: #212121;
	}
	#mycardlist .aui-card-list-header.aui-card-list-user {
		display: block;
	}
	#mycardlist .aui-card-list-user-avatar {
		width: 32px;
		float: left;
		margin-right: 8px;
	}
	#mycardlist .aui-card-list-user-avatar img {
		width: 100%;
		display: block;
	}
	#mycardlist .aui-card-list-user-name {
		color: #212121;
		position: relative;
		font-size: 11px;
		-webkit-box-sizing: border-box;
				box-sizing: border-box;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-pack: justify;
	    -webkit-justify-content: space-between;
	    		justify-content: space-between;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    		align-items: center;
	}
	#mycardlist .aui-card-list-user-name > *,
	#mycardlist .aui-card-list-user-name small {
		position: relative;
	}
	#mycardlist .aui-card-list-user-name small {
		color: #757575;
	}
	#mycardlist .aui-card-list-user-info {
		color: #757575;
		font-size: 10px;
	}
	#mycardlist .aui-card-list-content {
		position: relative;
	}
	#mycardlist .aui-card-list-content-padded {
		position: relative;
		padding: 8px 12px;
	}
	#mycardlist .aui-card-list-content,
	#mycardlist .aui-card-list-content-padded {
		font-size: 11px;
		color: #212121;
	}
	#mycardlist .aui-card-list-content img,
	#mycardlist .aui-card-list-content-padded img {
		width: 100%;
		display: block;
	}
	#mycardlist .aui-card-list-footer {
		font-size: 11px;
		color: #757575;
	}
	#mycardlist .aui-card-list-footer > * {
		position: relative;
	}
	#mycardlist .aui-card-list-footer.aui-text-center {
		display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
		-webkit-box-pack: center;
	    box-pack: center;
	    -webkit-justify-content: center;
	    justify-content: center;
	}
	#mycardlist .aui-card-list-footer .aui-iconfont {
		font-size: 15px;
	}
	#mycardlist .aui-row {
		overflow: hidden;
		margin: 0;
		justify-content: flex-start;
		align-content: flex-start;
		flex-wrap: wrap;
	}
	#mycardlist .aui-row-padded {
		margin-left: -2px;
		margin-right: -2px;
		display: flex;
	}
	#mycardlist .aui-row-padded [class*=aui-col-xs-] {
		padding: 0.125rem;
	}
	#mycardlist .aui-col-xs-4 {
		width: 33.33333333%;
		position: relative;
		float: left!important;
	}
	#mycardlist .aui-list {
	    padding: 0;
	    margin: 0;
	    position: relative;
	    font-size: 13px;
	}
	#mycardlist .aui-list .aui-list-item {
	    list-style: none;
	    margin: 0;
	    padding: 0;
	    padding-left: 12px;
	    color: #212121;
	    background-color: #ffffff;
	    position: relative;
	    min-height: 35px;
	    -webkit-box-sizing: border-box;
	    		box-sizing: border-box;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-pack: justify;
	    -webkit-justify-content: space-between;
	    		justify-content: space-between;
	}
	#mycardlist .aui-list .aui-list-item-inner {
	    position: relative;
	    min-height: 35px;
		padding-right: 12px;
	    width: 100%;
	    -webkit-box-sizing: border-box;
	    		box-sizing: border-box;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-flex: 1;
	    -webkit-box-pack: justify;
	    -webkit-justify-content: space-between;
				justify-content: space-between;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
				align-items: center;
	}
	#mycardlist .aui-list .aui-list-item:after {
		width: 100%;
	    height: 1px;
	    background-color: #dddddd;
	    display: block;
	    content: '';
	    position: absolute;
	    top: auto;
	    right: auto;
	    bottom: 0;
	    left: 0;
	    z-index: 2;
	    -webkit-transform-origin: 50% 100%;
	            transform-origin: 50% 100%;
	    pointer-events: none;
	}
	#mycardlist .aui-list .aui-list-item:active {
	    background-color: #f5f5f5;
	    -webkit-transition: background-color 0.2s linear;
	            transition: background-color 0.2s linear;
	}
	#mycardlist .aui-list .aui-list-item:last-child:after {
	    height: 0;
	}
	#mycardlist .aui-media-list .aui-list-item {
		display: block;
	}
	#mycardlist .aui-media-list .aui-list-item-inner {
		display: block;
		padding-top: 8px;
	    padding-bottom: 8px;
	}
	#mycardlist .aui-list.aui-media-list [class*=aui-col-xs-] img{
	    max-width: 100%;
	    width: 100%;
	    display: block;
	}
	/*边框样式*/
	#mycardlist .aui-border-t,
	#mycardlist .aui-border-b{
	    position: relative;
	}
	#mycardlist .aui-border-t:before,
	#mycardlist .aui-border-b:after {
		width: 100%;
	    height: 1px;
	    background-color: #dddddd;
	    display: block;
	    content: '';
	    position: absolute;
	    z-index: 2;
	    left: 0;
	    right: auto;
	    -webkit-transform-origin: 100% 50%;
	            transform-origin: 100% 50%;
	    pointer-events: none;
	}
	#mycardlist .aui-border-t:before {
	    bottom: auto;
	    top: 0;
	}
	#mycardlist .aui-border-b:after {
	    bottom: 0;
	    top: auto;
	}
	@media only screen and (-webkit-min-device-pixel-ratio: 1.5) {
	    #mycardlist .aui-border-t:before,
	    #mycardlist .aui-border-b:after  {
	    	-webkit-transform: scaleY(1);
	                transform: scaleY(1);
	    }
	}
	@media only screen and (-webkit-min-device-pixel-ratio: 2) {
	    #mycardlist .aui-border-t:before,
	    #mycardlist .aui-border-b:after  {
	    	-webkit-transform: scaleY(0.5);
	                transform: scaleY(0.5);
	    }
	}
	@media only screen and (-webkit-min-device-pixel-ratio: 3) {
	    #mycardlist .aui-border-t:before,
	    #mycardlist .aui-border-b:after  {
	    	-webkit-transform: scaleY(0.333);
	                transform: scaleY(0.333);
	    }
	}
	@font-face {
		font-family: "aui_iconfont";
		src: url('aui-iconfont.2.0.ttf') format('truetype');
	}
	#mycardlist .aui-iconfont {
		position: relative;
		font-family:"aui_iconfont" !important;
		font-size: 0.7rem;
		font-style:normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	#mycardlist .aui-icon-note:before { content: "\e6c6"; }
	#mycardlist .aui-icon-laud:before { content: "\e64b"; }
	#mycardlist .aui-icon-star:before { content: "\e6e0"; }
	/* .son1{
	  display: none;
	  height: auto;
	  width: 100%;
	} */
	.son1 .page-son{
	          height: auto;
	          width: 100%;
	        }
	.my-set11{
	          text-align: left;
	        }
	        .my-set12{
	          font-size: 12px;
	          text-align: left;
	        }
	        .my-set13{
	          margin-bottom: 0px;
	          padding-top: 0px;
	          padding-bottom: 0px;
	        }
</style>
