<template>
    <div id="demoComponent" class="demo-component" style="background:#F6F6F6">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p style="">
          输入优惠码
        </p>
        <img src="../../static/ic_notifications_none_black_24dp.png" style="height:20px;margin-right:10px; visibility:hidden;"/>
    	</header>
      <div class="exchange_wrap">
        <div class="exchange_input_wrap">
            <img class="exchange_img" src="../../static/invite.png"/>
            <input type="text" class="exchange_input" placeholder="请输入您获得的优惠码" />
            <input type="button" class="exchange_btn" value="立即兑换" />
        </div>
        <div class="exchange_info_wrap">
            <div class="exchange_info_title">优惠码兑换规则</div>
            <div class="exchange_info_items">
                <div class="exchange_info_item">
                    输入您获得的优惠码，立即可获取一份超值大礼包。
                </div>
            </div>
        </div>
    </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      ads: []
		}
  },
  mounted() {
    //do something after mounting vue instance
    this.axios.get('/static/data.json')
      .then(data => {
        for (var i = 0; i < data.data.ads.length; i++) {
          this.ads.push(data.data.ads[i])
        }
      })
      .catch(err => {
        console.log(err)
      })
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
    box-sizing: border-box;
    background-color: #fff;
    position: fixed;
    z-index: 9998;
    width: 100%;
    box-shadow: 0 0 5px #888;
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
          * {
            font-family: sans-serif;
            line-height: 22px;
            box-sizing: border-box;
            outline: none;
            -webkit-appearance: none;
        }
        html, body {
            margin: 0;
            padding: 0;
            background: #fff;
        }
        .exchange_wrap {
            padding: 16px;
            margin-top: 50px;
        }

        .exchange_input_wrap {}
        .exchange_input_title {
            font: 16px/40px bold;
            text-align: center;
        }
        .exchange_input, .exchange_btn {
            display: block;
            height: 48px;
            width: 100%;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            text-align: center;
        }
        .exchange_input {
            border: 1px solid #979797;
            padding: 5px;
            font-size: 16px;
            line-height: 38px;
            outline: none;
            box-shadow: none;
        }
        .exchange_btn {
            margin: 25px 0;
            line-height: 48px;
            background-color: #ffd900;
            border: none;
            font-size: 18px;
            padding: 0;
        }

        .exchange_info_wrap {
            color: rgba(64,50,13,0.40);
            text-align: center;
        }
        .exchange_info_title {
            font-size: 12px;
            line-height: 14px;
        }
        .exchange_info_item {
            font-size: 12px;
            padding-top: 5px;
            line-height: 14px;
        }
        .exchange_img {
            width: 90px;
            height: 91px;
            display: block;
            margin:10px auto 40px;
        }
</style>
