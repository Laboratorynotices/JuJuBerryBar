<script setup lang="ts">
import AppButton from "@/components/ui/AppButton.vue";
import { ButtonVariant } from "@/constants/button";

// Получаем данные из родительского компонента
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
    required: true,
  },
});

// Алиас "@" здесь не работает, потому что строка формируется динамически,
// и Vite не может разрешить её на этапе сборки.
// В отличие от статических import'ов, строковые пути не проходят через систему алиасов.
// Поэтому используем относительный путь к текучему файлу.
// Альтернатива - использование import.meta.glob, но тогда загружаются все картинки из папки
const imgSrc: string = new URL(
  `../../assets/imgs/Products/${props.image}`,
  import.meta.url,
).href;
</script>

<template>
  <li class="products__item cards-item">
    <div class="products__card card">
      <div
        class="products__card-image-decoration image-decoration img-circle-bg"
      >
        <img
          :src="imgSrc"
          :alt="props.title"
          class="products__card-image card-image"
          loading="lazy"
        />
      </div>
      <p class="products__card-title card-title">{{ props.title }}</p>
      <p class="products__card-description card-description">
        {{ props.description }}
      </p>
      <div class="products__card-price-group card-price-group">
        <span class="card-price">{{ props.price }}</span>
        <span class="card-volume">{{ props.volume }}</span>
      </div>
      <div class="products__btn-wrapper">
        <AppButton
          class="products__buy-btn card-btn"
          :variant="ButtonVariant.CardBtn"
          href="#"
          >{{ $t("Buy") }}</AppButton
        >
      </div>
    </div>
  </li>
</template>
