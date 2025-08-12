<script setup lang="ts">
/* Импортируем основные части (компоненты) сайта */
import AppHeader from "./components/AppHeader/AppHeader.vue";
import HeroSection from "./components/HeroSection/HeroSection.vue";
import DeliciousBlock from "./components/DeliciousBlock/DeliciousBlock.vue";
import ProductsBlock from "./components/ProductsBlock/ProductsBlock.vue";
import EventsBlock from "./components/EventsBlock/EventsBlock.vue";
import ContactsBlock from "./components/ContactsBlock/ContactsBlock.vue";
import AppFooter from "./components/AppFooter/AppFooter.vue";
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
</template>
