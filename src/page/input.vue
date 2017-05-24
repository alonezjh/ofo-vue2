<template>
    <div style="background:#F6F6F6">
      <header class="header">
        <img src="../../static/actionbar_logo.png" style="width:30%;margin-left:10px"/>
        <p style="font-size:.9rem;margin-right:10px">
          扫码用车
        </p>
    	</header>
      <div class="main">
        <img src="../../static/bicycle_signal.png" style="width:100%" />
        <p class="money-dec">计费说明：1元/小时</p>
        <div class="input">
          <div type="text" class="text" id="text" :value="value"></div>
          <button @click="submit()" :class="[isActive ? 'btn2' : 'btn']" id="submitBtn"></button>
        </div>
        <p class="input-dec">{{tip}}</p>
      </div>
      <div class="fuzhu" style="display:flex;  justify-content: space-between;">
        <img @click="light()" src="../../static/light_off.png" style="width:10%;margin-left:21%"/>
        <span style="font-size:.9rem;height:30px;width:1px;background:#ccc"></span>
        <img @click="voice()" src="../../static/voice_btn.png" style="width:10%;margin-right:21%"/>
    	</div>
      <footer>
        <table width="100%" border="1" cellspacing="0" cellpadding="0">
          <tr>
            <td class="number" @click="input(1)">1</td>
            <td class="number" @click="input(2)">2</td>
            <td class="number" @click="input(3)">3</td>
            <td rowspan="2" @click="back()" id="del"></td>
          </tr>
          <tr>
            <td class="number" @click="input(4)">4</td>
            <td class="number" @click="input(5)">5</td>
            <td class="number" @click="input(6)">6</td>
          </tr>
          <tr>
            <td class="number" @click="input(7)">7</td>
            <td class="number" @click="input(8)">8</td>
            <td class="number" @click="input(9)">9</td>
            <td :class="[isActive ? 's2' : 's']" rowspan="2" @click="submit()">确定</td>
          </tr>
          <tr>
            <td></td>
            <td class="number" @click="input(0)">0</td>
            <td></td>
          </tr>
        </table>
    </footer>
    <toast :isShowIcon=isShowIcon :msg="msg" :isShowToast="isShowToast"></toast>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      tip: '输入车牌号，获取解锁码',
      isActive: false,
      isShowToast: false,
      isShowIcon: true,
      msg: '开锁中，请稍候...',
      duration: 0
		}
  },
  created() {
    //do something after creating vue instance
    this.$emit('say', this.c);
    console.log("s");
  },
  methods: {
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
    submit() {
      if (!this.isActive) {
        return false
      }
      this.isShowToast = true
      setTimeout(() => {
        this.$emit('id-selected', 1)
        this.isShowIcon = true
        this.isShowToast = false
        this.$router.push('result')
        localStorage.removeItem('carNum')
        localStorage.setItem('carNum',this.value)
  		}, 2000)
    },
    back() {
      this.value = this.value.slice(0,this.value.length-1)
      if (this.value.length === 0) {
        this.tip = '输入车牌号，获取解锁码'
      }
      if (this.value.length >= 4 && this.value.length <= 8) {
        this.isActive = true
      }else{
        this.isActive = false
      }
    },
    input(num) {
      if (this.value.length >= 8) {
        return false
      }
      if (this.value.length >= 0) {
        this.tip = '车牌号一般为 4-8 位的数字'
      }
      if (this.value.length >= 3 && this.value.length <= 8) {
        this.isActive = true
      }else{
        this.isActive = false
      }
      this.value += num
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
        .main .money-dec{
            background-color: #f9f9f9;
            padding: 5px 15px ;
            border-radius: 70px;
            font-size: .9rem
        }
        .main .input{
         width: 100%;
         padding:0 10px;
        }
        .main .input-dec{
         font-size: .9rem;

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

        footer table{
            width: 100%;
            height: 28vh;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            border: 1px solid #dedfe2;
            border-collapse: collapse;
            background-color: #fff;

        }
        footer table tr td{
            width: 25%;
            font-weight: bold;
            font-size: 1.2rem;

        }
        footer table tr:last-child td:nth-child(2n+1){
            background-color: #ffffff;
        }
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
</style>
