<template>
  <div class="page">
    <p class="big-header header-font"
      data-aos="zoom-in"
      data-aos-duration="1200"
    >
      <span>Welcome to... </span>
      <span>The Arena!</span>
    </p>
    <p class="header-font"
      id="motto"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
    >
      <em>"Step Up, Step In"</em>
    </p>

    <div class="arena-row">
      <img id="arena-img"
        src="~/assets/images/arena.jpg"
      />
      <p class="main-text text-block" v-html="windowWidth <= 1000 ? introSmallScreen : introduction"></p>
    </div>

    <div style="margin-top: 30px;"></div>
    
    <p class="page-header header-font">Inspired by Theodore Roosevelt</p>
    <p class="main-text text-block"><em>{{ teddyQuote }}</em></p>

    <div style="margin-top: 30px;"></div>
    
    <div class="featured-row">
      <div class="featured-item-wrapper">
        <p class="page-header header-font">Recent Challenge</p>
        <div class="featured-item">
          <p class="featured-item-title item-title">{{ featuredChallenge.title }}</p>
          <p class="featured-item-description main-text">{{ featuredChallenge.description }}</p>
          <p class="main-text" style="font-size: 14px; margin-bottom: 5px;">{{ featuredChallenge.date }}</p>
        </div>
        <NuxtLink class="nuxt-link" style="margin-top: 5px;" to="/events">View All</NuxtLink>
      </div>

      <div class="featured-item-wrapper">
        <p class="page-header header-font">Recent Event</p>
        <div class="featured-item">
          <p class="featured-item-title item-title">{{ featuredEvent.title }}</p>
          <div class="featured-item-description main-text">
            <button class="chevron-btn" @click="increment()">
              <UIcon class="w-8 h-8" name="i-mdi-chevron-left"></UIcon>
            </button>
            <img class="event-img" :src="images[index]" />
            <button class="chevron-btn" @click="decrement()">
              <UIcon class="w-8 h-8" name="i-mdi-chevron-right"></UIcon>
            </button>
          </div>
          <p class="main-text" style="font-size: 14px; margin-bottom: 5px;">{{ featuredChallenge.date }}</p>
        </div>
        <NuxtLink class="nuxt-link" style="margin-top: 5px;" to="/events">View All</NuxtLink>
      </div>
    </div>

    <div class="featured-item-wrapper">
      <p class="page-header header-font">Recent Blog</p>
      <div class="featured-item">
        <p class="featured-item-title item-title">{{ featuredBlog.title }}</p>
        <p class="featured-item-description main-text">{{ featuredBlog.description }}</p>
        <p class="main-text" style="font-size: 14px; margin-bottom: 5px;">{{ featuredChallenge.date }}</p>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: center; margin-top: 5px;">
        <NuxtLink class="nuxt-link" to="/blog">Read Blog</NuxtLink>
        <NuxtLink class="nuxt-link" to="/blog">View All</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init()
  if (process.client) {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth
    })
  }
  images = ref(Object.values(
    import.meta.glob('~/assets/images/dog-lake/*.jpg', {
      eager: true,
      import: 'default'
    })
  ))
})

let images = ref([])
let index = ref(0)
let windowWidth = ref(0)

const introduction = ref('The Arena was founded with the average man in mind and in it you will find other average men who have chosen to live their lives in an extraordinary way. In a day and age where success equals money, happiness means pleasure, and life is increasingly lived online, members of The Arena have chosen to fight back.<br>They have chosen to band together in solidarity to become men of values and principles, which they compromise for nothing; they have voluntarily elected to throw off the ignoble ease of modernity in favor of the personal growth found just beyond the circle of comfort; they have decided to be doers of deeds rather than critics and prioritize action over abstraction; they are autonomous masters of skill; they are strong protectors and providers for those around them; they are active, enthusiastic participants in life; they are men of community and service; they are not only good men, they are good at being men.<br>It is our firm belief that if more of the common, average men of today embraced such a doctrine of action, strength, and virtue then our nation and our world would be a much better place. If you wish to be such a man then just step up and step in. Welcome to THE ARENA.')
const introSmallScreen = ref('The Arena was founded with the average man in mind and in it you will find other average men who have chosen to live their lives in an extraordinary way. In a day and age where success equals money, happiness means pleasure, and life is increasingly lived online, members of The Arena have chosen to fight back.<br><br>They have chosen to band together in solidarity to become men of values and principles, which they compromise for nothing; they have voluntarily elected to throw off the ignoble ease of modernity in favor of the personal growth found just beyond the circle of comfort; they have decided to be doers of deeds rather than critics and prioritize action over abstraction; they are autonomous masters of skill; they are strong protectors and providers for those around them; they are active, enthusiastic participants in life; they are men of community and service; they are not only good men, they are good at being men.<br><br>It is our firm belief that if more of the common, average men of today embraced such a doctrine of action, strength, and virtue then our nation and our world would be a much better place. If you wish to be such a man then just step up and step in. Welcome to THE ARENA.')
const teddyQuote = ref('"It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat."')

const featuredChallenge = {
  title: 'New Skill/Read 30 Minutes',
  description: 'Spend time learning a new hard skill, and spend at least 30 minutes per day reading content that improves your mind or your life in a meaningful way.',
  date: '2024-11-16'
}

const featuredBlog = {
  title: 'Some sort of blog title',
  description: 'This is a preview text of the blog that will be featured. There will be a cutoff of a certain number of characters, and then they can click to read the whole blog.',
  date: '2024-10-5'
}

const featuredEvent = {
  title: 'Dog Lake Hike',
  images: [],
  // description: 'The men got together and hiked up to Dog Lake in Big Cottonwood Canyon.',
  date: '2024-10-12'
}

function increment() {
  if (index.value == images.value.length - 1) index.value = 0
  else index.value++
}

function decrement() {
  if (index.value == 0) index.value = images.value.length - 1
  else index.value--
}

</script>

<style scoped>
@import '~/assets/style.css';

@media (max-width: 900px) {
  .featured-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .featured-item-wrapper {
    margin-bottom: 20px !important;
  }
}

@media (min-width: 901px) and (max-width: 1085px) {
  .featured-row {
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between !important;
    margin-bottom: 20px !important;
  }
}

@media (min-width: 1086px) {
  .featured-row {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between !important;
    margin-bottom: 20px !important;
  }
}

@media (max-width: 1000px) {
  .arena-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1001px) {
  .arena-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 600px) {
  #arena-img {
    width: 200px;
  }
}

@media (min-width: 601px) and (max-width: 1000px) {
  #arena-img {
    width: 250px;
  }
}

@media (min-width: 1001px) {
  #arena-img {
    width: 300px;
  }
}

.arena-row {
  margin: 15px 0;
}

#arena-img {
  margin: 15px;
  border-radius: 6px;
}

#motto {
  font-size: 24px;
  margin-bottom: 5px;
  background: linear-gradient(to right, #D4C5B4, #2F5D3F, #D4C5B4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.featured-item-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 450px) {
  .featured-item {
    width: 250px;
    /* height: 250px; */
  }
}

@media (min-width: 451px) {
  .featured-item {
    width: 350px;
    /* height: 200px; */
  }
}

.event-img {
  height: 110px;
}

.featured-item {
  background-color: #B8B8B8;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
}

.featured-item-title {
  padding: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #D4C5B4;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.featured-item-description {
  padding: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.chevron-btn {
  border-radius: 50%;
  color: #2D2825;
}

.chevron-btn:hover {
  cursor: pointer;
}

</style>