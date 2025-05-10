<script setup lang="ts">
// Получаем данные из родительского компонента
const props = defineProps({
  Value: {
    type: [Number, String],
    required: true,
  },
  Label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li>
    <span class="value">{{ props.Value }}</span>
    <br />
    <span class="label">{{ props.Label }}</span>
  </li>
</template>
