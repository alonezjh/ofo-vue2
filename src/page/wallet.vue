<template>
    <div style="background:#f9f9f9">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p style="margin-left:10px">
          我的钱包
        </p>
        <p style="font-size:.9rem;margin-right:10px">
          交易明细
        </p>
    	</header>
      <div style="margin-top:50px;">
        <div style="display:flex;align-items:center;flex-direction:column;padding:15px 15px;">
          <p style="font-size:.9rem;color:#584F30;margin-top:0px">
            我的余额（元）
          </p>
          <p style="font-size:3rem;font-weight:bold;color:#584F30;line-height:10px;margin-top:20px">
            999
          </p>
          <p style="color:#333;font-size:.5rem;border-radius:20px;padding:6px 20px;border:1px #ccc solid;line-height:10px;margin-top:-10px">
            余额说明
          </p>
        </div>
        <div style="padding:12px 15px;background:#f0f0f0">
          <button class="submit" style="color:#000">充值</button>
        </div>
        <router-link to="/coupon" style="text-decoration:none;color:#000"><div style="background:#ffffff;display:flex;justify-content: space-between;align-items: center;border-bottom:1px #f9f9f9 solid">
          <p style="margin-left:15px;font-size:.9rem">
            我的用车券
          </p>
          <div style="margin-right:15px;display:flex;justify-content: space-between;
          align-items: center;"><span style="font-size:.9rem;color:#666;margin-right:5px">3 张</span><img style="width:8px" src="../../static/right_arrow.png" /></div>
        </div>
        </router-link>
        <div style="background:#ffffff;display:flex;justify-content: space-between;align-items: center;border-bottom:1px #f9f9f9 solid">
          <p style="margin-left:15px;font-size:.9rem">
            我的押金
          </p>
          <div style="margin-right:15px;display:flex;justify-content: space-between;
          align-items: center;"><span style="font-size:.9rem;color:#FDD42C;margin-right:5px">99元，押金退款</span><img style="width:8px" src="../../static/right_arrow.png" /></div>
        </div>
        <div style="background:#ffffff;display:flex;justify-content: space-between;
        align-items: center;">
          <p style="margin-left:15px;font-size:.9rem">
            我的红包
          </p>
          <div style="margin-right:15px;display:flex;justify-content: space-between;
          align-items: center;"><span style="font-size:.9rem;color:#FDD42C;margin-right:5px">红包区活动</span><img style="width:20px;margin-right:10px" src="../../static/red_package.png" /><img style="width:8px" src="../../static/right_arrow.png" /></div>
        </div>
        <div style="height:20px;background:#f9f9f9">

        </div>
        <router-link to="/code" style="text-decoration:none;color:#000"><div style="background:#ffffff;display:flex;justify-content: space-between;
        align-items: center;">
          <p style="margin-left:15px;font-size:.9rem">
            兑换邀请码
          </p>
          <div style="margin-right:15px;display:flex;justify-content: space-between;
          align-items: center;"><span style="font-size:.9rem;color:#666;margin-right:5px"></span><img style="width:8px" src="../../static/right_arrow.png" /></div>
        </div>
        </router-link>
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
