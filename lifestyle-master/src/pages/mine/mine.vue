<template>
	<div class="body">
		<headtop></headtop>		
		<div class="panel-box">
		<div class="group-list">
			<div class="my-info">
				<div class="my-img">
					<img src="static/img/tx.jpg" >
				</div>
				<div class="my-item-text">
					<div>姓名</div>
					<div>手机号:12312311231</div>
				</div>
			</div>
		</div>

		<div class="group-list">
			<div class="items-list border-b">
				<!-- <div class="items-img">
					<img src="static/img/1.png" >
				</div> -->
				<div class="item-text">我的钱包</div>
			</div>
		</div>

		<div class="group-list">
			<div class="items-list border-b">
				<!-- <div class="items-img">
					<img src="static/img/2.png" >
				</div> -->
				<div class="item-text">余额</div>
			</div>
			<div class="items-list border-b">
				<!-- <div class="items-img">
					<img src="static/img/3.png" >
				</div> -->
				<div class="item-text">抵用卷</div>
			</div>
			<div class="items-list border-b">
				<!-- <div class="items-img">
					<img src="static/img/4.png" >
				</div> -->
				<div class="item-text">我的评论</div>
			</div>
			<div class="items-list">
				<!-- <div class="items-img">
					<img src="static/img/5.png" >
				</div> -->
				<div class="item-text">我的收藏</div>
			</div>
		</div>

		<div class="group-list">
			<div class="items-list border-b">
				<!-- <div class="items-img">
					<img src="static/img/6.png" >
				</div> -->
				<div class="item-text">设置</div>
			</div>
		</div>
		
		
	</div>
		<bottom></bottom>
	</div>
</template>
<script>
import headtop from "./header";
import Bottom from "../../common/Bottom";
export default {
  name: "My",
  data() {
    return {
      msg: "这是我的"
    };
  },
  components: {
    headtop,
    Bottom
  }
};
</script>
<style lang="scss">
body {
  height: 100%;
}
.panel-box {
  width: 100%;
  padding-top: 0rem;
  padding-bottom: 0rem;
  background: #ebebeb;
  height: 100%;
  overflow-y: scroll;
  .group-list {
    margin: 0.5rem 0;
    background: #fff;
  }
  .border-b {
    border-bottom: 1px solid #dcdcdc;
  }
  .border-t {
    border-top: 1px solid #dcdcdc;
  }
  .items-list {
    display: flex;
    padding: 0.2rem 0;
    margin: 0 0.2rem;
    .items-img {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.5rem;
      img {
        width: 100%;
      }
    }
    .item-text {
      flex: 1;
      display: flex;
      font-size: 0.32rem;
      line-height: 0.5rem;
      .text-l {
        flex: 1;
      }
      .text-r {
        font-size: 0.32rem;
        color: #999999;
        display: flex;
        .the-ad {
          flex: 1;
          margin-right: 0.7rem;
        }
        .the-icon {
          width: 0.5rem;
          height: 0.5rem;
          margin-right: 0.7rem;
          position: relative;
          img {
            width: 100%;
          }
          .small-mark {
            position: absolute;
            background: #fc4041;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 0.5px;
            top: -0.5rem;
            right: -0.7rem;
          }
        }
      }
    }
  }
  .my-info {
    display: flex;
    padding: 0.5rem 0;
    margin: 0 0.5rem;
  }
  .my-img {
    width: 1.5rem;
    img {
      width: 100%;
    }
  }
  .my-item-text {
    flex: 1;
    padding-left: 0.4rem;
    div:nth-child(1) {
      font-size: 0.32rem;
      color: #383838;
      line-height: 0.5rem;
    }
    div:nth-child(2) {
      font-size: 0.32rem;
      color: #9a9a9a;
      line-height: 0.5rem;
    }
  }
  .erweima {
    padding: 0.5rem 0 0.5rem 0.5rem;
    img {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
}
</style>