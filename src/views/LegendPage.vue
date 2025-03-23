<script setup>
import {ref} from "vue";

const legendList = ref([
    '心动给予晚霞✨',
    '子龙无我',
    '我的名字',
    '绫华🌸网站kagou.icu',
    'Technology',
    '灵脉佳音🌠凝瑞气👑定山海',
    '少年何妨梦摘星，敢挽槡弓射玉衡',
    '一七🧡东军🌇',
    'Kasugano Sora',
    'CUHK理塘丁真',
    '小熊猫',
    '......'
])
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
          <div style="width: 100%;height: 30px;">
            绿玩榜
          </div>
        </template>
        <a-list-item v-for="(item, index) in legendList" :key="index">
          <div style="display: flex">
            <div class="item-left">
              {{index+1}}. {{item}}
            </div>
<!--            <div class="item-right">
              <a-tag checkable :color="item.color??'red'" :default-checked="true" size="large">
                🐕{{item.type}}
              </a-tag>
            </div>-->
          </div>
        </a-list-item>
        <a-list-item>
          <div style="float: right">
            更多请联系QQ群: 555080859
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