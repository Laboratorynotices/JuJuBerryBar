/**
 * Интерфейс для описания свойств компонента Benefits для передачи данных в дочерний компонент.
 */
export interface BenefitProps {
  /**
   * Заголовок преимущества.
   */
  title: string;

  /**
   * Описание преимущества.
   */
  description: string;

  /**
   * Картинка преимущества,
   * название файла в папке `src\assets\imgs\Hero\benefits\`.
   */
  icon: string;
}
