<script setup lang="ts">
import HeadingPrimary from "@/components/ui/HeadingPrimary.vue";
import BtnLinks from "./BtnLinks.vue";
import HeaderStats from "./HeaderStats.vue";
</script>

<template>
  <div class="hero-section__text-block text-block">
    <HeadingPrimary
      class="hero-section__heading flashed"
      :text="$t('New Cafe by Juju Berry')"
    />

    <p class="hero-section__text">
      {{
        $t(
          "Don't miss your chance to enjoy the most harmonious drinks at the new JuJu Berry café — and don’t forget your discount!",
        )
      }}
    </p>

    <BtnLinks />

    <HeaderStats />
  </div>
</template>
