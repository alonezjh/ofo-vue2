<template>
    <div style="background:#f9f9f9">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p>
          我的信用分
        </p>
        <img src="../../static/ic_notifications_none_black_24dp.png" style="height:20px;margin-right:10px; visibility:hidden;"/>
    	</header>
      <div style="margin-top:50px">
        <div style="background:#f2f2f2;display:flex;justify-content: center;align-items: center;flex-direction: column;height:30%">
            <img src="../../static/top_bg.png" style="width:50%"/>
            <p style="color:#ffd300;font-size:3rem;font-weight:bold;margin-top:-33%">
              520
            </p>
            <p style="color:#ffd300;font-size:.7rem;margin-top:-10%;line-height:10px">
              评估于2017.05.08
            </p>
            <p style="color:#333;font-size:.5rem;border-radius:20px;padding:4px 15px;border:1px #ffd300 solid;margin-top:8vh">
              信用分规则
            </p>

        </div>
        <div>
          <p style="border-bottom:1px #ccc solid;color:#000;font-weight:bold;font-size:.8rem;padding:10px 10px ">
            信用分变更记录
          </p>
          <div style="height:8vh;display:flex;justify-content: space-between;align-items: center;border-bottom:1px #e7e7e7 solid;margin:10px">
            <p>
              <span style="font-size:.9rem">完成骑行</span><br><span style="line-height:20px;color:#666;font-size:.8rem">2017-05-08</span>
            </p>
            <span style="font-size:.9rem;color:#111;margin-right:5px">信用分+1</span>
          </div>
          <div style="height:8vh;display:flex;justify-content: space-between;align-items: center;border-bottom:1px #e7e7e7 solid;margin:10px">
            <p>
              <span style="font-size:.9rem">完成骑行</span><br><span style="line-height:20px;color:#666;font-size:.8rem">2017-05-04</span>
            </p>
            <span style="font-size:.9rem;color:#111;margin-right:5px">信用分+1</span>
          </div>
          <div style="height:8vh;display:flex;justify-content: space-between;align-items: center;border-bottom:1px #e7e7e7 solid;margin:10px">
            <p>
              <span style="font-size:.9rem">完成骑行</span><br><span style="line-height:20px;color:#666;font-size:.8rem">2017-05-03</span>
            </p>
            <span style="font-size:.9rem;color:#111;margin-right:5px">信用分+1</span>
          </div>
          <div style="height:8vh;display:flex;justify-content: space-between;align-items: center;border-bottom:1px #e7e7e7 solid;margin:10px">
            <p>
              <span style="font-size:.9rem">完成骑行</span><br><span style="line-height:20px;color:#666;font-size:.8rem">2017-05-02</span>
            </p>
            <span style="font-size:.9rem;color:#111;margin-right:5px">信用分+1</span>
          </div>
          <div style="height:8vh;display:flex;justify-content: space-between;align-items: center;border-bottom:1px #e7e7e7 solid;margin:10px">
            <p>
              <span style="font-size:.9rem">完成骑行</span><br><span style="line-height:20px;color:#666;font-size:.8rem">2017-05-01</span>
            </p>
            <span style="font-size:.9rem;color:#111;margin-right:5px">信用分+1</span>
          </div>
          <div style="height:8vh;display:flex;justify-content: space-between;align-items: center;border-bottom:1px #e7e7e7 solid;margin:10px">
            <p>
              <span style="font-size:.9rem">完成骑行</span><br><span style="line-height:20px;color:#666;font-size:.8rem">2017-04-30</span>
            </p>
            <span style="font-size:.9rem;color:#111;margin-right:5px">信用分+1</span>
          </div>
          <div style="height:8vh;display:flex;justify-content: space-between;align-items: center;border-bottom:1px #e7e7e7 solid;margin:10px">
            <p>
              <span style="font-size:.9rem">完成骑行</span><br><span style="line-height:20px;color:#666;font-size:.8rem">2017-04-29</span>
            </p>
            <span style="font-size:.9rem;color:#111;margin-right:5px">信用分+1</span>
          </div>
          <div style="height:8vh;display:flex;justify-content: space-between;align-items: center;border-bottom:1px #e7e7e7 solid;margin:10px">
            <p>
              <span style="font-size:.9rem">完成骑行</span><br><span style="line-height:20px;color:#666;font-size:.8rem">2017-04-28</span>
            </p>
            <span style="font-size:.9rem;color:#111;margin-right:5px">信用分+1</span>
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
