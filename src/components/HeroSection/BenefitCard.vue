<script setup lang="ts">
import type { BenefitProps } from "@/types/benefits";

const props = defineProps<BenefitProps>();

// Алиас "@" здесь не работает, потому что строка формируется динамически,
// и Vite не может разрешить её на этапе сборки.
// В отличие от статических import'ов, строковые пути не проходят через систему алиасов.
// Поэтому используем относительный путь к текучему файлу.
// Альтернатива - использование import.meta.glob
const imgSrc: string = new URL(
  `../../assets/imgs/Hero/benefits/${props.icon}`,
  import.meta.url,
).href;
</script>

<template>
  <div class="card-icon">
    <div class="card-icon-decoration img-circle-bg">
      <img :src="imgSrc" :alt="$t(props.title)" />
    </div>
  </div>
  <div class="card-title">
    {{ $t(props.title) }}
  </div>
  <div class="card-description">
    {{ $t(props.description) }}
  </div>
</template>
