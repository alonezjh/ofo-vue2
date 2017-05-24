<template>
    <div id="demoComponent" class="demo-component" style="background:#F6F6F6">
      <header class="header">
        <img src="../../static/back.svg" @click="back()" style="width:25px;margin-left:10px"/>
        <p style="">
          活动中心
        </p>
        <img src="../../static/ic_notifications_none_black_24dp.png" style="height:20px;margin-right:10px; visibility:hidden;"/>
    	</header>
      <div style="margin:50px 0 20px;">
        <div class="row" v-for="(value,key) in activities" style="padding:20px 20px 0px;">
          <img :src="value.img" style="width:100%;box-shadow: 0 0 8px #ccc;border-radius:5px">
        </div>
      </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      activities: []
		}
  },
  mounted() {
    //do something after mounting vue instance
    this.axios.get('http://alonez.com/ofo/data.json')
      .then(data => {
        console.log(data)
        for (var i = 0; i < data.data.activities.length; i++) {
          this.activities.push(data.data.activities[i])
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
	.footer {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 10px;
		height: 50px;
		display: -webkit-flex;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}

</style>
