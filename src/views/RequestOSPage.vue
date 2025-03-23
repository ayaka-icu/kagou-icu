<script setup>
const emits = defineEmits(['goKagouList'])
const goKagouList = () => {
  emits('goKagouList')
}

</script>

<template>
<div>
  <a-alert :show-icon="false" title="告诫《海岛奇兵》国服官网" style="margin-bottom: 5px">
    <div style="line-height: 10px">
      <p>假如你能看到此站 ......</p>
      <p>假如你能有所行动 ......</p>
      <p>请修复bug，封禁利用bug或使用外挂的玩家！</p>
    </div>
  </a-alert>
  <a-card title="我的建议">
    <template #extra>
      <a-link>Advice</a-link>
    </template>
    <p class="text-area">&emsp;&emsp;作为一名十年海岛老玩家，经历过陪伴日日夜夜的队友离去，经历过点点滴滴与时间的流逝，这是大家的海岛🏝，也是我们的逝去青春，也是新玩家青春的开始。</p>
    <p class="text-area">&emsp;&emsp;然而，在目前的情况下，海岛奇兵的游戏环境非常差，某些玩家<span style="color: red">利用bug、外挂</span>横行霸道，这不仅对游戏的长期发展带来的灾难的印象，更是对那些热爱、坚守公平的那些玩家带来的伤害！</p>

    <div style="font-size: 16px;font-weight: bold;margin: 5px">对此，我有以下几点建议：</div>

    <div>
      <a-collapse>
        <a-collapse-item header="# 修复卡在线bug。" key="1">
          <div>
            利用『变速齿轮』调慢时间，攻击NPC或被攻击等，从而保持24小时在线，其他玩家无法进行攻击。
          </div>
        </a-collapse-item>
        <a-collapse-item header="# 封禁卡bug开挂的高杯榜玩家，并回调奖杯" key="2">
          <div>考虑到国服运营情况，请对<span style="color: red">高杯榜卡bug、开挂玩家，进行封禁，并回调他们的奖杯！</span></div>
          <div>特别是这些：<a-link @click="goKagouList">点击跳转</a-link></div>
          不管封多久，请务必回调他们的奖杯！
        </a-collapse-item>
        <a-collapse-item header="# 每周末预告下周原型武器" key="3">
          <div>提前预告下周原型武器，指挥官可以更好的策划防御黑暗卫队的入侵！</div>
        </a-collapse-item>
        <a-collapse-item header="# 为那些至死不渝的指挥官们献上祝福" key="3">
          <template #header>
            # 为那些<span style="color: #FFD700">至死不渝</span>的指挥官们献上祝福
          </template>
          <div>也许他们早已拥有了攀登之巅的资格，不管道路如何艰难，不忘初心，勇于挑战，这便是『<span style="color: #FFD700">至死不渝</span>』！</div>
          <div>为那些<span style="color: #FFD700">至死不渝</span>的指挥官们献上祝福！</div>
        </a-collapse-item>
      </a-collapse>
    </div>

    <p class="text-area">&emsp;&emsp;让我们携手共进打造一个绿色、健康的游戏环境！好的游戏环境才能带动用户消费的热情！不要因为那些毒瘤，而损失更多的利益！不管是游戏的收入，还是你们现在的职责......</p>
    <p class="text-area">不管怎么样，但愿海岛长存🏝😊！</p>
  </a-card>
</div>
</template>

<style scoped>
.text-area {
  line-height: 18px;
}
:deep(.arco-card-size-medium .arco-card-header){
  height: 54px;
  /*padding: 10px 16px;*/
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
}
</style>