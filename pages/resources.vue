<template>
  <div class="page">
    <p class="big-header header-font">
      Browse Our Resources
    </p>
    <p class="main-text text-block">{{ resourceIntro }}</p>

    <div style="margin-top: 30px;"></div>

    <p class="page-header header-font">
      Suggested Books
    </p>
    <BookList />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const resourceIntro = ref('We live in a world of mind-numbing technology and entertainment. Surrounding ourselves with positive and enlightening content helps us accomplish the mission of The Arena to improve our lives in meaningful ways. Please explore the books, podcasts, and other resources we have to offer!')

</script>

<style scoped>
@import '~/assets/style.css';

</style>