<template>
  <div class="card">
    <div class="card-title">
      <span>🧠</span>
      <span>心理剖面</span>
    </div>
    <div class="profile-grid">
      <div class="profile-item">
        <div class="profile-label">情绪</div>
        <div class="profile-value">{{ store.stat_data.严依伊.情绪 || '—' }}</div>
      </div>
      <div class="profile-item">
        <div class="profile-label">内心想法</div>
        <div class="profile-value">{{ store.stat_data.严依伊.内心想法 || '—' }}</div>
      </div>
      <div class="profile-item">
        <div class="profile-label">对你的看法</div>
        <div class="profile-value">{{ store.stat_data.严依伊.对用户的看法 || '—' }}</div>
      </div>
      <div class="profile-item suspicion">
        <div class="profile-label">你的怀疑程度</div>
        <div class="profile-value">{{ store.stat_data.用户.怀疑程度 || '无' }}</div>
      </div>
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
.profile-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.profile-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.profile-label {
  font-size: 11px;
  color: var(--c-text-muted);
}

.profile-value {
  font-size: 12px;
  color: var(--c-text);
  line-height: 1.5;
}

.suspicion .profile-value {
  color: var(--c-warning);
}
</style>
