<script setup lang="ts">
import { useI18n } from "vue-i18n";

import { setLocale } from "../../i18n";
const { locale } = useI18n();

async function switchLocale() {
  const newLocale = locale.value === "de" ? "ru" : "de";
  await setLocale(newLocale);
}
</script>

<template>
  <button
    @click="switchLocale"
    :aria-label="$t('switch language')"
    :title="$t('switch language')"
    type="button"
  >
    <img
      v-if="locale === 'de'"
      src="../../assets/imgs/locale/de.webp"
      alt="de"
      :title="$t('switch to ru')"
    />
    <img
      v-else
      src="../../assets/imgs/locale/ru.webp"
      alt="ru"
      :title="$t('switch to de')"
    />
  </button>
</template>

<style lang="css" scoped>
img {
  height: clamp(18px, 3vw, 30px);
  width: clamp(24px, 4vw, 40px);
}
</style>
