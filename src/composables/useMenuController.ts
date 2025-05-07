import { computed, ref, onMounted } from "vue";
import { useWindowInnerWidthRem } from "./useWindowInnerWidthRem";

/**
 * Композабл для управления меню с учетом типа устройства (мобильное/десктопное)
 * В будущем будет расширен функционалом отслеживания переходов между версиями
 * и обработчиком кликов вне мобильного меню
 * @returns объект с функциями и состоянием для управления меню
 */
export const useMenuController = () => {
  // Получаем ширину окна в rem
  const windowInnerWidthRem = useWindowInnerWidthRem();

  // Получаем доступ к константе через import.meta.env
  const MD_BREAKPOINT: number = import.meta.env.MD_BREAKPOINT;

  // Флаг для отслеживания состояния монтирования компонента
  const isMounted = ref(false);

  // Состояние для отслеживания открытия/закрытия мобильного меню
  const isMenuOpen = ref(false);
  // Состояние для отслеживания видимости меню (для перехода из десктопа в мобильный)
  const hideMenu = ref(false);

  // Проверяем ширину окна и определяем, является ли оно мобильным
  const isMobile = computed((): boolean => {
    // При инициализации компонента, когда он еще не смонтирован, возвращаем true
    if (!isMounted.value) {
      return true;
    }

    // Если ширина окна меньше MD_BREAKPOINT, это мобильное устройство
    return windowInnerWidthRem.windowWidthRem.value < MD_BREAKPOINT;
  });

  // Функция для переключения состояния мобильного меню
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  // Функция для закрытия меню
  const closeMenu = () => {
    if (isMenuOpen.value) {
      isMenuOpen.value = false;
    }
  };

  // Функция для регистрации монтирования компонента
  function setMounted() {
    isMounted.value = true;
  }

  // Запускаем setMounted при монтировании компонента
  onMounted(() => {
    setMounted();
  });

  return {
    isMobile,
    isMounted,
    hideMenu,
    isMenuOpen,
    closeMenu,
    toggleMenu,
  };
};
