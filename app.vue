<template>
  <NuxtLayout>
    <v-app id="app">
      <v-app-bar id="app-bar">
        <v-app-bar-title>
          <button id="logo-btn" @click="toPage('/')">
            <img src="~/assets/images/title-logo-no-bg.png" height="50px" />
          </button>
        </v-app-bar-title>
        <v-spacer />

        <div v-if="windowWidth >= 800">
          <v-btn @click="toPage(btn.to)"
            v-for="(btn, i) in navBtns"
            :key="i"
          >{{ btn.title }}</v-btn>
        </div>

        <v-menu v-if="windowWidth < 800"
          close-on-content-click
        >
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon>
              <v-icon size="30">mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in navBtns"
              :key="index"
              @click="toPage(item.to)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main>
        <NuxtPage />
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

    </v-app>
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
  background-color: #D4C5B4;
}

#logo-btn {
  display: flex;
  align-items: center;
}

#newsletter-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

</style>
