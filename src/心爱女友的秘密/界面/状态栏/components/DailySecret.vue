<template>
  <div class="card">
    <div class="card-title">
      <span>🔍</span>
      <span>今日隐秘行为</span>
      <span class="tag">仅玩家可见</span>
    </div>
    <div class="secret-content">
      <div v-if="behaviors.length" class="timeline">
        <div v-for="(line, i) in behaviors" :key="i" class="timeline-item">
          <div class="timeline-dot"></div>
          <span class="timeline-text">{{ line }}</span>
        </div>
      </div>
      <div v-else class="empty-state">暂无隐秘行为记录</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { useDataStore } from '../store';

const props = defineProps<{
  store: ReturnType<typeof useDataStore>;
}>();

const behaviorText = computed(() => props.store.stat_data.隐秘日志?.今日行为 ?? '');
const behaviors = computed(() =>
  behaviorText.value
    .split('\n')
    .map(s => s.trim())
    .filter(Boolean)
);
</script>

<style lang="scss" scoped>
.tag {
  margin-left: auto;
  font-size: 10px;
  color: var(--c-warning);
  background: rgba(245, 158, 11, 0.1);
  padding: 1px 6px;
  border-radius: 3px;
  text-transform: none;
  letter-spacing: 0;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  line-height: 1.5;
}

.timeline-dot {
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-corruption);
  margin-top: 6px;
}

.timeline-text {
  color: var(--c-text);
  word-break: break-all;
}

.empty-state {
  text-align: center;
  color: var(--c-text-muted);
  font-size: 12px;
  padding: 8px 0;
}
</style>
