<script setup lang="ts">
import { useMenuController } from "../../composables/useMenuController";

// Используем композабл для управления меню
const menuController = useMenuController();
</script>

<template>
  ContainerNav
  <span v-if="menuController.isMobile.value">Mobile</span>
  <span v-else>Desktop</span>
</template>
