<script setup>
import {ref} from "vue";

const chatList = ref([
  {
    chat: "✊ 也许我会被针对或攻击，但绝不妥协！",
    bgColor: "rgb(232, 243, 255)"
  },
  {
    chat: "🌸 我的海岛🏝名:『绫华🌸网站kagou.icu』",
    bgColor: "rgb(232, 243, 255)"
  },
  {
    chat: "🏝 给岁月以海岛🏝，而不是给海岛🏝以岁月！",
    bgColor: "rgb(232, 243, 255)"
  },
  {
    chat: "🎉 大家海岛周年庆快乐鸭！🎉🎉🎉✨🎊🦀",
    bgColor: "rgb(232, 243, 255)"
  },
  {
    chat: "🦀 好期待月末的螃蟹鸭，我一般都管它叫大闸蟹......<br>🦀 口水.jpg",
    bgColor: "rgb(232, 243, 255)"
  },
  {
    chat: "💢 我勒忒瓦吼了啦~   #&*^$&*%…💢",
    bgColor: "rgb(232, 243, 255)"
  },
  {
    chat: "🧐 你解救了辣个蓝人了吗？",
    bgColor: "rgb(232, 243, 255)"
  },
  {
    chat: "🌏 欢迎来到我的博客......<br>😼 这个人很懒，已经好久没更新啦......",
    bgColor: "rgb(232, 243, 255)",
    linkTitle: "ayaka.icu",
    linkUrl: "https://ayaka.icu",
  },
  {
    chat: "🎞 你还记得你第一个战队名字吗？",
    bgColor: "rgb(232, 243, 255)"
  },
  {
    chat: "🏝 大家的海岛🏝😺😸😾😼~",
    bgColor: "rgb(232, 243, 255)"
  },
  {
    chat: "🍥 游戏，还是要可乐的好~",
    bgColor: "rgb(232, 243, 255)"
  },
  {
    chat: "🐧 换进加入QQ群：555080859 ~",
    bgColor: "rgb(232, 243, 255)"
  },
])
</script>

<template>
  <div>
    <a-card v-for="(item, index) in chatList" :key="index" hoverable
            :style="{ marginBottom: '10px', backgroundColor: item.bgColor }">
      <div :style="{ display: 'flex', alignItems: 'center',justifyContent: 'space-between'}">
      <span :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
        <a-typography-text><span v-html="item.chat"></span></a-typography-text>
      </span>
      <a-link v-if="item?.linkTitle" :href="item.linkUrl">{{item.linkTitle}}</a-link>
      </div>
    </a-card>
    <a-card hoverable :style="{ marginBottom: '10px', backgroundColor: 'rgb(232, 243, 255)' }">
      <div :style="{ display: 'flex', alignItems: 'center',justifyContent: 'space-between'}">
      <span :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
        <a-typography-text><icon-github /> 网站源代码开源，欢迎您的加入😊🤝！<br>🙈 瞧我这写的烂代码😖......</a-typography-text>
      </span>
        <a-link href="https://github.com/ayaka-icu/kagou-icu"><icon-github /></a-link>
      </div>
    </a-card>
  </div>
</template>

<style scoped>

</style>