<script setup lang="ts">
import { computed } from "vue";

// Получаем данные из родительского компонента
const props = defineProps({
  text: {
    // Ожидаем простую строку без HTML-тегов
    type: String,
    required: true,
  },
});

/**
 * Функция для безопасной очистки строки от HTML-тегов
 */
const sanitizeHtml = (html: string): string => {
  return (
    html
      // Чистим регулярными выражениями
      .replace(/<[^>]*>/g, "") // Удаляем HTML-теги
      .replace(/javascript:/gi, "") // Удаляем JS в ссылках
      .replace(/on\w+="[^"]*"/g, "") // Удаляем обработчики событий
  );
};

/**
 * Форматирует текст, выделяя последние два слова в `<span class="mark">`,
 * если слов больше 2.
 * @param text - Входной текст для обработки
 * @returns Отформатированная строка с HTML-разметкой
 */
const resultText = computed(() => {
  // 1. Санитизация текста
  const sanitizedText = sanitizeHtml(props.text);

  // 2. Разбивка на слова
  const words = sanitizedText.trim().split(/\s+/);

  // 3. Обработка случаев с < 2 словами
  if (words.length < 2) return sanitizedText;

  // 4. Разделение слов:
  const firstPart = words.slice(0, -2).join(" ");
  const lastWords = words.slice(-2).join(" ");

  // 5. Формирование результата
  return [firstPart, `<span class="mark">${lastWords}</span>`].join(
    firstPart ? " " : "",
  );
});

/* 
 * Старая версия дизайна
 * Форматирует текст, выделяя последнее слово в `<span class="mark">`
 * и добавляя `<br>` перед предпоследним словом, если слов больше 3.
 * @param text - Входной текст для обработки
 * @returns Отформатированная строка с HTML-разметкой
 * /
const resultText = ((text: string): string => {
  // 1. Санитизация текста
  const sanitizedText = sanitizeHtml(text);

  // 2. Разбивка на слова
  const words = sanitizedText.trim().split(/\s+/);

  // 3. Обработка случаев с ≤3 словами
  if (words.length <= 3) return sanitizedText;

  // 4. Разделение слов:
  const firstPart = words.slice(0, -2).join(" ");
  const secondLastWord = words[words.length - 2];
  const lastWord = words[words.length - 1];

  // 5. Формирование результата
  return [
    firstPart,
    `<br>`,
    secondLastWord,
    `<span class="mark">${lastWord}</span>`,
  ].join(firstPart ? " " : "");
})(props.text);
*/
</script>

<template>
  <h1 class="headingPrimary" v-html="resultText"></h1>
</template>
