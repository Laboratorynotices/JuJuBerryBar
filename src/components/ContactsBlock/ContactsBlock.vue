<script setup lang="ts">
import TextBlock from "./TextBlock.vue";
</script>

<template>
  <article class="wrap-container contacts-section" id="Contacts">
    <div class="contacts-section__image img-wrapper branch-decorated">
      <div class="contacts-section__image-star img-star">
        {{ $t("We have") }}
      </div>

      <img
        src="@/assets/imgs/Contacts/contacts.png"
        title="Contacts"
        alt="Contacts Image"
        loading="lazy"
      />
    </div>

    <TextBlock />
  </article>
</template>
