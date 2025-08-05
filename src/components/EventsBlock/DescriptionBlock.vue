<script setup lang="ts">
import HeadingPrimary from "@/components/ui/HeadingPrimary.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<template>
  <div class="events-section__description description">
    <HeadingPrimary
      class="events-section__heading header"
      :text="$t('New Berry Moments')"
      :markedWords="locale === 'de' ? 1 : 2"
    />
    <p class="events-section__text text flashed branch-decorated">
      {{
        $t(
          "In 2024, we shared over 100,000 berry drinks and smiles with you. In 2025, we’re preparing even more — new events, new rituals, new reasons to enjoy berries together.",
        )
      }}
    </p>
  </div>
</template>
