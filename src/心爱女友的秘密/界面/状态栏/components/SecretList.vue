<template>
  <div class="card">
    <div class="card-title" @click="expanded = !expanded" style="cursor: pointer">
      <span>🤫</span>
      <span>保密清单</span>
      <span class="toggle">{{ expanded ? '▼' : '▶' }}</span>
    </div>
    <div v-if="expanded" class="secret-list">
      <div v-if="items.length" class="list-items">
        <div v-for="(item, i) in items" :key="i" class="list-item">
          <span class="lock">🔒</span>
          <span>{{ item }}</span>
        </div>
      </div>
      <div v-else class="empty-state">暂无保密事项</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { useDataStore } from '../store';

const props = defineProps<{
  store: ReturnType<typeof useDataStore>;
}>();

const expanded = ref(true);

const items = computed(() => {
  const text = props.store.stat_data.隐秘日志?.保密事项 ?? '';
  return text
    .split('\n')
    .map(s => s.trim())
    .filter(Boolean);
});
</script>

<style lang="scss" scoped>
.toggle {
  margin-left: auto;
  font-size: 10px;
  color: var(--c-text-muted);
}

.secret-list {
  margin-top: 4px;
}

.list-items {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.list-item {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 12px;
  color: var(--c-text);
  line-height: 1.5;
}

.lock {
  flex-shrink: 0;
  font-size: 11px;
  line-height: 1.5;
}

.empty-state {
  text-align: center;
  color: var(--c-text-muted);
  font-size: 12px;
  padding: 4px 0;
}
</style>
