<script setup lang="ts">
import BenefitCard from "./BenefitCard.vue";
import type { BenefitProps } from "@/types/benefits";

const benefitsData: BenefitProps[] = [
  {
    title: "Tasty",
    description:
      "Experience the rich, refreshing taste of berries in every sip",
    icon: "heart.png",
  },
  {
    title: "Fast",
    description: "Grab your berry boost on the go — quick, easy, energizing",
    icon: "rocket.png",
  },
  {
    title: "Available",
    description:
      "Enjoy daily wellness with affordable berry-based drinks and snacks",
    icon: "money.png",
  },
];
</script>

<template>
  <div class="benefits-wrapper">
    <div class="benefits-star">
      {{ $t("We have") }}
    </div>
    <div class="benefits-container flashed">
      <div
        class="benefits-item benefit-card"
        v-for="(benefitElement, index) in benefitsData"
        :key="index"
      >
        <BenefitCard
          :title="benefitElement.title"
          :description="benefitElement.description"
          :icon="benefitElement.icon"
        />
      </div>
    </div>
  </div>
</template>
