<template>
    <div id="demoComponent" class="demo-component" style="background:#F6F6F6">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p>
          吐槽
        </p>
        <img src="../../static/ic_notifications_none_black_24dp.png" style="height:20px;margin-right:10px; visibility:hidden;"/>
    	</header>
      <div class="row" style="margin-top:50px">
        <div style="border-bottom:1px #eee solid;display: flex;justify-content: start;align-items: center;font-size:.8rem;background:#F6F6F6;padding: 0 15px">
          <img src="../../static/ic_notifications_none_black_24dp.png" style="height:12px;margin-right:10px;"/>
          <p style="font-size:.7rem">
            请选择故障类型
          </p>
        </div>
        <div style="background:#ffffff;padding:15px;">
          <div class="row">
            <div class="col" style="display: flex;justify-content: center;align-items: center;">
              <button @click="sel(1)" :class="{active: q1}">私锁私用</button>
              <span style="width:4vw"></span>
              <button @click="sel(2)" :class="{active: q2}">车牌缺损</button>
            </div>
            <div class="col" style="display: flex;justify-content: center;align-items: center;margin-top:15px;">
              <button @click="sel(3)" :class="{active: q3}">轮胎坏了</button>
              <span style="width:4vw"></span>
              <button @click="sel(4)" :class="{active: q4}">车锁坏了</button>
            </div>
            <div class="col" style="display: flex;justify-content: center;align-items: center;margin-top:15px;">
              <button @click="sel(5)" :class="{active: q5}">违规乱停</button>
              <span style="width:4vw"></span>
              <button @click="sel(6)" :class="{active: q6}">密码不对</button>
            </div>
            <div class="col" style="display: flex;justify-content: center;align-items: center;margin-top:15px;">
              <button @click="sel(7)" :class="{active: q7}">刹车坏了</button>
              <span style="width:4vw"></span>
              <button @click="sel(8)" :class="{active: q8}">其他</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div style="border-bottom:1px #eee solid;border-top:1px #eee solid;display: flex;justify-content: start;align-items: center;font-size:.8rem;background:#F6F6F6;padding: 0 15px">
          <img src="../../static/ic_notifications_none_black_24dp.png" style="height:12px;margin-right:10px;"/>
          <p style="font-size:.7rem">
            拍摄单车周围环境，便于维修师傅找车
          </p>
        </div>
        <div class="row" style="background:#ffffff;padding:15px;border-bottom:1px #eee solid;">
          <div @click="show()" style="width:70px;height:70px;background-color:#F6F6F6;border:1px #ccc dashed;display: flex;justify-content: center;align-items: center;">
            <img src="../../static/c.svg" style="height:30px"/>
          </div>

        </div>
      </div>
      <div class="row" style="margin-top:20px;background:#ffffff;">
        <div class="col" style="width:100%;padding:20px 15px 10px;border-top:1px #eee solid;">
          <input v-model="carNum" placeholder="车牌号（车牌损坏不用填）" style="background:#ffffff;border:none;width:100%;font-size:.9rem">
        </div>
        <div class="col" style="padding:0 15px;">
          <hr size=1 color="#eee"/>
        </div>
        <div class="col" style="background:#ffffff;padding:10px 15px 20px;border-bottom:1px #eee solid;">
          <input v-model="remark" placeholder="备注" style="background:#ffffff;border:none;width:100%;font-size:.9rem">
        </div>
      </div>
      <div class="row" style="padding:0 15px;margin-top:5vh;margin-bottom:5vh">
        <button class="submit" :class="{active: canSubmit}">提交</button>
      </div>

      <div @click="close()" v-show="showModal" style="width:100%;height:100%;position:fixed;left:0;top:0;background-color:rgba(10,10,10,.7)">
        <div :class="[s ? 'moveFromBottom' : 'moveToBottom']" style="display:flex;flex-direction:column;background:#FFFFFF;position:fixed;left:0;bottom:0;width:100%">
          <div @click.stop="camera()" style="display: flex;justify-content: start;align-items: center;font-size:.8rem;background:#FFFFFF;padding: 0 15px">
            <img src="../../static/ic_photo_camera_black_24dp.png" style="height:25px;margin-right:15px;"/>
            <p style="font-size:.8rem">
              拍照
            </p>
          </div>
          <div @click.stop="album()" style="display: flex;justify-content: start;align-items: center;font-size:.8rem;background:#FFFFFF;padding: 0 15px">
            <img src="../../static/ic_photo_library_black_24dp.png" style="height:25px;margin-right:15px;"/>
            <p style="font-size:.8rem">
              相册
            </p>
          </div>
        </div>
      </div>
      <toast :isShowIcon=false :msg="msg" :isShowToast="isShowToast"></toast>
    </div>
</template>

<script>
export default {
  data() {
    return {
      carNum: '',
      remark: '',
      isShowToast: false,
      msg: '',
      checkedNames: [],
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      canSubmit:true,
      showModal:false,
      s:false
		}
  },
  methods: {
    back() {
      window.history.back()
    },
    camera() {
      this.isShowToast = true
      this.msg = 'Sorry，暂不支持拍照'
      setTimeout(() => {
  			this.isShowToast = false
  		}, 1200)
    },
    album() {
      this.isShowToast = true
      this.msg = 'Sorry，暂不支持相册选取'
      setTimeout(() => {
  			this.isShowToast = false
  		}, 1200)
    },
    show() {
      this.showModal = true
      this.s = true
    },
    close() {
      this.s = false
      setTimeout(() => {
  			this.showModal = false
  		}, 400)
    },
    sel(index) {
      switch (index) {
        case 1:
          this.q1 = !this.q1
        break;
        case 2:
          this.q2 = !this.q2
        break;
        case 3:
          this.q3 = !this.q3
        break;
        case 4:
          this.q4 = !this.q4
        break;
        case 5:
          this.q5 = !this.q5
        break;
        case 6:
          this.q6 = !this.q6
        break;
        case 7:
          this.q7 = !this.q7
        break;
        case 8:
          this.q8 = !this.q8
        break;
        default:
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.moveToBottom {
	-webkit-animation: moveToBottom .6s ease both;
	-moz-animation: moveToBottom .6s ease both;
	animation: moveToBottom .6s ease both;
}

.moveFromBottom {
	-webkit-animation: moveFromBottom .6s ease both;
	-moz-animation: moveFromBottom .6s ease both;
	animation: moveFromBottom .6s ease both;
}

.fade {
	-webkit-animation: fade .7s ease both;
	-moz-animation: fade .7s ease both;
	animation: fade .7s ease both;
}

/* fade */

@-webkit-keyframes fade {
	to { opacity: 0.3; }
}
@-moz-keyframes fade {
	to { opacity: 0.3; }
}
@keyframes fade {
	to { opacity: 0.3; }
}


@-webkit-keyframes moveToBottom {
	to { -webkit-transform: translateY(100%); }
}
@-moz-keyframes moveToBottom {
	to { -moz-transform: translateY(100%); }
}
@keyframes moveToBottom {
	to { transform: translateY(100%); }
}
@-webkit-keyframes moveFromBottom {
	from { -webkit-transform: translateY(100%); }
}
@-moz-keyframes moveFromBottom {
	from { -moz-transform: translateY(100%); }
}
@keyframes moveFromBottom {
	from { transform: translateY(100%); }
}



input,button,select,textarea{outline:none;}
button {
border:1px #ccc solid;border-radius:4px;background:#ffffff;color: #584F30;width:50%;padding:6px 15px;
 &.active {
   background:#ffd300;
   border:1px #ffd300 solid;
 }
}

.submit {
  width:100%;background-color:#DCDCDC;border:1px #DCDCDC solid;color: #584F30;height:40px;font-size:1rem
}

  .header {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width:100%;
    box-sizing: border-box;
    background-color: #fff;
    position: fixed;
    z-index: 9998;
    box-shadow: 0 0px 5px #888;
  }
  .header::after {
              content: '';
              display: block;
              position: absolute;
              border: 1px solid #ccc;
              left: 0;
              right: 0;
              bottom: 0;
              transform-origin: 100% 100%;
              transform: scaleY(.5);
          }
	.footer {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 10px;
		height: 50px;
		display: -webkit-flex;
	         display: flex;
	         justify-content: space-between;
	         align-items: center;

	}


  @media screen and (min-width: 640px) {
      .app-view {
          width: 640px;
          left: 50%;
          transform: translate(-50%,0);
      }
      .aside ul {
          width: 350px;
      }
  }
</style>
