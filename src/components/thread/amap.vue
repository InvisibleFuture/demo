<template>
    <div id="js-container" class="card" style="height:35rem; background:#eee;"></div>
</template>

<script>
const MapKey = '16888b475af05afd1a7eb360dcf15d22'
const MapCityName = '武汉'

export default {
  props: {
    data: {
        type: Array,
        default: function(){
            return []
        }
    }
  },
  //props: ['lat', 'lng'],
  data () {
    return {
      searchKey: '',
      placeSearch: null,
      dragStatus: false,
      AMapUI: null,
      AMap: null,
      xyMap: null,
      lat: null,
      lng: null,
    }
  },
  watch: {
    searchKey () {
      if (this.searchKey === '') {
        this.placeSearch.clear()
      }
    }
  },
  methods: {
    drawRoute: function(beginLnglat, endLnglat) { // 画路线规划
        var driving = new AMap.Driving({map: this.xyMap, hideMarkers: true})
        driving.search(beginLnglat, endLnglat, function (status, result) {})
    },
    drawMarker: function(lng, lat, index) { // 画marker
        if (!lng || !lat) return
        var str ='<div class="xy-marker"><img src="http://www.xiaoyaozj.com/view/img/poi-marker.png"/></div>'
        if(index<100){
            str ='<div class="rbmarkerWrapper"><img class="rbmarker-flag" src="http://www.xiaoyaozj.com/view/img/flags/2.23-07-01-'+index+'.png" /></div>'
        }
        var marker = new AMap.Marker({map: this.xyMap, position: new AMap.LngLat(lng, lat), content: str})
    },
    // 搜索
    handleSearch () {
      if (this.searchKey) {
        this.placeSearch.search(this.searchKey)
      }
    },
    // 实例化地图
    initMap () {
      // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
      let AMapUI = this.AMapUI = window.AMapUI
      let AMap = this.AMap = window.AMap
      AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
        let mapConfig = {
          zoom: 16,
          cityName: MapCityName
        }
        if (this.lat && this.lng) {
          mapConfig.center = [this.lng, this.lat]
        }
        let map = new AMap.Map('js-container', mapConfig)
        this.xyMap = map
        // 加载地图搜索插件
        AMap.service('AMap.PlaceSearch', () => {
          this.placeSearch = new AMap.PlaceSearch({
            pageSize: 5,
            pageIndex: 1,
            citylimit: true,
            city: MapCityName,
            map: map,
            panel: 'js-result'
          })
        })
        // 启用工具条
        AMap.plugin(['AMap.ToolBar'], function () {
          map.addControl(new AMap.ToolBar({
            position: 'RB'
          }))
        })
        // 创建地图拖拽
        let positionPicker = new PositionPicker({
          mode: 'dragMap', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
          map: map // 依赖地图对象
        })
        // 拖拽完成发送自定义 drag 事件
        positionPicker.on('success', positionResult => {
          // 过滤掉初始化地图后的第一次默认拖放
          if (!this.dragStatus) {
            this.dragStatus = true
          } else {
            this.$emit('drag', positionResult)
          }
        })
        // 绘制路径 marker
        var startLngLat = '';
        var endLngLat = '';
        var staytime=0;
        var drivetime=0;
        var tujing='途径：';
        this.data.forEach((item, i) => {
            if(item.type=='stay'){
                if(startLngLat == ''){
                    startLngLat = [item.lng, item.lat]
                    tujing += item.title
                }else{
                    endLngLat = [item.lng, item.lat]
                    this.drawRoute(startLngLat, endLngLat)
                    startLngLat = endLngLat
                    tujing += "," + item.title
                }
                var index = parseInt(i/2)+1
                this.drawMarker(item.lng, item.lat, index)
            }
        })
        map.setFitView()
      })
    },
    createScript: function (url, hasCallback) {
      var scriptElement = document.createElement('script')
      document.body.appendChild(scriptElement)
      var promise = new Promise((resolve, reject) => {
        scriptElement.addEventListener('load', e => {
          document.body.removeChild(scriptElement)
          if (!hasCallback) {
            resolve(e)
          }
        }, false)
        scriptElement.addEventListener('error', e => {
          document.body.removeChild(scriptElement)
          reject(e)
        }, false)
        if (hasCallback) {
          window.____callback____ = function () {
            resolve()
            window.____callback____ = null
          }
        }
      })
      if (hasCallback) {
        url += '&callback=____callback____'
      }
      scriptElement.src = url
      return promise
    },
  },
  async created () {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap && window.AMapUI) {
      this.initMap()
    // 未载入高德地图API，则先载入API再初始化
    } else {
      //await this.createScript('https://webapi.amap.com/maps?v=2.0Beta&key=16888b475af05afd1a7eb360dcf15d22&plugin=AMap.Driving', false)
      await this.createScript('https://webapi.amap.com/maps?v=1.4.15&key=16888b475af05afd1a7eb360dcf15d22&plugin=AMap.Driving', false)
      await this.createScript('http://webapi.amap.com/ui/1.0/main.js', false)
      this.initMap()
    }
  }
}
</script>

<style lang="css">
.m-map{ min-width: 500px; min-height: 300px; position: relative; }
.m-map .map{ width: 100%; height: 100%; }
.m-map .search{ position: absolute; top: 10px; left: 10px; width: 285px; z-index: 1; }
.m-map .search input{ width: 180px; border: 1px solid #ccc; line-height: 20px; padding: 5px; outline: none; }
.m-map .search button{ line-height: 26px; background: #fff; border: 1px solid #ccc; width: 50px; text-align: center; }
.m-map .result{ max-height: 300px; overflow: auto; margin-top: 10px; }

.rbmarker-flag { width: 24px; }
</style>