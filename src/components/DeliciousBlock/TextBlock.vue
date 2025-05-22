<script setup lang="ts">
import HeadingPrimary from "@/components/ui/HeadingPrimary.vue";
</script>

<template>
  <div class="delicious-section__text-block__wrapper text-block-wrapper">
    <HeadingPrimary
      class="delicious-section__text-block__heading header flashed"
      :text="$t('A habit on berries')"
      markedWords="1"
    />
    <p class="delicious-section__text-block__text text">
      {{
        $t(
          "In 2024 alone, we crafted over 100,000 berry-based drinks and snacks for you, your friends, and your mornings. And in 2025, we're ready to boost your energy — naturally, deliciously, daily.",
        )
      }}
    </p>
    <div class="delicious-section__text-block__image-wrapper image-wrapper">
      <div class="branch-decorated img-decoration">
        <img
          class="custom-clip-default md:custom-clip-md"
          src="@/assets/imgs/Delicious/counter.png"
        />
      </div>
    </div>
  </div>
</template>
