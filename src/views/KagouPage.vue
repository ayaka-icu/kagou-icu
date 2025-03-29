<script setup>

import {ref} from "vue";
import {KagouList} from "@/data/KagouList.js";
import {copyToClipboard} from "@/utils/CopyUtils.js";

const getColor = (type) => {
    if (type === "卡玩家") {
        return "arcoblue"
    } else if (type === "卡在线") {
        return "red"
    } else {
        return "purple"
    }
}

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
        <a-list-item >

          <a-collapse accordion>
            <a-collapse-item v-for="(item, index) in kagouList" :key="index" :header="item.name" key="1">
              <template #extra>
                <a-tag v-for="(it, inx) in item.type" :key="it" checkable :color="getColor(it)" :default-checked="true" size="large" style="margin-left: 5px">
                  🐕{{it}}
                </a-tag>
              </template>
              <div v-if="item.tx_info.user_id">
                <a-descriptions title="卡狗信息" bordered :column="1" size="mini">
                  <a-descriptions-item label="用户名">
                    {{item.name}}
                  </a-descriptions-item>
                  <a-descriptions-item label="用户ID">
                    {{item.tx_info.user_id}}
                  </a-descriptions-item>
                  <a-descriptions-item label="角色ID">
                    {{item.tx_info.role_id}}
                  </a-descriptions-item>
                  <a-descriptions-item label="曾用名">
                    <div v-if="item.p_names?.length > 0">
                      <a-tag v-for="pn in item.p_names" :key="pn" color="arcoblue" style="margin-right: 5px">{{pn}}</a-tag>
                    </div>
                    <div v-else>
                      <a-tag color="arcoblue">-</a-tag>
                    </div>
                  </a-descriptions-item>
                </a-descriptions>
              </div>
              <div v-else style="min-height: 100px">
                <a-empty description="暂无数据" />
              </div>
<!--
            <div style="display: flex">
                <div class="item-left">
                  {{index+1}}. {{item.name}}
                </div>
                <div class="item-right">

                </div>
              </div>
              -->
            </a-collapse-item>
          </a-collapse>


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
:deep(.arco-list-item){
  padding: 0!important;
}
:deep(.arco-collapse-item-content){
  padding-left: 10px;
}
</style>