<template>
    <div style="background:#F6F6F6">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p>
          如何开锁
        </p>
        <img src="../../static/ic_notifications_none_black_24dp.png" style="height:20px;margin-right:10px; visibility:hidden;"/>
    	</header>
      <div class="wraper" id="old">
        <p class="title">1.拔轮锁开锁</p>
        <img src="../../static/img1.jpg" />
        <p>1.对准黄色指示线  </p>
        <p>2.从左至右输入四位密码</p>
        <p>3.按下白色按钮, 即可开锁成功</p>
        <p class="line"></p>
        <br />
        <p class="title">2.键盘锁开锁</p>
        <img src="../../static/img2.jpg" />
        <p>1.按下车锁背后的复位键, 使密码复位</p>
        <p>2.输入四位数字密码</p>
        <p>3.按下密码盘下方的黑色开锁按钮, 即可成功开锁</p>
        <p class="line"></p><br />
          <p class="title">3.智能锁开锁</p>
          <img src="../../static/img3.png" />
          <p>1.输入四位数字密码；</p>
          <p>2.听到密码正确提示音后，锁将自动打开。</p>
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
      timer: 120,       //默认倒数120秒
                stop : false,   //默认是停止的，但界面加载之后会变成false
                Interval:null  //setInterval的对象
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


        .title{ font-size: 15px;padding-top:10px;line-height: 15px; color:#000;}
        .line{border-bottom: #d8d8d8 solid 1px;height: 18px;margin-bottom: 10px;}
        .wraper{
          padding: 10px 15px;
          margin-top: 50px;
img { width: 100%; padding: 10px 0 5px;}
        p{ padding: 0; margin: 0; font-size: 13px; color: #333; line-height:20px }}

	.demo-component {

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

</style>
