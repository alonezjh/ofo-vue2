<template>
    <div id="demoComponent" class="demo-component" style="background:#F6F6F6">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p style="">
          使用指南
        </p>
        <img src="../../static/ic_notifications_none_black_24dp.png" style="height:20px;margin-right:10px; visibility:hidden;"/>
    	</header>
      <div class="exchange_wrap" style="margin-top:50px">
        <div style="height:77vh">
<iframe ref="iframe" frameborder=0 width=100% height=100% src="http://alonez.com/ofo/guide"></iframe>
        </div>

            <div class="btn-wrap tel-btn">
                <a id="call" href="tel:4001507507">
                    联系客服
                    <link class="rippleJS" />
                </a>
                <span>您也可以通过邮件联系我们：zjh@alonez.com</span>
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
body,html{
  overflow-y: hidden;
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
          .clear {
             clear: both;
         }
         a{
             text-decoration: none;
             color: #40320D;
         }
         .btn-wrap{
             width: 100%;
             padding: 20px 16px;
         }
         .btn-wrap a{
             display: block;
             width: 100%;
             height: 40px;
             background: #ffd430;
             text-align: center;
             line-height: 40px;
             font-size: 16px;
             border-radius: 2px;
             position: relative;
         }
         .btn-wrap span{
             display: block;
             font-size: 12px;
             padding: 10px 0 0;
             text-align: center;
         }
         #call{
             display: block;
             width: 100%;
             height: 48px;
             background: #FFD900;
             text-align: center;
             line-height: 48px;
             font-size: 16px;
             position: relative;
         }
         #call::before{
             display: inline-block;
             content: '';
             width: 24px;
             height: 24px;
             background-image: url(../../static/shape.png);
             background-repeat: no-repeat;
             background-size: contain;
             vertical-align: middle;
         }
         .content{
             display: none;
             width: 100%;
             height: 100%;
             overflow-x: hidden;
             overflow-y: auto;
             font-size: 14px;
             line-height: 22px;
             padding: 12px;
             -webkit-box-sizing: border-box;
         }
         #home, .content:target {
             display: block;
         }
         .content:target ~ #home {
             display: none !important;
         }

         /* insurance section */
         .body-group {
             display: none;
             padding-top: 8px;
             position: relative;
         }
         .body-group.content{
             padding: 0;
         }
         .group-content {
             width: 100%;
         }
         .footer {
             background: #fff;
             position: absolute;
             bottom: 0;
             width: 100%;
             left: 0;
         }
         .space{
             height: 16px;
             background: #F6F6F6;
         }
         .con{
             padding: 12px 16px;
         }
         .ins-title {
             color: #000;
             font-size: 16px;
             line-height: 24px;
             padding: 8px 16px;
             background: #fff;
             border-bottom: 1px solid #ddd;
         }
         .ins-float {
             width: 50%;
             float: left;
             box-sizing: border-box;
         }
         .ins-float.left {
             padding-right: 8px;
         }
         .ins-float.right {
             padding-left: 8px;
         }
         .ins-icon {
             width: 50%;
             margin: auto;
             position: relative;
             padding-top: 50%;
             border-radius: 50%;
             background-color: #f2f2f2;
             background-repeat: no-repeat;
             background-position: center;
             background-size: 40%;
         }

         .ins-float a {
             background: #ffd430;
             font-size: 15px;
             border-radius: 3px;
             display: block;
             height: 36px;
             line-height: 36px;
             text-decoration: none;
             margin-top: 8px;
             text-align: center;
             position: relative;
         }
         .ins-subtitle {
             font-size: 15px;
             margin-bottom: 4px;
             margin-top: 8px;
         }
</style>
