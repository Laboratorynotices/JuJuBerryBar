<script setup lang="ts">
import type { FooterNavigationItem } from "@/types/footerNavigation";

const props = defineProps<{
  navigation: FooterNavigationItem[];
}>();
</script>

<template>
  <nav>
    <ul class="footer-section__navigation-list navigation-list">
      <li v-for="(item, id) in props.navigation" :key="id">
        <a :href="item.href">{{ $t(item.name) }}</a>
        <ul
          class="footer-section__subnavigation-list subnavigation-list"
          v-if="item.subNavigation && item.subNavigation.length"
        >
          <li v-for="(subItem, subId) in item.subNavigation" :key="subId">
            <a :href="subItem.href">{{ $t(subItem.name) }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
