<template>
    <div style="background:#f9f9f9">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p>
          我的用车券
        </p>
        <img src="../../static/ic_notifications_none_black_24dp.png" style="height:20px;margin-right:10px; visibility:hidden;"/>
    	</header>
      <div style="margin-top:50px;padding:15px 15px;">
        <div class="stamp stamp01">
          <div class="par">
            <p style="color:#000">ofo共享单车  ·  折扣券</p>
            <p style="font-size:.6rem;color:#333;margin-top:5px">有效期至2017-06-15  23:59:59</p>
            <img src="../../static/packet_bike.png" style="width:40%" />
          </div>
          <div class="copy">5.6<span style="font-size:1.2rem">折</span></div>
          <i></i>
        </div>
        <div class="stamp stamp01">
          <div class="par">
            <p style="color:#000">ofo共享单车  ·  折扣券</p>
            <p style="font-size:.6rem;color:#333;margin-top:5px">有效期至2017-07-20  23:59:59</p>
            <img src="../../static/packet_bike.png" style="width:40%" />
          </div>
          <div class="copy">7.8<span style="font-size:1.2rem">折</span></div>
          <i></i>
        </div>
        <div class="stamp stamp01">
          <div class="par">
            <p style="color:#000">ofo共享单车  ·  折扣券</p>
            <p style="font-size:.6rem;color:#333;margin-top:5px">有效期至2017-05-15  23:59:59</p>
            <img src="../../static/packet_bike.png" style="width:40%" />
          </div>
          <div class="copy">3.9<span style="font-size:1.2rem">折</span></div>
          <i></i>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      isActive: false,
      isShowToast: false,
      isShowIcon: true,
      msg: '',
      lockNums: [],
      duration: 0,
		}
  },
  created() {

  },
  methods: {
    back() {
      window.history.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.stamp * {
	padding: 0;
	margin: 0;
	list-style:none;
	font-family:"Microsoft YaHei", 'Source Code Pro', Menlo, Consolas, Monaco, monospace;
}
.stamp {
	width: 100%;
	height: 110px;
	padding: 0 10px;
	margin-bottom: 15px;
	position: relative;
	overflow: hidden;
}
.stamp:before {
	content: '';
	position: absolute;
	top:0;
	bottom:0;
	left:10px;
	right:10px;
	z-index: -1;
}
.stamp i {
	position: absolute;
	left: 20%;
	top: 45px;
	height: 190px;
	width: 390px;
	background-color: rgba(255, 255, 255, .15);
	transform: rotate(-30deg);
}
.stamp .par {
	float: left;
	padding: 16px 15px;
	width: 70%;
	border-right:2px dashed rgba(255, 255, 255, .3);
	text-align: left;
}
.stamp .copy {
	display: inline-block;
	vertical-align: text-bottom;
	font-size: 30px;
  font-family: sans-serif;
	color:rgb(10,10,10);
	text-align: center;
	line-height: initial;
  margin-left: 20px;
  margin-top: 35px;
}
.stamp01 {
	background: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 5px, #FDD42C 5px);
	background-size: 15px 15px;
	background-position: 9px 3px;
}
.stamp01:before {
	background-color:#FDD42C;
}
.stamp02 {
	background: radial-gradient(transparent 0, transparent 5px, #D24161 5px);
	background-size: 15px 15px;
	background-position: 9px 3px;
}
.stamp02:before {
	background-color:#D24161;
}
.stamp03 {
	background: radial-gradient(transparent 0, transparent 5px, #7EAB1E 5px);
	background-size: 15px 15px;
	background-position: 9px 3px;
}
.stamp03:before {
	background-color:#7EAB1E;
}
  .header {
    display: -webkit-flex;
           display: flex;
          width: 100%;
           justify-content: space-between;
           align-items: center;
           height: 50px;
           box-sizing: border-box;
           background-color: #fff;
           position: fixed;
           z-index: 9999;
           font-family: fantasy;
           box-shadow: 0 0px 5px #888;
  }

  @media screen and (min-width: 320px) {
    .avatar {
      width:50px;height:50px;
    }
  }

</style>
