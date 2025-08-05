/**
 * Варианты "пилюльных кнопок" (по виду),
 * но могуть быть и ссылками, и спанами.
 */
export const ButtonVariant = {
  // Основной вариант
  Primary: "Primary",
  // Второстепенный вариант
  Secondary: "Secondary",
  // Вариант для карточек
  CardBtn: "CardBtn",
  // Карточка мероприятий
  EventCard: "EventCard",
} as const;

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];
