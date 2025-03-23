<template>
  <div class="floating-setting">
    <div @click="toggleSettings" class="main-button">
      <icon-settings size="25" class="icon-xz"/>
    </div>
    <transition name="slide-fade">
      <div v-if="isSettingsVisible" class="sub-buttons">
        <div @click="toggleToTop"><icon-to-top size="25"/></div>
        <div @click="toggleSakuraBg"><span class="icon-xz" style="font-size: 22px;">🌸</span></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emits = defineEmits(['sakuraBg']);
const isSettingsVisible = ref(false);

const toggleSettings = () => {
  isSettingsVisible.value = !isSettingsVisible.value;
};

const toggleSakuraBg = () => {
  emits('sakuraBg');
  isSettingsVisible.value = false;
};

const toggleToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  isSettingsVisible.value = false;
}

</script>

<style scoped>
.floating-setting {
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.main-button {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sub-buttons {
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: absolute;
  bottom: 40px;
  right: 0;
}

.sub-buttons div {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  /*background-color: #6c757d;*/
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* 定义动画 */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

/* 定义旋转动画 */
@keyframes xz {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 设置图标的样式 */
.icon-xz {
  border-radius: 50%;
  /* 应用旋转动画 */
  animation: xz 2s linear infinite;
}
</style>