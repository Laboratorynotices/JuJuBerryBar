<script setup lang="ts">
import AppButton from "@/components/ui/AppButton.vue";
import { ButtonVariant } from "@/constants/button";
</script>

<template>
  <div class="hero-section__links links">
    <AppButton
      class="hero-section__primary-btn"
      :variant="ButtonVariant.Primary"
      href="#"
      >{{ $t("Select a drink") }}</AppButton
    >
    <AppButton
      class="hero-section__secondary-btn"
      :variant="ButtonVariant.Secondary"
      href="#"
      >{{ $t("More") }}</AppButton
    >
  </div>
</template>
