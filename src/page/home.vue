<template>
    <div id="demoComponent" class="demo-component">
      <header class="header">
        <img src="../../static/menu.svg" @click="toggle(true)" style="width:25px;margin-left:10px"/>
        <img src="../../static/actionbar_logo.png" style="width:30%"/>
        <img src="../../static/ic_notifications_active_black_24dp.png" @click="activity()" style="height:20px;margin-right:10px"/>
    	</header>
      <aside class="aside" :class="{open:open,docked:docked}" @click="toggle()">
    		<ul>
          <div @click="toInfo()" style="display:flex;">
            <div style="height:70px;width:70px;display:flex;flex-direction:column;align-items:center">
              <img src="../../static/avatar.png" style="width:70px;height:70px"/>
            </div>
            <div style="height:70px;margin-left:10px;">
              <p style="line-height:5px;color:#584F30;font-size:13px">孤独行者</p>
              <p style="line-height:10px;font-size:13px;color:#584F30;">15908199450</p>
              <p style="line-height:10px;font-size:13px;color:#584F30;">信用积分：520</p>
            </div>

          </div>
          <hr size=1 color="#eee" style="bottom:1px #eee solid;background:#eee;color:#eee;margin-top:20px;"/>
    			<li @click="toJourney()">
    				<img style="height:18px;margin-right:10px" src="../../static/ic_receipt_white_24dp.png" /><span>我的行程</span>
    			</li>
    			<li @click="toWallet()">
    				<img style="height:18px;margin-right:10px" src="../../static/ic_account_balance_wallet_white_24dp.png" /><span>我的钱包</span>
    			</li>
          <li>
    				<img style="height:18px;margin-right:10px" src="../../static/redeem_icon.png" /><router-link to="/code">输入优惠码</router-link>
    			</li>
          <li>
    				<img style="height:18px;margin-right:10px" src="../../static/ic_share_black_24dp.png" /><span>邀请赢奖</span>
    			</li>
          <li>
    				<img style="height:18px;margin-right:10px" src="../../static/ic_help_white_24dp.png" /><router-link to="/guide">使用指南</router-link>
    			</li>
          <li>
    				<img style="height:18px;margin-right:10px" src="../../static/ic_info_white_24dp.png" /><span>关于</span>
    			</li>
    		</ul>
    	</aside>

        <el-amap @touchmove.prevent @scroll.prevent vid="amap" :zoom="zoom" :center="center" :mapStyle="mapStyle">
          <el-amap-marker v-for="(marker, index) in markers" :key="index" :icon="marker.icon" :position="marker.position" :events="marker.events"></el-amap-marker>
        </el-amap>
				<img @touchmove.prevent @scroll.prevent style="width:100%;position:fixed;bottom:0;left:0" src="../../static/home_bottom_white_bg.png" />
				<div class="footer">
          <div class="col">
            <!-- <img src="../../static/refresh_location_bg.png" style="height:50px;margin-left:10px"/> -->
            <div @click="refresh()" style="display:flex;align-items:center;justify-content:center;flex-direction:column;padding-left:10px">
              <img src="../../static/refresh_location_bg.png" style="height:50px;"/>
              <img src="../../static/homepage_refresh.png" style="height:22px;margin-top:-35px"/>
              <p style="font-size:.8rem;margin-top:15px">
                刷新
              </p>
            </div>
          </div>
					<div class="col" style="margin-bottom:30px">
            <router-link to="/Input">
              <div style="width:80px;height:80px;border-radius:50%;background-color:rgba(184,186,191,.6);display:flex;align-items:center;justify-content:center">
              <p class="col" style="width:70px;height:70px;border-radius:50%;background-color:rgb(10,10,10);text-align:center;line-height:70px;color:#FDD900;font-size:.9rem;font-weight:bold">
                立即用车
              </p>
              </div>
            </router-link>
					</div>
          <div class="col">
            <div @click="complain()" style="display:flex;align-items:center;justify-content:center;flex-direction:column;padding-right:10px">
              <img src="../../static/tiny_fab_right.png" style="height:50px;"/>
              <p style="font-size:.8rem;margin-top:0px">
                吐槽
              </p>
            </div>
          </div>
		  	</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
			docked: false,
			zoom: 16,
			mapStyle: 'normal',
      center: [104.065837,30.657349],
      markers: [
        {
					icon: 'http://alonez.com/ofo/img/start_center_point.svg',
          position: [104.065837,30.657349],
          events: {
            click: () => {
              alert('Hello, I am ofo');
            }
          }
        }
      ]
		}
  },
	mounted () {
	  //do something after mounting vue instance
		for (var i = 0; i < 50; i++) {
			this.addMarker()
		}
	},
  methods: {
    toInfo() {
      this.$router.push('user')
    },
    toJourney() {
      this.$router.push('journey')
    },
    toWallet() {
      this.$router.push('wallet')
    },
    refresh() {
      this.$router.go(0)
    },
    complain() {
      this.$router.push('complain')
    },
    activity() {
      this.$router.push('activity')
    },
    toggle() {
			if (!this.open) {
				this.docked = true;
				this.open = true;
			} else {
				this.open = false;
				let vue = this;
				setTimeout(function() {
					vue.docked = false;
				}, 300);
			}
		},
    addMarker() {
      let marker = {
				icon: 'http://alonez.com/ofo/img/nearby_car_point.svg',
				events: {
					click: () => {
						//alert('click marker');
					}
				},
        position: [104.065837 + (Math.random() - 0.5) * 0.02, 30.657349 + (Math.random() - 0.5) * 0.02]
      };
      this.markers.push(marker);
    }
  }
};
</script>

<style lang="scss" scoped>
  html { -webkit-text-size-adjust: none; }
  a {
    text-decoration: none;
  }
	.demo-component {
    height: 100vh;
    overflow-y: hidden;
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
    z-index: 9998;
    box-shadow: 0 0px 5px #888;
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

  .aside {
    z-index: 9999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    visibility: hidden;
    &::-webkit-scrollbar {
      display: none!important;
      width: 0!important;
      height: 0!important;
      -webkit-appearance: none;
      opacity: 0!important;
    }
    ul {
      margin: 0;
      float: left;
      width: 70%;
      height: 100%;
      padding: 1.3rem 1.5rem 1.5rem;
      overflow: auto;
      background: #ffffff;
      transform: translate(-100%,0);
      transition: transform 0.3s ease;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none!important;
        width: 0!important;
        height: 0!important;
        -webkit-appearance: none;
        opacity: 0!important;
        }
      }
      li {
          cursor: pointer;
          font-size: 0.6rem;
          list-style: none;
          color: #000;
          margin-top: 20px;
          display: flex;

          align-items: center;
          &.chose {
              color: #FFD300;
          }
          span {
            font-size: .9rem;
          }
          a {
            font-size: .9rem;
            color: #111;
          }
      }

      &.open {
          ul {
              transform: translate(0);
          }
          .cover {
              opacity: 1;
          }
      }
      &.docked {
          visibility: visible;
          .cover {
              display: block;
          }
      }
  }
</style>
