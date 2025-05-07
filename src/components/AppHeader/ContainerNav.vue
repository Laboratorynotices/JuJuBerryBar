<script setup lang="ts">
import { useMenuController } from "../../composables/useMenuController";
import BurgerButton from "./BurgerButton.vue";
import NavLinks from "./NavLinks.vue";

// Используем композабл для управления меню
const menuController = useMenuController();
</script>

<template>
  <nav
    ref="navContainer"
    class="nav-container flex justify-between items-center"
  >
    <!-- Контейнер для навигации, который адаптируется
           в зависимости от текущего режима (мобильный/десктоп) -->
    <NavLinks
      :hideMenu="menuController.hideMenu.value"
      :isMobile="menuController.isMobile.value"
      :isMenuOpen="menuController.isMenuOpen.value"
      @link-clicked="menuController.closeMenu"
    />

    <!-- Кнопка-гамбургер (видна только на мобильных) -->
    <BurgerButton
      ref="burgerButton"
      :is-open="menuController.isMenuOpen.value"
      @click="menuController.toggleMenu"
    />
  </nav>
</template>
