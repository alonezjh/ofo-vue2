<template>
    <div style="background:#F6F6F6">
      <header class="header">
        <img src="../../static/actionbar_logo.png" style="width:30%;margin-left:10px"/>
        <router-link to="/howopen"><img src="../../static/ic_help_outline_black_24dp.png" style="height:22px;margin-right:10px"/></router-link>

    	</header>
      <div class="main">
        <img src="../../static/unlock_bg_card.png" style="width:100%" />
        <p class="num-dec">车牌号  <span style="font-weight:bold;color:#584F30">{{value}}</span>  的解锁码</p>
        <div class="input" style="justify-content:center">
          <div v-for="v in lockNums" style="border:2px #ffd500 solid;border-radius:5px;padding:10px 18px;font-weight:bold;color:#584F30;font-family:sans-serif;font-size:1.5rem">
            {{v}}
          </div>
        </div>
        <p class="input-dec">骑行结束后，记得在手机上结束行程</p>
      </div>
      <div class="fuzhu" style="display:flex;  justify-content: space-between;">
        <img @click="light()" src="../../static/light_off.png" style="width:10%;margin-left:21%"/>
        <span style="font-size:.9rem;height:30px;width:1px;background:#ccc"></span>
        <img @click="voice()" src="../../static/voice_btn.png" style="width:10%;margin-right:21%"/>
    	</div>
      <footer>
        <div style="background:#ffffff;border-radius:6px;display:flex;padding:5px 10px;justify-content:center;align-items:center;width:50%;vertical-align:middle">
          <img style="height:18px;margin-right:10px" src="../../static/unlock_forbidden.png" /><span style="height:18px;font-size:.7rem">12周岁以下儿童禁止骑车</span>
        </div>
        <p style="font-size:.8rem;color:#777;line-height: 10px;">
          {{timer}} 秒后将开始计费，请检查车辆
        </p>
        <p style="font-size:.8rem;color:#777;line-height:0px;margin-top:5px;magin-bottom:10px">
          如果有问题，<span style="color:#0F80F8" @click="repair()">立即报修</span>
        </p>
      </footer>
    <toast :isShowIcon=isShowIcon :msg="msg" :isShowToast="isShowToast"></toast>
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
    this.value = localStorage.getItem('carNum')
    let lockNum = ''
    for(var i=0;i<4;i++) {
      lockNum += Math.floor(Math.random()*10);
    }
    console.log(lockNum);
    this.lockNums = String(lockNum).split('')
    console.log(String(lockNum).split('') )
    this.startTimer();
  },
  methods: {
    update () {
                if(this.timer <= 0)
                {
                    this.timer = 120
                }
                else{
                    this.timer--;
                }
            },
            startTimer () {
                //如果是false就开始倒计时，如果是true就停止倒计时
                if(this.stop == false)
                {
                    this.Interval = setInterval(this.update,1000);
                }
                else
                {
                    clearInterval(this.Interval);
                }

                this.stop = !this.stop;
            },
    light() {
      this.isShowToast = true
      this.isShowIcon = false
      this.msg = 'Sorry，无法开启手电筒~'
      setTimeout(() => {
        this.isShowIcon = true
        this.isShowToast = false
        this.msg = '开锁中，请稍候...'
      }, 1000)
    },
    voice() {
      this.isShowToast = true
      this.isShowIcon = false
      this.msg = 'Sorry，无法开启语音功能~'
      setTimeout(() => {
        this.isShowIcon = true
        this.isShowToast = false
        this.msg = '开锁中，请稍候...'
      }, 1000)
    },
    repair() {
      this.$router.push('repair')
    }
  }
}
</script>

<style lang="scss" scoped>
	.demo-component {

	}
  .header {
    display: -webkit-flex;
           display: flex;
           justify-content: space-between;
           align-items: center;
           height: 50px;
           box-sizing: border-box;
           background-color: #fff;
           position: relative;
           z-index: 9999;
           font-family: fantasy;
           box-shadow: 0 0px 5px #888;
  }
  .fuzhu {
    display: -webkit-flex;
           display: flex;
           justify-content: space-between;
           align-items: center;

           margin-top: 3vh;


  }
  .main {
            width: calc(100% - 45px);
            box-shadow: 0 0 5px #ccc;
            margin: 0 auto;
            border-radius: 5px;
            box-sizing: border-box;
            margin-top: 25px;
            background-color: #fff;
            display: -webkit-flex;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
        }
        .main .num-dec{

            padding: 5px 15px ;
            font-size: 1rem
        }
        .main .input{
         width: 25%;
         flex-direction: row;
          display: flex;
          div {
            margin: 0 2px;
          }
        }
        .main .input-dec{
         font-size: .9rem;
         color:#584F30;
        }
        .main .input .text, .main .input .btn{
            display: inline-block;
            vertical-align: middle;
            /*margin-left: 10px;*/
        }
        .main .input .text, .main .input .btn2{
            display: inline-block;
            vertical-align: middle;
            /*margin-left: 10px;*/
        }
         .main .input button.active{
            background-color: #ffd500;
        }
        .main .input .text{
            width:80%;
            height: 6vh;
            border: 2px solid #ffd500;
            text-align: center;
            color:black;
            line-height: 6vh;
            position: relative;

        }
        /*光标*/
        .main .input .text::before{
            content: attr(value);
        }

        .main .input .text::after{
            content: '';
            border-right: 2px solid #ffd500;
            height: 6vh;
            opacity: 1;
            animation: focus .7s forwards infinite;

        }
        /*闪烁动作*/
        @keyframes focus{
            from{
                opacity: 1;
            }to{
                opacity: 0;
            }
        }

        .main .input .btn{
            width: 18%;
            height: 6vh;
            outline: none;
            border: none;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABY0lEQVRoQ+2XYW3DQAyFXxkUyhisFIpgKwMHQQvBQ7COwRhMhTAIYzAGqSylUlQ1iRPf1Y7k+5s7531+vjvfBisfm5XrRwJ4O5gOpAPGDGQJGRNoXp4OmFNoDODiABEdAXww879R//NvYiLaAfgB8M3M+9UBiGAiegfwCeDMzAcLhEsJlYRwAygF4QpQAsIdwAoRAqCDOAGQ43XWxg4D0EGcAbzNgQgFsAQiHMBciFGApmleLZeMZW3btgzgpWs5aCjWKAARtRYRhdZemFnaj4djCmBwYSFxY2Gk3ZANLU3fMgeeIPLhL3q90hczC8jgCLeJe+JHS+dGFAqgJ/4XwE7zXggDsES8uBACYKn4EAAW8e4ARCQXlTwv/7Q1f38cuZVQCfFuDpQS7wJQUrwXwBaANGqkOeenugG3PTAlTPs9AbSZqjUvHaiVWW3cdECbqVrz0oFamdXGTQe0mao1b/UOXAHwUYgxdDnt4wAAAABJRU5ErkJggg==) no-repeat center;
            background-color: #f9f9f9;
            background-size: 5vw;
        }

        .main .input .btn2{
            width: 18%;
            height: 6vh;
            outline: none;
            border: none;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABY0lEQVRoQ+2XYW3DQAyFXxkUyhisFIpgKwMHQQvBQ7COwRhMhTAIYzAGqSylUlQ1iRPf1Y7k+5s7531+vjvfBisfm5XrRwJ4O5gOpAPGDGQJGRNoXp4OmFNoDODiABEdAXww879R//NvYiLaAfgB8M3M+9UBiGAiegfwCeDMzAcLhEsJlYRwAygF4QpQAsIdwAoRAqCDOAGQ43XWxg4D0EGcAbzNgQgFsAQiHMBciFGApmleLZeMZW3btgzgpWs5aCjWKAARtRYRhdZemFnaj4djCmBwYSFxY2Gk3ZANLU3fMgeeIPLhL3q90hczC8jgCLeJe+JHS+dGFAqgJ/4XwE7zXggDsES8uBACYKn4EAAW8e4ARCQXlTwv/7Q1f38cuZVQCfFuDpQS7wJQUrwXwBaANGqkOeenugG3PTAlTPs9AbSZqjUvHaiVWW3cdECbqVrz0oFamdXGTQe0mao1b/UOXAHwUYgxdDnt4wAAAABJRU5ErkJggg==) no-repeat center;
            background-color: #ffd500;
            background-size: 5vw;
        }

        footer{
            width: 100%;
            padding-bottom: 15px;
            display: flex;
            position: fixed;
            justify-content:center;align-items:center;
            bottom: 0;
            left: 0;
            right: 0;
            flex-direction: column;
            text-align: center;
        }
        footer table tr td{
            width: 25%;
            font-weight: bold;
            font-size: 1.2rem;

        }
        footer table tr:last-child td:nth-child(2n+1){
            background-color: #ffffff;
        }
        // footer table tr:nth-child(3) td:last-child{
        //     background-color: #979797;
        //     color:#ffffff;
        //     font-weight: 100;
        // }
        .s {
          background-color: #979797;
          color:#ffffff;
          font-weight: 100;
        }
        .s2 {
          background-color: #0F80F8;
          color:#ffffff;
          font-weight: 100;
        }
        footer table tr:first-child td:last-child{
            background: url('../../static/backspace_button.png') no-repeat center;
            background-size: 25px;
        }
        // footer table tr:nth-child(2) td:last-child{
        //     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABG0lEQVRYR9WX0Q3CMAxErxPAKIwAm8BksAmMwCh0A2SpQcFNk7smKKVSvxrfvZjYMQM6P0Nnf2wW4ADA3lujDJ0BPKf3SzKVATO+A9gDuDSAMPMrgBeAk4fwALF5IK2BCOZBawbhAXxADQSllfoJqMDC2aA1lqqAFkiASLG5MpSEJhA5ptQHFEFl7SdxJQBbyAgza5LHhgEoQdh3q3P/UOXLAuQgUjujzC1QAWAhaPM1ACUIyfwvAZZOe3wOpCwoZ4Axl+8OFiBX5z8vQ6bJMGtWNSJFWFlLteI1gnLMJq9jeRc1M8HmRjIbSh8AdtGupMbisuGzOQI4xpPx0lgeIGrMA0uAmJnn7oKuf0wKA2/bz2wrbusaqXUHeAOPTFwh/22d1gAAAABJRU5ErkJggg==) no-repeat center;
        //     background-size: 20px 20px;
        // }
</style>
