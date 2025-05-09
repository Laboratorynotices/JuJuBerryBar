<script setup lang="ts">
/* Импортируем основные части сайта */
import AppHeader from "./components/AppHeader/AppHeader.vue";
import HeroSection from "./components/HeroSection/HeroSection.vue";
import DeliciousBlock from "./components/DeliciousBlock/DeliciousBlock.vue";
import ProductsBlock from "./components/ProductsBlock/ProductsBlock.vue";
import EventsBlock from "./components/EventsBlock/EventsBlock.vue";
import ContactsBlock from "./components/ContactsBlock/ContactsBlock.vue";
import AppFooter from "./components/AppFooter/AppFooter.vue";

/* Блок переключения языка */
import { useI18n } from "vue-i18n";

import { setLocale } from "./i18n";
const { locale } = useI18n();

async function switchLocale() {
  const newLocale = locale.value === "de" ? "ru" : "de";
  await setLocale(newLocale);
}
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <DeliciousBlock />
    <ProductsBlock />
    <EventsBlock />
    <ContactsBlock />
  </main>
  <AppFooter />

  <div>
    <p>{{ $t("hello") }}</p>
    <button @click="switchLocale">Switch language</button>
  </div>
</template>
