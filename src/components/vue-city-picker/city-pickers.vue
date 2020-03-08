<template>
<div class="vue-city-picker" @mouseout="endChoice" @mouseover="startMouseOver">
	<input v-show="!noInput" type="text" autocomplete="off" disableautocomplete :name="field" :id="field" :value="currCityName" :placeholder="placeholder" @focus="startChoice" @keypress="startChoice" @blur="endChoice" v-el:input>
	<!--城市选择-->
	<div class="vcp-panel" v-show="cityPanelIsShow">
		<h5>城市选择</h5>
		<ul class="vcp-tags">
			<li :class="{'z-on': item==tagKey}" v-for="item in tagsArr" @click="choiceTag(item)">{{ item }}</li>
		</ul>
		<div class="vcp-list">
			<div :class="{'z-hot': initial == 'hot'}" v-for="(initial, citys) in cityList" v-show="currTagIncludes(initial)">
				<h6 v-if="initial != 'hot'">{{ initial }}</h6>
				<ul>
					<li v-for="v in citys" @click="choiceCity(v.id)" :title="v.name">{{ v.name }}</li>
				</ul>
			</div>
		</div>
	</div>
</div>

</template>

<script>
'use strict';
export default {
	props: {
		field: {
			type: String,
			default: ''
		},
		value: {
			default: '',
			twoWay: true
		},
		placeholder: {
			type: String,
			default: ''
		},
		noInput: {
			type: Boolean,
			default: false
		},
		// 城市列表
		cityList: {
			type: Object,
			default: {}
		},
		// 没有热门城市
		noHot: {
			type: Boolean,
			default: false
		}
	},
	data() {
		let tagsArr = ['热门', 'ABCDE', 'FGHJ', 'KLMN', 'PQRST', 'WXYZ'],
			tagKey = '热门',
			tags = {};
		if(this.noHot){
			tagsArr = ['ABCD', 'EFGH', 'JKL', 'MNPQ', 'RSTW', 'XYZ'];
			tagKey = 'ABCD';
        }
		tagsArr.forEach((item) => {
			if (item == '热门') {
				tags[item] = ['hot'];
			} else {
				tags[item] = item.split('');
			}
		});
		return {
			cityPanelIsShow: false,
			isMouseOver: false,
			tagsArr,
			tags,
			tagKey
		};
	},
	computed: {
		// 当前城市名字
		currCityName() {
			let {
				value,
				cityList
			} = this,
			cityName = '';
			Object.keys(cityList).forEach((item) => {
				cityList[item].forEach((item) => {
					if (value == item.id) {
						cityName = item.name;
					}
				})
			});
			return cityName;
		},
		currTag() {
			let {
				tagKey,
				tags
			} = this;
			return tags[tagKey];
		}
	},
	methods: {
		// 列表是否属于当前标签
		currTagIncludes(ini) {
			let {
				currTag
			} = this;
			return currTag.includes(ini);
		},
		// 选择标签
		choiceTag(key) {
			this.tagKey = key;
		},
		// 开始城市选择
		startChoice(e) {
			if (e && e.type == 'keypress') {
				e.returnValue = false;
			}
			this.cityPanelIsShow = true;
		},
		choiceCity(id) {
			this.value = id;
			this.immEndChoice();
		},
		// 鼠标离开城市选择区域时超过一定时间，关闭城市面板
		endChoice(e) {
			let that = this,
				inputEle = that.$els.input;
			if (e.type == 'mouseout') {
				that.isMouseOver = false;
			}
			setTimeout(function() {
				if (!that.isMouseOver && inputEle != document.activeElement) {
					that.cityPanelIsShow = false;
				}
			}, 300);
		},
		startMouseOver() {
			this.isMouseOver = true;
		},
		// 立即关闭城市面板
		immEndChoice() {
			this.isMouseOver = true;
			this.cityPanelIsShow = false;
		}
	}
}
</script>

<style lang="css" scoped>
@keyframes vueCityPicker {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    opacity: 1;
    transform: translate(0) scale(1);
  }
}

.vue-city-picker {
  position: relative;
  margin: 0;
  padding: 0;
  font: 12px/1.5 'Microsoft YaHei',tahoma,arial,'Hiragino Sans GB','\\5b8b\4f53',sans-serif;
  color: #555;
}

.vue-city-picker * {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

.vue-city-picker input {
  display: block;
  width: 245px;
  height: 28px;
  padding-left: 6px;
  border: 1px solid #DDD;
  outline: none;
  font-size: 14px;
}

.vue-city-picker li {
  list-style-type: none;
}

.vue-city-picker .vcp-panel {
  position: absolute;
  z-index: 99999;
  left: 0;
  padding: 12px 10px 0;
  width: 360px;
  border: 1px solid #DDD;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);
  overflow: hidden;
  background-color: #FFF;
  animation: vueCityPicker 0.1s ease-out;
}

.vue-city-picker .vcp-panel h5 {
  margin-bottom: 5px;
  padding-left: 2px;
  color: #aaa;
  line-height: 1.5;
  font-weight: normal;
}

.vue-city-picker .vcp-panel .vcp-tags {
  overflow: hidden;
  margin: 5px 0;
}

.vue-city-picker .vcp-panel .vcp-tags li {
  box-sizing: border-box;
  width: 60px;
  line-height: 20px;
  display: block;
  float: left;
  background-color: #f2f2f3;
  text-align: center;
  border-left: 1px solid #fff;
  cursor: pointer;
}

.vue-city-picker .vcp-panel .vcp-tags li:first-child {
  border-left: none;
}

.vue-city-picker .vcp-panel .vcp-tags li:hover {
  color: #d0000e;
}

.vue-city-picker .vcp-panel .vcp-tags li.z-on {
  background-color: #d0000e;
  color: #fff;
}

.vue-city-picker .vcp-panel .vcp-list {
  overflow: hidden;
  border-bottom: 10px solid #fff;
}

.vue-city-picker .vcp-panel .vcp-list > div {
  margin: 1px 0 -1px;
  padding: 5px 0;
  line-height: 24px;
  border-bottom: 1px dashed #eee;
  overflow: hidden;
}

.vue-city-picker .vcp-panel .vcp-list > div h6 {
  float: left;
  font-weight: normal;
  color: #d0000e;
  font-size: 13px;
  width: 30px;
  padding-left: 5px;
}

.vue-city-picker .vcp-panel .vcp-list > div ul {
  overflow: hidden;
}

.vue-city-picker .vcp-panel .vcp-list > div ul li {
  float: left;
  width: 60px;
  padding-left: 4px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vue-city-picker .vcp-panel .vcp-list > div ul li:hover {
  background-color: #f2f2f3;
  color: #d0000e;
}

.vue-city-picker .vcp-panel .vcp-list > div.z-hot {
  padding-left: 10px;
}

.vue-city-picker .vcp-panel .vcp-list > div.z-hot ul li {
  padding-left: 6px;
}

</style>