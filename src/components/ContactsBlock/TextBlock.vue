<script setup lang="ts">
import HeadingPrimary from "@/components/ui/HeadingPrimary.vue";
import ContactsIcon from "./ContactsIcon.vue";
</script>

<template>
  <div class="contacts-section__text-block__wrapper text-block-wrapper">
    <HeadingPrimary
      class="delicious-section__text-block__heading header"
      :text="$t('Our Contacts')"
      markedWords="1"
    />

    <p class="delicious-section__text-block__text text-block flashed">
      {{
        $t(
          "Have a question, want to order, or just say hi? Call us — we’re happy to hear from you!",
        )
      }}
    </p>
    <a href="tel:+491234567">
      <ContactsIcon />
      <span>+49-123-45-67</span>
    </a>
  </div>
</template>
