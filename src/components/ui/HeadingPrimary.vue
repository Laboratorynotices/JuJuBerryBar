<script setup lang="ts">
import { computed } from "vue";

// Получаем данные из родительского компонента
const props = defineProps({
  text: {
    // Ожидаем простую строку без HTML-тегов
    type: String,
    required: true,
  },
  markedWords: {
    // Сколько слов выделить
    type: [String, Number],
    default: "",
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
 * Функция для безопасного преобразования строки в число
 * @param str - Входная строка
 */
const stringToNumber = (str: string, defaultValue: number = 2): number => {
  const num = parseInt(str, 10);
  return isNaN(num) ? defaultValue : num;
};

/**
 * Форматирует текст, выделяя последние два слова в `<span class="mark">`,
 * если слов больше props.markedWords.
 * @param text - Входной текст для обработки
 * @returns Отформатированная строка с HTML-разметкой
 */
const resultText = computed(() => {
  // 1. Санитизация числа
  const markedWords: number =
    typeof props.markedWords === "number"
      ? props.markedWords
      : stringToNumber(props.markedWords);

  // 2. Санитизация текста
  const sanitizedText: string = sanitizeHtml(props.text);

  // 3. Разбивка на слова
  const words = sanitizedText.trim().split(/\s+/);

  // 4. Обработка случаев с < markedWords словами
  if (words.length < markedWords) return sanitizedText;

  // 5. Разделение слов:
  const firstPart = words.slice(0, -markedWords).join(" ");
  const lastWords = words.slice(-markedWords).join(" ");

  // 6. Формирование результата
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
