<template>
  <div class="status-bar">
    <SceneBar :store="store" />
    <div class="cards-grid">
      <CorruptionTracker :store="store" />
      <RelationDashboard :store="store" />
      <DailySecret :store="store" />
      <PsychProfile :store="store" />
      <SecretList :store="store" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from './store';
import SceneBar from './components/SceneBar.vue';
import CorruptionTracker from './components/CorruptionTracker.vue';
import RelationDashboard from './components/RelationDashboard.vue';
import DailySecret from './components/DailySecret.vue';
import PsychProfile from './components/PsychProfile.vue';
import SecretList from './components/SecretList.vue';
import './global.css';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.status-bar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.cards-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
