<template>
    <div style="background:#f9f9f9">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p>
          个人信息
        </p>
        <img src="../../static/ic_notifications_none_black_24dp.png" style="height:20px;margin-right:10px; visibility:hidden;"/>
    	</header>
      <div style="margin-top:50px">
        <div style="height:25%">
          <div style="z-index:1;position: absolute;left:0;top:0;-webkit-filter:blur(10px);opacity:0.9;width:100%;height:25%;background:url(../../static/avatar.png) no-repeat center;background-size:80%">
          </div>
        </div>
        <div style="position: absolute;width:100%;padding: 20px 0;z-index:9999;height:25%;display:flex;flex-direction:column;justify-content:center;align-items:center;background:rgba(10,10,10,.3)">
          <img ciass="avatar" style="width:70px" src="../../static/avatar.png">
          <p style="line-height:10px;color:#FFFFFF;text-shadow:1px 1px 1px #000">
            孤独行者
          </p>
          <div style="background:#ffd500;border-radius:50px;display:flex;padding:12px 5px;justify-content:center;align-items:center;width:30%;vertical-align:middle">
            <router-link to="/credit" style="text-decoration:none;color:#000"><span style="height:18px;font-size:.7rem">信用分：520 ></span></router-link>
          </div>
        </div>
        <div style="margin-top:44%;background:#ffffff">
          <div style="display:flex;justify-content: space-between;align-items: center;border-bottom:1px #e7e7e7 solid">
            <p style="margin-left:15px;font-size:.9rem">
              姓名
            </p>
            <div style="margin-right:15px;display:flex;justify-content: space-between;
            align-items: center;"><span style="font-size:.9rem;color:#666;margin-right:5px">孤独行者</span><img style="width:8px" src="../../static/right_arrow.png" /></div>
          </div>
          <div style="display:flex;justify-content: space-between;align-items: center;border-bottom:1px #e7e7e7 solid">
            <p style="margin-left:15px;font-size:.9rem">
              性别
            </p>
            <div style="margin-right:15px;display:flex;justify-content: space-between;
            align-items: center;"><span style="font-size:.9rem;color:#666;margin-right:5px">男</span><img style="width:8px" src="../../static/right_arrow.png" /></div>
          </div>
          <div style="display:flex;justify-content: space-between;
          align-items: center;">
            <p style="margin-left:15px;font-size:.9rem">
              生日
            </p>
            <div style="margin-right:15px;display:flex;justify-content: space-between;
            align-items: center;"><span style="font-size:.9rem;color:#666;margin-right:5px">1994年1月9日</span><img style="width:8px" src="../../static/right_arrow.png" /></div>
          </div>
          <div style="height:20px;background:#f9f9f9">

          </div>
          <div style="display:flex;justify-content: space-between;border-bottom:1px #e7e7e7 solid
          align-items: center;">
            <p style="margin-left:15px;font-size:.9rem">
              绑定手机号
            </p>
            <div style="margin-right:15px;display:flex;justify-content: space-between;
            align-items: center;"><span style="font-size:.9rem;color:#666;margin-right:5px">15908199450</span><img style="width:8px" src="../../static/right_arrow.png" /></div>
          </div>
          <div style="display:flex;justify-content: space-between;
          align-items: center;">
            <p style="margin-left:15px;font-size:.9rem">
              ofo称号
            </p>
            <div style="margin-right:15px;display:flex;justify-content: space-between;
            align-items: center;"><span style="font-size:.9rem;color:#666;margin-right:5px">认证用户</span><img style="width:8px" src="../../static/right_arrow.png" /></div>
          </div>
          <div style="height:20px;background:#f9f9f9">

          </div>
          <div class="row" style="padding:0 15px;padding:12px 15px">
            <button class="submit">退出登录</button>
          </div>
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
input,button,select,textarea{outline:none;}
button {
border:1px #ccc solid;border-radius:4px;background:#ffffff;color: #584F30;width:50%;padding:6px 15px;
}

.submit {
  width:100%;   background:#ffd300;
     border:1px #ffd300 solid;color: #584F30;height:35px;font-size:.9rem
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
