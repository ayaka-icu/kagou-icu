<template>
  <div>
    <Particles id="tsparticles" :options="options" v-if="isSakuraBg"/>

    <div style="min-height: 900px;position: relative;padding: 0 10px;margin-bottom: 100px">
      <!--  头部 TODO: 加个背景图吧以后！ -->
      <a-alert type="success" closable class="alert-top" :show-icon="false">
        <span style="color: #def416">这里是 《海岛奇兵》kagou.icu 🐕🏥</span>
      </a-alert>
      <!--  导航  -->
      <PageHead @change-type="changeType" ref="pageHeadRef"/>
      <!--  卡狗榜  -->
      <KagouPage v-show="type === 1"/>
      <!--  绿玩榜  -->
      <StickToPage v-show="type === 2"/>
      <!--  官网  -->
      <RequestOSPage @goKagouList="goType(1)" v-show="type === 3"/>
      <ChatPage v-show="type === 4"/>

    </div>

    <FloatingSettingButton @sakura-bg="sakuraBg"/>
  </div>

</template>
<script setup>
import {ref, h} from "vue"
import PageHead from "@/layout/PageHead.vue";
import KagouPage from "@/views/KagouPage.vue";
import StickToPage from "@/views/LegendPage.vue";
import RequestOSPage from "@/views/RequestOSPage.vue";
import ChatPage from "@/views/ChatPage.vue";
import FloatingSettingButton from "@/components/FloatingSettingButton.vue";
import {Message} from "@arco-design/web-vue";
import { IconCommand } from '@arco-design/web-vue/es/icon';

const pageHeadRef = ref();

const type = ref(1);

const isSakuraBg = ref(true);

const changeType = (newType) => {
  type.value = newType;
}

const goType = (newType) => {
  pageHeadRef.value.changeType(newType);
}

const sakuraBg = () => {
  console.log("...")
  isSakuraBg.value = !isSakuraBg.value;
}
Message.success({
  content: '不管结果如何，总要有人发声吧 ~',
  icon: () => h(IconCommand),
  duration: 3800,
  closable: true
})
//配置particles
const options =  {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    number: {
      value: 110,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffc0cb"
    },
    shape: {
      type: "char",
      character: {
        value: ["🌸"],
      }
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 16,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 4,
      direction: "bottom-left",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      }
    }
  },
  retina_detect: true
};
</script>
<style scoped>
.alert-top {
  margin-top: 5px;
  background-image: url('../assets/card-bg.png');
  background-size: 100% auto; /* 宽度自动调整以保持比例，高度设置为容器高度的100% */
  background-position: right center; /* 背景图片右对齐且垂直居中 */
  background-repeat: no-repeat;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  min-height: 120px;
}
/* 手机 alert-top*/
@media screen and (max-width: 768px) {
  .alert-top {
    min-height: 60px;
    font-size: 16px;
  }
}
</style>