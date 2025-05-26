<script setup lang="ts">
import { computed } from "vue";
import { ButtonVariant } from "@/constants/button";
import type { AppButtonProps } from "@/types/button";

const props = defineProps<AppButtonProps>();

// Проверка: если href задан, то as должен быть либо 'a', либо не задан вообще
if (props.href && props.as && props.as !== "a") {
  throw new Error(
    `[AppButton] Invalid props: when "href" is provided, "as" must be "a" or undefined (got "${props.as}")`,
  );
}

// Определяем, какой элемент будет использоваться для кнопки
const asComputed = computed(() => {
  if (props.as) return props.as;
  if (props.href) return "a";
  return "span";
});

// Общие классы для всех вариантов кнопки
const baseClasses = "app-button";

// Классы для конкретного варианта кнопки
const variantClasses = computed(() => {
  switch (props.variant) {
    case ButtonVariant.Primary:
      return "primary";
    case ButtonVariant.Secondary:
      return "secondary";
    case ButtonVariant.CardBtn:
      return "cardBtn";
    default:
      const exhaustiveCheck: never = props.variant;
      throw new Error(
        `[AppButton] Invalid variant: ${exhaustiveCheck}. Expected one of ${Object.values(
          ButtonVariant,
        ).join(", ")}`,
      );
  }
});
</script>

<template>
  <component
    :is="asComputed"
    :href="asComputed === 'a' ? href || '#' : undefined"
    :class="[baseClasses, variantClasses]"
  >
    <slot />
  </component>
</template>
