<template>
  <div class="scene-bar">
    <div class="scene-item">
      <span class="icon">🕐</span>
      <span>{{ store.stat_data.系统.星期 }} · {{ store.stat_data.系统.当前时间 }}</span>
    </div>
    <div class="scene-item">
      <span class="icon">📍</span>
      <span>{{ store.stat_data.系统.当前场景 }}</span>
    </div>
    <div class="scene-item muted">
      <span class="icon">💭</span>
      <span>{{ store.stat_data.用户.所在地及行动 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { useDataStore } from '../store';

defineProps<{
  store: ReturnType<typeof useDataStore>;
}>();
</script>

<style lang="scss" scoped>
.scene-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  background: var(--c-card);
  border: 1px solid var(--c-card-border);
  border-radius: 8px;
  padding: 10px 14px;
  backdrop-filter: blur(8px);
}

.scene-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--c-text);

  &.muted {
    color: var(--c-text-muted);
    font-size: 11px;
  }
}

.icon {
  font-size: 13px;
  line-height: 1;
}
</style>
