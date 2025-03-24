<script setup>
import {computed, ref} from "vue";
import {LegendList} from "@/data/LegendList.js";
import {copyToClipboard} from "@/utils/CopyUtils.js";

const legendList = ref(LegendList)
let legendListNoDeath;
const isShowDeath = ref(true)
const changeIsShowDeath = (isShow) => {
  if (isShow) {
    legendList.value = LegendList;
  }else if (legendListNoDeath) {
    legendList.value = legendListNoDeath
  }else {
    legendListNoDeath = LegendList.filter(item => !item.isDeath)
    legendList.value = legendListNoDeath
  }
}
</script>

<template>
  <div>
    <a-alert :show-icon="false" title="至死不渝👑：他们依然坚守着信念 ......" style="margin-bottom: 5px">
      <div style="line-height: 10px">
        <p>💯 虽然道路很艰难，但不变的是对公平执着与信念！</p>
        <p>🍥 没有开挂的传奇，才是真正的传奇⭐！</p>
        <p>⭐ 至：那些默默坚守者的传奇们。</p>
      </div>
    </a-alert>

    <!--  玩家列表  -->
    <div>
      <a-list>
        <template #header>
          <div style="width: 100%;height: 30px;display: flex;">
            <div style="justify-content: flex-start;display: flex;align-items: center;">
              绿玩榜
            </div>
            <div style="flex:1;justify-content: flex-end;display: flex;align-items: center;">
              <a-switch type="round" @change="changeIsShowDeath" v-model="isShowDeath" style="width: 58px" size="medium" checked-color="#F76560FF"/>
            </div>
          </div>
        </template>

        <template v-for="(item, index) in legendList" :key="index">
          <a-list-item v-show="isShowDeath || (!isShowDeath && !item.isDeath)">
            <div style="display: flex">
              <div class="item-left">
                {{index+1}}. {{item.name}}
              </div>
              <div class="item-right" v-if="item.isDeath">
                <a-tag checkable :color="item.color??'red'" :default-checked="true" size="large">
                  已死号
                </a-tag>
              </div>
            </div>
          </a-list-item>
        </template>

        <a-list-item>
          <div style="float: right">
            更多请联系QQ群: <a-link @click="copyToClipboard('555080859')">555080859</a-link>
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-left {
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
:deep(.arco-list-bordered){
  border: 1px solid #FFD700;
}
:deep(.arco-list-item){
  border-bottom: 1px solid #FFD700 !important;
}
:deep(.arco-list-medium .arco-list-content-wrapper .arco-list-header) {
  padding: 12px 20px;
  background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
}
</style>