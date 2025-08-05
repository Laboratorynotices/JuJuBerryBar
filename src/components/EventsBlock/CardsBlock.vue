<script setup lang="ts">
import AppButton from "@/components/ui/AppButton.vue";
import { ButtonVariant } from "@/constants/button";

/*
 * Список карточек для блока событий
 * @type {Array<{ title: string }>}
 */
const cardsList = [
  {
    title: "Two Juices — One Price",
  },
  {
    title: "Juice Club Rewards",
  },
  {
    title: "Find Us on Socials",
  },
  {
    title: "Why You Choose Berry?",
  },
  {
    title: "Behind the Berry Bar",
  },
];

// Проверяет нечётное ли количество карточек
const isOdd = cardsList.length % 2 !== 0;

// Индекс предпоследней карточки
const secondLastIndex = cardsList.length - 2;
</script>

<template>
  <ul class="events-section__cards cards-list">
    <li
      v-for="(card, index) in cardsList"
      :key="index"
      class="events-section__card card-item"
      :class="[
        `card-item--${index + 1}`,
        isOdd && index === secondLastIndex ? 'md-hidden' : '',
      ]"
    >
      <h3 class="card-item__title">{{ $t(card.title) }}</h3>
      <div class="card-item__button-wrapper">
        <AppButton
          class="card-item__button"
          :variant="ButtonVariant.EventCard"
          href="#"
          >{{ $t("More") }}</AppButton
        >
      </div>
    </li>
  </ul>
</template>
