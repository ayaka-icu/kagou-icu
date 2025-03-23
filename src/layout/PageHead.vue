<template>
  <div class="page-head">
<!--    <div class="url-item" v-for="item in goList" :key="item">
      {{item.name}}
    </div>-->
    <a-radio-group
        v-model="typeId"
        type="button"
        size="large"
        @change="changeType"
        style="width: 100%;height: 50px"
    >
      <a-radio
          v-for="item in goList"
          :key="item"
          :value="item.id"
          style="width: 25%"
      >
        <div class="item-title">
          {{item.name}}
        </div>
      </a-radio>
    </a-radio-group>
  </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter()
const emits = defineEmits(['changeType'])

const typeId = ref(1);
const goList = ref([
  {
    id: 1,
    name: '卡狗🐕榜',
  },
  {
    id: 2,
    name: '至死不渝👑',
  },
  {
    id: 3,
    name: '述官网📢',
  },
  {
    id: 4,
    name: '碎碎念💖',
  },
])
const changeType = (item) => {
  typeId.value = item
  emits('changeType', item)
}
defineExpose({changeType})
</script>
<style lang="scss" scoped>
.page-head {
  padding: 5px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  /*background-color: #f5f5f5;*/
  /*height: 60px;*/
  .url-item{
    height: 50px;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    /*边框*/
    border: 1px solid #3db446;
  }
  .item-title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
  }
}
:deep(.arco-radio-button-content){
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
}
:deep(.arco-radio-button.arco-radio-checked){
  color: #f8f8f8;
  background-color: #3db446;
}
</style>