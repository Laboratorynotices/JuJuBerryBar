<script setup lang="ts">
import HeadingPrimary from "@/components/ui/HeadingPrimary.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<template>
  <div class="products__description description">
    <HeadingPrimary
      class="delicious-section__text-block__heading header flashed"
      :text="$t('New Berry Boosts')"
      :markedWords="locale === 'de' ? 1 : 2"
    />
    <p>
      {{
        $t(
          "Try the most balanced and refreshing drinks from JuJu Berry — crafted for your mood, your body, your rhythm. And yes, don’t miss the special offer!",
        )
      }}
    </p>
  </div>
</template>
