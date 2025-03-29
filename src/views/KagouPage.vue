<script setup>

import {ref} from "vue";
import {KagouList} from "@/data/KagouList.js";
import {copyToClipboard} from "@/utils/CopyUtils.js";
import {Message} from "@arco-design/web-vue";

let explain = "\n" +
    "// =================说明=================\n" +
    "// name: 卡狗名称\n" +
    "// type: 卡狗类型\n" +
    "// tx_info: 卡狗信息\n" +
    "// user_id: 用户ID\n" +
    "// role_id: 角色ID\n" +
    "// role_name: 角色名称\n" +
    "// p_names: 曾用名\n" +
    "// 另外，腾讯游戏ID，gameid = 1112205058\n" +
    "// 更多请关注网站：kagou.icu\n" +
    "// =====================================\n\n";



const getColor = (type) => {
    if (type === "卡玩家") {
        return "arcoblue"
    } else if (type === "卡在线") {
        return "red"
    } else {
        return "purple"
    }
}
const copyUserInfo = (index, msg) => {
  if (index === undefined){
    copyToClipboard(explain + objToJsonFormat(KagouList), "已复制 所有卡狗信息喽！");
  }else {
    let kagouListElement = KagouList[index];
    copyToClipboard(objToJsonFormat(kagouListElement), "已复制 卡狗 [ "+KagouList[index].name+" ] 的信息喽！");
  }
}

const downloadUserInfo = (index) => {
  let kagouListElement;
  let name;
  let msg;
  if (index === undefined){
    kagouListElement = KagouList
    name = "卡狗集合"
    msg = "已下载 所有卡狗信息喽！"
  }else {
    kagouListElement = KagouList[index]
    name = kagouListElement.name
    msg = "已下载 卡狗 ["+name+"] 的信息喽！"
  }
  let json = objToJsonFormat(kagouListElement, true)
  let a = document.createElement("a");
  let url = URL.createObjectURL(new Blob([explain + json], {type: "text/plain"}));
  a.href = url;
  a.download = name + ".json";
  a.click();
  URL.revokeObjectURL(url);
  Message.success(msg);
}

const objToJsonFormat = (obj, qm) => {
  if (qm){
    return JSON.stringify(obj, null, 2)
  }else {
    return JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, '$1:')
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
          <div style="width: 100%;height: 30px;display: flex">
            <div class="item-left-title">
              卡狗🐕榜 <icon-thumb-down size="16"/>
            </div>
            <div class="item-right">
              <a-link @click="copyUserInfo(undefined, '已复制卡狗信息喽！')"><icon-copy size="20" style="color: #168cff"/></a-link>
              <a-link @click="downloadUserInfo()"><icon-download size="20" style="color: #168cff"/></a-link>
              <!--                        <a-link><icon-copy size="20" style="color: #168cff"/></a-link>-->
            </div>
          </div>
        </template>
        <a-list-item >
          <a-collapse accordion>
            <a-collapse-item v-for="(item, index) in kagouList" :key="index" :header="item.name" key="1">
              <template #extra>
                <a-tag v-for="(it, inx) in item.type" :key="it" checkable :color="getColor(it)" :default-checked="true" size="small" style="margin-left: 5px">
                  🐕{{it}}
                </a-tag>
              </template>
              <div v-if="item.tx_info.user_id">
                <a-descriptions title="卡狗信息" bordered :column="1" size="mini">
                  <template #title>
                    <div style="display: flex">
                      <div class="item-left">
                        🐕卡狗信息 <icon-thumb-down size="16"/>
                      </div>
                      <div class="item-right">
                        <a-link @click="copyUserInfo(index)"><icon-copy size="20" style="color: #168cff"/></a-link>
                        <a-link @click="downloadUserInfo(index)"><icon-download size="20" style="color: #168cff"/></a-link>
<!--                        <a-link><icon-copy size="20" style="color: #168cff"/></a-link>-->
                      </div>
                    </div>
                  </template>
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
.item-left-title{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
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
:deep(.arco-descriptions-title){
  font-size: 12px;
}
:deep(.arco-descriptions-size-mini.arco-descriptions-border .arco-descriptions-item-label-block, .arco-descriptions-size-mini.arco-descriptions-border .arco-descriptions-item-value-block) {
  padding: 3px 10px;
  color: #007bff;
  background: rgb(232, 247, 255);
}
</style>