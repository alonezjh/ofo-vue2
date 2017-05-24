<template>
    <div style="background:#f9f9f9">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p>
          我的行程
        </p>
        <img src="../../static/ic_notifications_none_black_24dp.png" style="height:20px;margin-right:10px; visibility:hidden;"/>
    	</header>
      <div style="margin-top:50px;padding:15px 15px;">
        <div style="display:flex;justify-content: space-between;align-items: center;background:#ffffff;border-radius:5px">
          <div style="width:60%;">
            <div style="width:100%;display:flex;align-items:center;padding-left:10px;margin-top:15px">
              <img style="width:15px" src="../../static/date.png" />
              <span style="font-size:.8rem;margin-left:10px">2017-05-08  07:04:59</span>
            </div>
            <div style="width:100%;padding-left:10px;display:flex;justify-content: space-between;align-items: center;">
              <p><span style="font-size:.8rem;color:#666">行程消费</span><span style="color:#ffd300;font-size:1.2rem">￥1.0</span></p>
              <p><span style="font-size:.8rem;color:#666">车牌号：</span><span style="font-size:.8rem;color:#666">3994033</span></p>
            </div>
          </div>
          <div style="width:20%;display:flex;justify-content:center;align-items: center;">
            <img src="../../static/right_arrow.png" />
          </div>
        </div>
        <div style="display:flex;justify-content: space-between;align-items: center;background:#ffffff;border-radius:5px;margin-top:15px;">
          <div style="width:60%;">
            <div style="width:100%;display:flex;align-items:center;padding-left:10px;margin-top:15px">
              <img style="width:15px" src="../../static/date.png" />
              <span style="font-size:.8rem;margin-left:10px">2017-05-04  08:48:40</span>
            </div>
            <div style="width:100%;padding-left:10px;display:flex;justify-content: space-between;align-items: center;">
              <p><span style="font-size:.8rem;color:#666">行程消费</span><span style="color:#ffd300;font-size:1.2rem">￥0.0</span></p>
              <p><span style="font-size:.8rem;color:#666">车牌号：</span><span style="font-size:.8rem;color:#666">3825698</span></p>
            </div>
          </div>
          <div style="width:20%;display:flex;justify-content:center;align-items: center;">
            <img src="../../static/right_arrow.png" />
          </div>
        </div>
        <div style="display:flex;justify-content: space-between;align-items: center;background:#ffffff;border-radius:5px;margin-top:15px;">
          <div style="width:60%;">
            <div style="width:100%;display:flex;align-items:center;padding-left:10px;margin-top:15px">
              <img style="width:15px" src="../../static/date.png" />
              <span style="font-size:.8rem;margin-left:10px">2017-05-03  18:07:41</span>
            </div>
            <div style="width:100%;padding-left:10px;display:flex;justify-content: space-between;align-items: center;">
              <p><span style="font-size:.8rem;color:#666">行程消费</span><span style="color:#ffd300;font-size:1.2rem">￥0.0</span></p>
              <p><span style="font-size:.8rem;color:#666">车牌号：</span><span style="font-size:.8rem;color:#666">4552667</span></p>
            </div>
          </div>
          <div style="width:20%;display:flex;justify-content:center;align-items: center;">
            <img src="../../static/right_arrow.png" />
          </div>
        </div>
        <div style="display:flex;justify-content: space-between;align-items: center;background:#ffffff;border-radius:5px;margin-top:15px;">
          <div style="width:60%;">
            <div style="width:100%;display:flex;align-items:center;padding-left:10px;margin-top:15px">
              <img style="width:15px" src="../../static/date.png" />
              <span style="font-size:.8rem;margin-left:10px">2017-05-03  14:05:13</span>
            </div>
            <div style="width:100%;padding-left:10px;display:flex;justify-content: space-between;align-items: center;">
              <p><span style="font-size:.8rem;color:#666">行程消费</span><span style="color:#ffd300;font-size:1.2rem">￥0.0</span></p>
              <p><span style="font-size:.8rem;color:#666">车牌号：</span><span style="font-size:.8rem;color:#666">4895213</span></p>
            </div>
          </div>
          <div style="width:20%;display:flex;justify-content:center;align-items: center;">
            <img src="../../static/right_arrow.png" />
          </div>
        </div>
        <div style="display:flex;justify-content: space-between;align-items: center;background:#ffffff;border-radius:5px;margin-top:15px;">
          <div style="width:60%;">
            <div style="width:100%;display:flex;align-items:center;padding-left:10px;margin-top:15px">
              <img style="width:15px" src="../../static/date.png" />
              <span style="font-size:.8rem;margin-left:10px">2017-05-01  14:23:34</span>
            </div>
            <div style="width:100%;padding-left:10px;display:flex;justify-content: space-between;align-items: center;">
              <p><span style="font-size:.8rem;color:#666">行程消费</span><span style="color:#ffd300;font-size:1.2rem">￥0.5</span></p>
              <p><span style="font-size:.8rem;color:#666">车牌号：</span><span style="font-size:.8rem;color:#666">2209121</span></p>
            </div>
          </div>
          <div style="width:20%;display:flex;justify-content:center;align-items: center;">
            <img src="../../static/right_arrow.png" />
          </div>
        </div>
        <div style="display:flex;justify-content: space-between;align-items: center;background:#ffffff;border-radius:5px;margin-top:15px;">
          <div style="width:60%;">
            <div style="width:100%;display:flex;align-items:center;padding-left:10px;margin-top:15px">
              <img style="width:15px" src="../../static/date.png" />
              <span style="font-size:.8rem;margin-left:10px">2017-04-30  20:49:39</span>
            </div>
            <div style="width:100%;padding-left:10px;display:flex;justify-content: space-between;align-items: center;">
              <p><span style="font-size:.8rem;color:#666">行程消费</span><span style="color:#ffd300;font-size:1.2rem">￥1.0</span></p>
              <p><span style="font-size:.8rem;color:#666">车牌号：</span><span style="font-size:.8rem;color:#666">6814938</span></p>
            </div>
          </div>
          <div style="width:20%;display:flex;justify-content:center;align-items: center;">
            <img src="../../static/right_arrow.png" />
          </div>
        </div>
        <div style="display:flex;justify-content: space-between;align-items: center;background:#ffffff;border-radius:5px;margin-top:15px;">
          <div style="width:60%;">
            <div style="width:100%;display:flex;align-items:center;padding-left:10px;margin-top:15px">
              <img style="width:15px" src="../../static/date.png" />
              <span style="font-size:.8rem;margin-left:10px">2017-04-29  17:48:00</span>
            </div>
            <div style="width:100%;padding-left:10px;display:flex;justify-content: space-between;align-items: center;">
              <p><span style="font-size:.8rem;color:#666">行程消费</span><span style="color:#ffd300;font-size:1.2rem">￥0.0</span></p>
              <p><span style="font-size:.8rem;color:#666">车牌号：</span><span style="font-size:.8rem;color:#666">4788347</span></p>
            </div>
          </div>
          <div style="width:20%;display:flex;justify-content:center;align-items: center;">
            <img src="../../static/right_arrow.png" />
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
