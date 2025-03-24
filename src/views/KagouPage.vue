<script setup>

import {ref} from "vue";
import {KagouList} from "@/data/KagouList.js";
import {copyToClipboard} from "@/utils/CopyUtils.js";

const kagouList = ref(KagouList)
</script>

<template>
  <div>
    <a-alert :show-icon="false" title="卡狗🐕：是利用游戏bug/外挂的玩家" style="margin-bottom: 5px;">
      <div style="line-height: 10px">
        <p>1. 卡24小时在线，玩家无法进行攻击。</p>
        <p>2. 利用外挂进行加速时间，匹配更多的玩家。</p>
        <p>3. 利用bug，不断刷新玩家。</p>
      </div>
    </a-alert>

    <!--  玩家列表  -->
    <div>
      <a-list>
        <template #header>
          <div style="width: 100%;height: 30px;">
            卡狗🐕榜
          </div>
        </template>
        <a-list-item v-for="(item, index) in kagouList" :key="index">
          <div style="display: flex">
            <div class="item-left">
              {{index+1}}. {{item.name}}
            </div>
            <div class="item-right">
              <a-tag checkable :color="item.color??'red'" :default-checked="true" size="large">
                🐕{{item.type}}
              </a-tag>
            </div>
          </div>
        </a-list-item>
        <a-list-item>
          <div style="float: right">
            更多请联系QQ群: <a-link @click="copyToClipboard('555080859')">555080859</a-link>
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<style scoped>
.item-left {
  font-size: 14px;
font-weight: bold;
  justify-content: flex-start;
  display: flex;
  align-items: center;
}
.item-right {
  flex:1;
  justify-content: flex-end;
  display: flex;
  align-items: center;
}
:deep(.arco-list-medium .arco-list-content-wrapper .arco-list-header) {
  padding: 12px 20px;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}
</style>