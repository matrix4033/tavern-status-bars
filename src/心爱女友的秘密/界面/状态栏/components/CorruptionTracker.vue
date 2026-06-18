<template>
  <div class="card">
    <div class="card-title">
      <span>😈</span>
      <span>堕落追踪</span>
      <span class="phase-tag">{{ stageLabel }}</span>
    </div>
    <div class="bar-container">
      <div
        class="bar-fill"
        :style="{ width: corruptionPercent + '%' }"
      ></div>
      <div
        v-for="t in thresholds"
        :key="t.value"
        class="threshold-marker"
        :style="{ left: t.percent + '%' }"
      ></div>
    </div>
    <div class="bar-labels">
      <span class="bar-value">堕落值 {{ store.stat_data.严依伊.堕落值 }}/100</span>
      <span class="bar-next" v-if="nextStage">距「{{ nextStage.label }}」还需 {{ nextStage.needed }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { useDataStore } from '../store';

const props = defineProps<{
  store: ReturnType<typeof useDataStore>;
}>();

const stages = [
  { max: 15, label: '公开驯服' },
  { max: 35, label: '私密驯服' },
  { max: 55, label: '远程调教' },
  { max: 80, label: '越界双轨' },
  { max: 100, label: '完全沉沦' },
];

const corruption = computed(() => props.store.stat_data.严依伊.堕落值 ?? 0);
const corruptionPercent = computed(() => (corruption.value / 100) * 100);

const thresholds = computed(() =>
  stages.map(s => ({ value: s.max, percent: (s.max / 100) * 100 }))
);

const stageLabel = computed(() => {
  const v = corruption.value;
  if (v <= 15) return '阶段一';
  if (v <= 35) return '阶段二';
  if (v <= 55) return '阶段三';
  if (v <= 80) return '阶段四';
  return '阶段五';
});

const currentStageIdx = computed(() => {
  const v = corruption.value;
  if (v <= 15) return 0;
  if (v <= 35) return 1;
  if (v <= 55) return 2;
  if (v <= 80) return 3;
  return 4;
});

const nextStage = computed(() => {
  const idx = currentStageIdx.value;
  if (idx >= 4) return null;
  const next = stages[idx + 1];
  return { label: next.label, needed: next.max - corruption.value + 1 };
});
</script>

<style lang="scss" scoped>
.phase-tag {
  margin-left: auto;
  font-size: 11px;
  font-weight: 500;
  color: var(--c-corruption);
  background: var(--c-corruption-glow);
  padding: 1px 8px;
  border-radius: 4px;
}

.bar-container {
  height: 8px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  position: relative;
  margin-bottom: 6px;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #6d28d9, #8b5cf6, #a78bfa);
  border-radius: 4px;
  transition: width 0.6s ease;
  position: relative;
  z-index: 1;
}

.threshold-marker {
  position: absolute;
  top: -2px;
  width: 2px;
  height: 12px;
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-50%);
  z-index: 2;
}

.bar-labels {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
}

.bar-value {
  color: var(--c-corruption);
  font-weight: 500;
}

.bar-next {
  color: var(--c-text-muted);
}
</style>
