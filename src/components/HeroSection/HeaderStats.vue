<script setup lang="ts">
import StatsElement from "./StatsElement.vue";

const statsData = [
  {
    value: "9k",
    label: "Premium Users",
  },
  {
    value: "2k",
    label: "Happy Customer",
  },
  {
    value: "28",
    label: "Awards Winning",
  },
];
</script>

<template>
  <ul class="hero-section__stats-list stats-list">
    <StatsElement
      v-for="(item, index) in statsData"
      :key="index"
      :Value="item.value"
      :Label="$t(item.label)"
    />
  </ul>
</template>
