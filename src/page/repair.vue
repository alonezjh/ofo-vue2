<template>
    <div id="demoComponent" class="demo-component" style="background:#F6F6F6">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p>
          车辆报修
        </p>
        <img src="../../static/ic_notifications_none_black_24dp.png" style="height:20px;margin-right:10px; visibility:hidden;"/>
    	</header>
      <div class="row" style="background:#ffffff;display:flex;flex-direction:column;margin-top:50px;height:90vh">
        <div style="border-bottom:1px #eee solid;height:50px;display:flex;justify-content: space-between;align-items: center;">
          <input class="regular-radio" type="radio" id="1" value="1" v-model="picked">
          <label for="1">车把损坏</label>
          <span></span>
        </div>
        <div style="border-bottom:1px #eee solid;height:50px;display:flex;justify-content: space-between;align-items: center;">
          <input class="regular-radio" type="radio" id="2" value="2" v-model="picked">
          <label for="2">车胎没气</label>
          <span></span>
        </div>
        <div style="border-bottom:1px #eee solid;height:50px;display:flex;justify-content: space-between;align-items: center;">
          <input class="regular-radio" type="radio" id="3" value="3" v-model="picked">
          <label for="3">掉链子</label>
          <span></span>
        </div>
        <div style="border-bottom:1px #eee solid;height:50px;display:flex;justify-content: space-between;align-items: center;">
          <input class="regular-radio" type="radio" id="4" value="4" v-model="picked">
          <label for="4">刹车失灵</label>
          <span></span>
        </div>
        <div style="border-bottom:1px #eee solid;height:50px;display:flex;justify-content: space-between;align-items: center;">
          <input class="regular-radio" type="radio" id="5" value="5" v-model="picked">
          <label for="5">密码不对</label>
          <span></span>
        </div>
        <div style="border-bottom:1px #eee solid;height:50px;display:flex;justify-content: space-between;align-items: center;">
          <input class="regular-radio" type="radio" id="6" value="6" v-model="picked">
          <label for="6">上私锁</label>
          <span></span>
        </div>
        <div style="border-bottom:1px #eee solid;height:50px;display:flex;justify-content: space-between;align-items: center;">
          <input class="regular-radio" type="radio" id="7" value="7" v-model="picked">
          <label for="7">锁坏了</label>
          <span></span>
        </div>
        <div style="border-bottom:1px #eee solid;height:50px;display:flex;justify-content: space-between;align-items: center;">
          <input class="regular-radio" type="radio" id="8" value="8" v-model="picked">
          <label for="8">踏板损坏</label>
          <span></span>
        </div>
        <div style="border-bottom:1px #eee solid;height:50px;display:flex;justify-content: space-between;align-items: center;">
          <input class="regular-radio" type="radio" id="9" value="9" v-model="picked">
          <label for="9">车座损坏</label>
          <span></span>
        </div>
      </div>
      <div class="row" style="background:#f7f7f7;padding:10px 15px;margin-top:5vh;position:fixed;width:100%;left:0;bottom:0">
        <button class="submit" :class="{active: canSubmit}">车辆报修</button>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      carNum: '',
      remark: '',
      picked: '',
      canSubmit:false
		}
  },
  methods: {
    back() {
      window.history.back()
    }
  }
};
</script>

<style lang="scss" scoped>

input,button,select,textarea{outline:none;}
button {
border:1px #ccc solid;border-radius:4px;background:#ffffff;color: #584F30;width:50%;padding:6px 15px;
 &.active {
   background:#ffd300;
   border:1px #ffd300 solid;
 }
}

label {
  font-size: .9rem;margin-left: -35px;
}

/* RADIO */

.regular-radio {
	display: none;
}

.regular-radio {
	-webkit-appearance: none;
	background-color: #fafafa;
	border: 1px solid #cacece;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
	padding: 9px;
	border-radius: 50px;
	display: inline-block;
  margin-left: 15px;
	position: relative;
}

.regular-radio:checked:after {
	content: ' ';
	width: 12px;
	height: 12px;
	border-radius: 50px;
	position: absolute;
	top: 3px;
	background: #99a1a7;
	box-shadow: inset 0px 0px 10px rgba(0,0,0,0.3);
	text-shadow: 0px;
	left: 3px;
	font-size: 32px;
}

.regular-radio:checked  {
	background-color: #e9ecee;
	color: #99a1a7;
	border: 1px solid #adb8c0;
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1), inset 0px 0px 10px rgba(0,0,0,0.1);
}

.regular-radio:active, .regular-radio:checked:active {
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
}


.submit {
  width:100%; background:#ffd300;

   border:1px #ffd300 solid;color: #584F30;height:40px;font-size:1rem
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
