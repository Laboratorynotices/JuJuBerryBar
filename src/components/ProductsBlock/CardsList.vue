<script setup lang="ts">
import ListItem from "./ListItem.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const cardsData = [
  {
    title_ru: "Дзен ягод",
    title_de: "Beeren Zen",
    description_ru: "Спокойствие: лаванда и асаи",
    description_de: "Sanfte Mischung mit Lavendel & Açaí",
    image: "berry-zen.png",
    price_ru: 589,
    price_de: 5.99,
    volume: "330ml",
  },
  {
    title_ru: "Цитрусное топливо",
    title_de: "Zitrus-Kraftstoff",
    description_ru: "Заряд энергии: цитрус и гуарана",
    description_de: "Energie-Kick mit Zitrus & Guarana",
    image: "citrus-fuel.png",
    price_ru: 589,
    price_de: 5.99,
    volume: "330ml",
  },
  {
    title_ru: "Зеленое сияние",
    title_de: "Grünes Glühen",
    description_ru: "Детокс: капуста кейл и киви",
    description_de: "Detox-Smoothie mit Grünkohl & Kiwi",
    image: "green-glow.png",
    price_ru: 589,
    price_de: 5.99,
    volume: "330ml",
  },
  {
    title_ru: "Медовый холодок",
    title_de: "Honig-Kälte",
    description_ru: "Расслабляющий сорбет с ягодами и мёдом",
    description_de: "Entspannendes Sorbet mit Beeren & Honig",
    image: "honey-chill.png",
    price_ru: 589,
    price_de: 5.99,
    volume: "330ml",
  },
];

// Функция для получения локализованного значения
const getLocalizedValue = (obj: any, key: string): string => {
  return obj[`${key}_${locale.value}`];
};
</script>

<template>
  <ul class="products__cards cards-list">
    <ListItem
      v-for="(card, index) in cardsData"
      :key="index"
      :title="getLocalizedValue(card, 'title')"
      :description="getLocalizedValue(card, 'description')"
      :image="card.image"
      :price="`${getLocalizedValue(card, 'price')}${locale === 'ru' ? '₽' : '€'}`"
      :volume="card.volume"
    />
  </ul>
</template>
