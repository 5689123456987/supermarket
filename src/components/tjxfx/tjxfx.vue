<template>
  <transition name='fade'>
    <div class="wrap" ref="wrap" @mousedown="mousedown">
      <h3 class="hs">
        <span style="color: #FFFFFF;font-size: 16px">天际线分析</span>
        <i class="el-icon-close colseToolDetailIcon" @click="cancel"></i>
      </h3>
      <div class="_tfieldset">
        <fieldset>
          <legend>天际线</legend>
          <div class="tjxpanitem" :class="labelPosition">
            <div class="item">
              <span>颜色</span>
              <el-input type="color" v-model="tjxcolorselect"></el-input>
            </div>
            <div class="item">
              <span>分析半径</span>
              <input type="range" min="0" max="5000" step="100" ref="analyssisrange"
                     v-model="tjxradius" style="width: 65px;margin: 10px 10px">
              <input type="number" class="showNumber" style="width:51px;" size="5"
                     v-model="tjxradius">
            </div>
            <div class="item">
              <span>文件名</span>
              <el-input type="text" placeholder="null" class="profileselect"></el-input>
              <!--                <input type="text" placeholder="null"></input>-->
            </div>
            <div class="_ibutton">
              <el-button size="mini">提取天际线</el-button>
              <el-button size="mini">二维天际线</el-button>
            </div>
            <div class="_obutton">
              <el-button size="mini">导入天际线</el-button>
              <el-button size="mini">导出天际线</el-button>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>限高体</legend>
          <div class="xztpanitem" :class="labelPosition">
            <div class="item">
              <span>颜色</span>
              <el-input type="color" v-model="xgtcolorselect" @change="xgtcolorchange"></el-input>
            </div>
            <div class="item">
              <span>分析半径</span>
              <input type="range" min="0" max="5000" step="100" ref="xztanalysisrange"
                     v-model="xgtradius" style="width: 65px;margin: 10px 10px"
                     @change="xgtradiuschange">
              <input type="number" class="showNumber" style="width:51px;" size="5"
                     v-model="xgtradius">
            </div>
            <div class="item">
              <span>文件名</span>
              <el-input type="text" placeholder="null" class="profileselect"></el-input>
              <!--                <input type="text" placeholder="null"></input>-->
            </div>
            <div class="_ibutton">
              <el-button size="mini">绘制限高体</el-button>
              <el-button size="mini">清除限高体</el-button>
            </div>
            <div class="_obutton">
              <el-button size="mini">导入限高体</el-button>
              <el-button size="mini">导出限高体</el-button>
            </div>
          </div>
        </fieldset>
        <div class="cancel_button">
          <el-button style="width: 90px;padding-right: 20px">重置视角</el-button>
          <el-button style="width:30%">销毁</el-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "tjxfx",
  data() {
    return {
      //天际线
      labelPosition:'left',
      tjxradius:0,//半径
      tjxcolorselect:'#FF0000',//颜色
      //现状体
      xgtradius:0,
      xgtcolorselect:'#F4850C',
    }
  },
  methods:{
    // changevalue () {
    //   this.radius = this.$refs('analysisrange').value
    // },
    xgtcolorchange () {
      console.log(this.xgtcolorselect);//限高体颜色选择
    },
    xgtradiuschange () {
      console.log(this.xgtradius);//限高体半径选择
    },
    mousedown(event) {
      // 组件拖动功能要求 组件需要有h标题
      let div1 = event.currentTarget;
      if (event.target !== div1.childNodes[0]) {
        if (event.target !== div1.childNodes[0].childNodes[0]) {
          return;
        }
      }
      div1.style.cursor = 'move';
      let distanceX = event.clientX - div1.offsetLeft;
      let distanceY = event.clientY - div1.offsetTop;
      document.onmousemove = function (e) {
        div1.style.left = e.clientX - distanceX + 'px';
        div1.style.top = e.clientY - distanceY + 'px';
      };
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
        document.mousedown = null;
        div1.style.cursor = 'default';
      };
    },
    cancel(){
      this.$store.dispatch('kqwebmapStore/setDxymfxState', false);
    },

  }
}
</script>

<style scoped>
.wrap{
  /*padding: 10px;*/
  background-color: #ffffff;
  position: fixed;
  z-index: 1002;
  min-width: 280px;
  -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  left: 40%;
  top: 14%;
  border-radius: 4px;
  cursor: pointer;
}
.wrap .hs{
  height: 30px;
  background-color: #3385ff;
  margin-top: 0px;
  padding: 5px;
}
._tfieldset{
  padding: 10px;
}
._tfieldset fieldset{
  margin-top: 4px;
  height: 210px;
  /*border: 1px solid rgb(109, 106, 106);*/
  padding: 10px;
}
.hs{
  border-bottom: 1px solid rgb(109, 106, 106);
  margin-bottom: 0px;
}
.cancel_button{
  margin-top: 5px;
  text-align: center;
}

.tjxpanitem span{
  margin-right: 10px;
  width: 57px;
  display: inline-block;
  font-size: 13px;
}
.tjxpanitem .item{
  margin: 2px;
  display: flex;
  align-items: center;
}
.tjxpanitem ::v-deep .el-input__inner{
  height: 25px;
  width: 150px;
}
.tjxpanitem ::v-deep .el-button--mini, .el-button--mini.is-round{
  margin-top: 10px;
  width: 40%;
  margin-right: 10px;
}
.profileselect ::v-deep .el-input__inner{
  border: none;
}
.xztpanitem span{
  margin-right: 10px;
  width: 57px;
  display: inline-block;
  font-size: 13px;
}
.xztpanitem .item{
  margin: 2px;
  display: flex;
  align-items: center;
}
.xztpanitem ::v-deep .el-input__inner{
  height: 25px;
  width: 150px;
}
.xztpanitem ::v-deep .el-button--mini, .el-button--mini.is-round{
  margin-top: 10px;
  width: 40%;
  margin-right: 10px;
}
.colseToolDetailIcon {
  position: absolute;
  top: 11px;
  right: 7px;
  font-size: 20px;
  line-height: 0.7em;
  cursor: pointer;
  color: #FFFFFF;
}
/*.showNumber ::v-deep element.style{*/
/*  width: 50px;*/
/*}*/
</style>