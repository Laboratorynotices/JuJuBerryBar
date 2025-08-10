<script lang="ts" setup>
import ArrowIcon from "./ArrowIcon.vue";
import FooterNavigation from "./FooterNavigation.vue";
import type { FooterNavigationItem } from "@/types/footerNavigation";

/**
 * Данные для навигации в футере.
 * @type {FooterNavigationItem[]}
 */
const navigation: FooterNavigationItem[] = [
  {
    name: "Juju Berry",
    href: "#",
    subNavigation: [
      { name: "Buy", href: "#" },
      { name: "More", href: "#" },
    ],
  },
  {
    name: "Berry Boosts",
    href: "#",
    subNavigation: [
      { name: "Zen berries", href: "#" },
      { name: "Citrus fuel", href: "#" },
      { name: "Green glow", href: "#" },
      { name: "Honey chill", href: "#" },
    ],
  },
  {
    name: "Berry Moments",
    href: "#",
    subNavigation: [
      { name: "Two Juices", href: "#" },
      { name: "Berry Bar", href: "#" },
      { name: "Juice Club", href: "#" },
      { name: "Socials", href: "#" },
    ],
  },
  {
    name: "Benefits",
    href: "#",
    subNavigation: [
      { name: "Tasty", href: "#" },
      { name: "Fast", href: "#" },
      { name: "Available", href: "#" },
    ],
  },
];
</script>

<template>
  <footer class="footer-section" id="Footer">
    <div class="wrap-container">
      <div class="footer-section__first-row first-row">
        <div class="footer-section__logo logo">Juju Berry</div>
        <FooterNavigation
          class="footer-section__navigation footer-navigation"
          :navigation="navigation"
        />
        <a href="#app">
          <ArrowIcon />
        </a>
      </div>
      <div class="footer-section__phone phone">
        <a href="tel:+491234567">
          <span>+49-123-45-67</span>
        </a>
      </div>
    </div>
  </footer>
</template>
