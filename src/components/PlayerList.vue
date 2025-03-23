<template>
  <div>
    <a-list>
      <template #header>
        {{ props.title }}
      </template>
      <a-list-item v-for="(item, index) in props.list" :key="index">
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
          更多请联系QQ群: 555080859
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  list: {
    type: Array,
    default: () => []
  }
})
</script>
<style scoped>
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
</style>