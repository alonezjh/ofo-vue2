<template>
  <div id="app">
  	<transition :name="transitionName">
  		<keep-alive>
  			<router-view class="app-view"></router-view>
  		</keep-alive>
  	</transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
		return {
			transitionName: 'slide-left'
		}
	},
	watch: {
		'$route' (to, from) {
			this.transitionName = to.path != "/" ? 'slide-right' : 'slide-left'
		}
	}
}
</script>

<style lang="scss" scoped>

.app-view {
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: absolute;
  transition: transform 0.3s ease;
  -webkit-overflow-scrolling: touch;
}

@media screen and (min-width: 640px) {
  .app-view {
    width: 640px;
    left: 50%;
    transform: translate(-50%,0);
  }
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50vw, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0.1;
  -webkit-transform: translate(-50vw, 0);
}

</style>
