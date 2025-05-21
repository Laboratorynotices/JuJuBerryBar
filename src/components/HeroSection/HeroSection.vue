<script setup lang="ts">
import TextBlock from "./TextBlock.vue";
import BenefitsSection from "./BenefitsSection.vue";
</script>

<template>
  <article class="wrap-container hero-section">
    <div class="hero-section__image img-wrapper">
      <div class="hero-section__image-decoration img-decoration flashed">
        <img src="@/assets/imgs/Hero/Hero-Image.png" alt="Hero Image" />
      </div>
    </div>

    <TextBlock />
  </article>

  <article class="wrap-container benefits-section">
    <BenefitsSection />
  </article>
</template>
