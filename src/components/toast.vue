<template>
<div class="toast-container" v-show="isShowToast" @touchmove.prevent @scroll.prevent>
  <div class="toast">
    <img class="toastIcon" v-show="isShowIcon" src="../../static/loading-white.svg"/>
    <span class="toastText">{{msg}}</span>
  </div>
</div>
</template>

<script>
export default {
	name: 'toast',
  created () {
    if (this.duration != 0) {
      setTimeout(() => {
  			this.isShowToast = false
  		}, this.duration)
    }
  },
	props: {
    isShowIcon: {
			type: Boolean,
			default: false
		},
    isShowToast: {
      type: Boolean,
			default: true
    },
		msg: {
			type: String,
			default: 'please set msg!'
		},
		duration: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style scoped>
 .toast-container {
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   display: -webkit-flex;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 .toast {
   background:rgba(10,10,10,.8);
   color: #ffffff;
   padding: 15px 25px;
   border-radius: 5px;
   display: -webkit-flex;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 .toastIcon {
   width: 40px;
 	 height: 40px;
   margin-right: 10px;
 }
</style>
