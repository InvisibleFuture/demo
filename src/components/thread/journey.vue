<style lang="less" scoped>
ul.journey {
    padding:20px;margin:0;list-style:none;
    >li {
        overflow:auto;
        padding:0px;margin:10px 0;
        border-radius:5px;border: #ebebeb 1px solid;
        //background:rgba(220,220,220,.1);
        >div {
            display:flex;padding:10px 0;align-items:center;background:#64ac5c;color:#ffffff;
            transition: all 0.75s cubic-bezier(0.645, 0.045, 0, 1) 0s;
            >div.left {
                flex:1; text-align:left; padding: 0 15px; display: flex;
                >div {
                    padding: 0 15px;
                    font: 16px sans-serif;
                    font-weight: 400;
                }
                div.conte {
                    position:relative;
                    .oo {
                        position:absolute;top:3px;left:-5px;
                        width:5px;height:5px;
                        border-radius:50% 50% 50% 0;
                        transform:rotate(-45deg);
                        border:4px solid rgba(250,250,250,.9);
                        background: #64ac5c;
                    }
                    div.route {
                        display: flex;
                        .line {
                            width: 20px;
                            height: 4px;
                            margin: 8px 10px 0 10px;
                            display: block;
                            border-right: 2px solid #ffffff;
                            border-bottom: 2px solid #ffffff;
                            transform:skew(45deg);
                        }
                    }
                    div.info {
                        span {
                            padding: 0 6px 0 0;
                            color: #ffffff;
                            font: 12px sans-serif;
                        }
                        span:nth-child(2) {
                            padding: 0 8px;
                            border-left: 1px solid #ffffff;
                            border-right: 1px solid #ffffff;
                        }
                    }
                    
                }
            }
            >div.right {
                text-align:right; padding: 0 15px;
                span {
                    display: block;
                    width: 8px;
                    height: 8px;
                    border-left: #ffffff solid 2px;
                    border-bottom: #ffffff solid 2px;
                    transition: all 0.35s cubic-bezier(0.645, 0.045, 0, 1) 0s;
                    transform: rotate(-45deg);
                }
            }
        }
        >ul{
            list-style: none;
            opacity: 1;
            transition: all 0.75s cubic-bezier(0.645, 0.045, 0, 1) 0s;
            >li{
                display: flex;
                >div.left {
                    width: 6rem; //background: #999999;
                    padding:35px 5px 0 0;text-align:center;
                    font: 16px sans-serif;
                }
                >div.right {
                    flex:1;position:relative;padding:5px;
                    border-left:1px solid #64ac5c;
                    .oo {
                        position:absolute;top:30px;left:-15px;
                        width:20px;height:20px;
                        border-radius:50% 50% 50% 0;
                        transform:rotate(-45deg);
                        border:4px solid rgba(250,250,250,1);
                        background:#64ac5c;
                        color: #ffffff;
                        font: 14px sans-serif;
                        span {
                            display: block;
                            width: 100%;
                            height: 100%;
                            transform:rotate(45deg);
                            position: relative;left:-1px;top:1px;
                            text-align: center;

                        }
                    }
                    .contentx {
                        background: #f9fcf9;
                        border: #eef7ee 1px solid;
                        border-radius: 3px;
                        padding: 15px;
                        margin: 15px;
                        .title {
                            color: #333333;
                            padding: 2px;
                            font: 16px sans-serif;
                            font-weight: 600;
                        }
                        .remark {
                            font: 14px sans-serif;
                            color: #64ac5c;
                        }
                    }
                    .contentr {
                        padding: 5px 15px;
                        margin: 0 15px;
                        color: #64ac5c;
                        font: 16px sans-serif;
                    }
                }
            }
        }
        >ul.open {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
        }
    }
    >li.open {
        >div {
            background: #fcfcfc; color: #555555;
            >div.left{
                div {
                    font-weight: 400;
                }
                div.conte {
                    .oo {
                        border:4px solid rgba(100,172,92,.6);
                        background: #fcfcfc;
                    }
                    div.info {
                        span {
                            color: #999999;
                        }
                        span:nth-child(2) {
                            border-left: 1px solid #cccccc;
                            border-right: 1px solid #cccccc;
                        }
                    }
                    div.route {
                        .line {
                            border-right: 2px solid #cccccc;
                            border-bottom: 2px solid #cccccc;
                        }
                    }
                }
            }
            >div.right {
                span.open {
                    border-left: #cccccc solid 2px;
                    border-bottom: #cccccc solid 2px;
                    transform: rotate(-135deg);
                }
            }
        }
        
    }
}
@media screen and (max-width:800px) {
  ul.journey {
    padding:5px;
    >li {
        >ul {
            >li {
                >div.left {
                    width: 5rem;
                    //padding: 20px 5px 0 0;
                    font-size: 14px;
                }
            }
        }
    }
  }
}
</style>
<template>
    <ul class="journey">
        <li v-for="(day, key) in days" v-bind:key="key" :class="{'open':!day.open}">
            <div @click="day.open?day.open=false:day.open=true">
                <div class="left">
                    <div class="day" v-text="'第'+(key+1)+'天'"></div>
                    <div class="conte">
                        <div class="oo"></div>
                        <div class="route">
                            <span>{{ day.start }}</span>
                            <span class="line"></span>
                            <span>{{ day.end }}</span>
                        </div>
                        <div class="info">
                            <span v-text="day.distance">约300km</span>
                            <span>{{ day.drive_time }}</span>
                            <span v-text="day.scape">3个景点</span>
                        </div>
                    </div>
                </div>
                <div class="right"><span :class="{'open':!day.open}"></span></div>
            </div>
            <ul :class="{'open':!day.open}">
                <li v-for="(item, i) in day.children" v-bind:key="item.id">
                    <div class="left">
                        <div v-if="item.type=='stay'">{{ item.start.substr(11,5) }}</div>
                    </div>
                    <div class="right">
                        <div class="oo" v-if="item.type=='stay'">
                            <span>{{ day.children[0].type=='stay'?i/2+1:i/2+.5 }}</span>
                        </div>
                        <div class="contentx" v-if="item.type=='stay'">
                            <div class="title" v-text="'🍺 '+item.title"></div>
                            <div class="remark" v-text="item.remark"></div>
                            <!--div v-html="item"></div-->
                        </div>
                        <div class="contentr" v-else>
                            <span v-text="'🚘'"></span>
                            <span v-text="item.drive_time"></span>
                            <span v-text="item.distance"></span>
                            <!--div v-html="item"></div-->
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['days']
}
</script>