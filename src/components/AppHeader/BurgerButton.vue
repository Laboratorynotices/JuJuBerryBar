<script setup lang="ts">
// Определяем пропсы для компонента
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <button
    id="burger-button"
    class="w-7.5 h-7.5 flex flex-col justify-between place-items-end overflow-hidden focus:outline-none md:hidden z-20"
    :class="isOpen ? 'fixed right-[24px]' : 'relative'"
    aria-label="Меню"
  >
    <!-- Три полоски, которые превращаются в крестик -->
    <!-- Верхняя полоска -->
    <span
      class="h-0.5 bg-neutral-high rounded-sm transition-transform origin-[right_center] duration-300"
      :class="isOpen ? '-rotate-45 w-[130%]' : 'w-full'"
    ></span>

    <!-- Средняя полоска -->
    <span
      class="h-0.5 bg-neutral-high rounded-sm w-full transition-opacity duration-300"
      :class="isOpen ? 'opacity-0' : 'opacity-100'"
    ></span>

    <!-- Нижняя полоска -->
    <span
      class="h-0.5 bg-neutral-high rounded-sm transition-transform origin-[right_center] duration-300"
      :class="isOpen ? 'rotate-45 w-[130%]' : 'w-full'"
    ></span>
  </button>
</template>
