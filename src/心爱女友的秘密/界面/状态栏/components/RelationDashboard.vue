<template>
  <div class="card">
    <div class="card-title">
      <span>💋</span>
      <span>关系仪表盘</span>
    </div>
    <div class="dual-bars">
      <div class="bar-row">
        <div class="bar-label">
          <span class="heart">♥</span>
          <span>亲密度</span>
          <span class="bar-value">{{ store.stat_data.严依伊.亲密度 }}</span>
        </div>
        <div class="bar-track">
          <div
            class="bar-fill bar-love"
            :style="{ width: intimacyPercent + '%' }"
          ></div>
        </div>
      </div>
      <div class="bar-row">
        <div class="bar-label">
          <span class="skull">♦</span>
          <span>堕落值</span>
          <span class="bar-value">{{ store.stat_data.严依伊.堕落值 }}</span>
        </div>
        <div class="bar-track">
          <div
            class="bar-fill bar-corruption"
            :style="{ width: corruptionPercent + '%' }"
          ></div>
        </div>
      </div>
      <div class="gap-indicator" v-if="gap > 0">
        她爱你，但另一个人正在她身上打下烙印
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { useDataStore } from '../store';

const props = defineProps<{
  store: ReturnType<typeof useDataStore>;
}>();

const intimacyPercent = computed(() => (props.store.stat_data.严依伊.亲密度 ?? 0) / 100 * 100);
const corruptionPercent = computed(() => (props.store.stat_data.严依伊.堕落值 ?? 0) / 100 * 100);
const gap = computed(() => (props.store.stat_data.严依伊.亲密度 ?? 0) - (props.store.stat_data.严依伊.堕落值 ?? 0));
</script>

<style lang="scss" scoped>
.dual-bars {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bar-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.bar-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--c-text);
}

.heart {
  color: var(--c-love);
  font-size: 14px;
}

.skull {
  color: var(--c-corruption);
  font-size: 14px;
}

.bar-value {
  margin-left: auto;
  font-weight: 600;
  font-size: 13px;
  color: var(--c-text);
}

.bar-track {
  height: 8px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease;
}

.bar-love {
  background: linear-gradient(90deg, #f472b6, #ff6b9d, #fb7185);
}

.bar-corruption {
  background: linear-gradient(90deg, #6d28d9, #8b5cf6, #a78bfa);
}

.gap-indicator {
  text-align: center;
  font-size: 11px;
  color: var(--c-text-muted);
  padding: 6px 0 2px;
  border-top: 1px solid var(--c-divider);
  margin-top: 4px;
  font-style: italic;
}
</style>
