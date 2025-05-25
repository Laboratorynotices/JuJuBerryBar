<script setup lang="ts">
// Определяем пропсы для компонента
defineProps({
  hideMenu: {
    type: Boolean,
    required: true,
  },
  isMobile: {
    type: Boolean,
    required: true,
  },
  isMenuOpen: {
    type: Boolean,
    required: true,
  },
});
// Массив пунктов меню
const navItems = [
  { id: 1, name: "Delicious", path: "#Delicious" },
  { id: 2, name: "Events", path: "#Events" },
  { id: 3, name: "Contacts", path: "#Contacts" },
];
</script>

<template>
  <!-- Навигационные ссылки (один компонент для обоих режимов) -->
  <ul
    id="nav-list"
    :class="[
      // На пару секунд скрываем меню при переходе с десктопа на мобильный
      hideMenu ? 'hidden' : '',
      // Условные стили для мобильной версии
      isMobile
        ? 'fixed left-0 right-0 top-0 bg-background-secondary dark:bg-background-secondary-dark dark:text-neutral-high-dark z-10 pt-16 p-4 transition-all duration-300 ease-in-out'
        : 'relative',
      // Анимация появления/скрытия только для мобильной версии
      isMobile
        ? // Актуально только для мобильной версии
          isMenuOpen
          ? // Если меню открыто, показываем его с анимацией
            'transform translate-y-0 shadow-lg'
          : // Если меню закрыто, скрываем его с анимацией
            'transform -translate-y-full'
        : // Для десктопной версии просто показываем меню
          '',
    ]"
  >
    <li v-for="item in navItems" :key="item.id">
      <a :href="item.path">
        {{ $t(item.name) }}
      </a>
    </li>
  </ul>
</template>
