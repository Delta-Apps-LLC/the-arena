<template>
  <NuxtLayout>
    <div id="app">
      <header id="app-bar">
        <RouterLink to="/">
          <img id="logo-btn" src="~/assets/images/title-logo-no-bg.png" />
        </RouterLink>

        <div v-if="windowWidth > 800">
          <RouterLink class="nuxt-link"
            v-for="(btn, i) in navBtns"
            :key="i"
            :to="btn.to"
          >{{ btn.title }}</RouterLink>
        </div>

        <UPopover v-if="windowWidth <= 800">
          <UButton color="transparent">
            <UIcon name="i-mdi-menu" class="w-8 h-8" style="color: #2F5D3F;"></UIcon>
          </UButton>

          <template #panel="{ close }">
            <div class="p-4" style="display: flex; flex-direction: column;">
              <RouterLink class="nuxt-link"
                v-for="(btn, i) in navBtns"
                :key="i"
                :to="btn.to"
                @click="close"
              >{{ btn.title }}</RouterLink>
            </div>
          </template>
        </UPopover>

      </header>
      
      <v-main>
        <NuxtPage style="margin-top: 70px;" />
      </v-main>
      
      <NuxtLink
        v-if="route.path != '/contact'"
        class="nuxt-link"
        id="newsletter-btn"
        to="/contact"
        style="background-color: #B8B8B888;"
        >
        Join Our Newsletter
      </NuxtLink>
    
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const windowWidth = ref(0);

function toPage(page: string): void {
  router.push(page);
}

onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth;
    });
  }
});
const route = useRoute();

const navBtns = [
  { title: 'About', to: '/about' },
  { title: 'Events', to: '/events' },
  { title: 'Resources', to: '/resources' },
  { title: 'Store', to: '/store' },
  { title: 'Blog', to: '/blog' },
  { title: 'Contact', to: '/contact' },
];
</script>

<style scoped>
@import '~/assets/style.css';

#app {
  background-image: url('~/assets/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-color: #F3F7F5;
}

#app-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  background-color: #D4C5B4;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
}

#logo-btn {
  height: 50px;
}

#newsletter-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

</style>
