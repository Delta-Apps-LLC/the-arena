<template>
  <div class="page">
    <p class="page-header header-font">Mission Statement</p>
    <p class="main-text text-block">{{ mission }}</p>
    
    <div style="margin-top: 30px;"></div>

    <p class="page-header header-font">Core Virtues</p>
    <div class="virtue-wrapper">
      <div class="virtue-row" v-for="(virtue, i) in virtues" :key="i">
        <div class="circle">
          <p class="header-font" id="virtue-title">{{ virtue.title }}</p>
          <v-icon
            id="virtue-icon"
            :size="windowWidth <= 1300  ? '40' : windowWidth <= 1700 ? '45' : '50'"
          >
            {{ virtue.icon }}
          </v-icon>
        </div>
        <p class="virtue-details main-text">{{ virtue.details }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth
    })
  }
})

let windowWidth = ref(0)

const mission = ref('We seek to encourage all men to rise above a life of passivity and \'ignoble ease\' as a critic in the spectator stands of life and instead to embrace the grittiness of honorable action within the arena of their own lives. We desire to forge ourselves and each other not only into good men of virtue and morals but into men who are good at being men as well. Through regular, in-person meetups and monthly challenges we push each other to become husbands, fathers, brothers, sons, friends and citizens of the highest quality.')
const virtues = ref([
  {
    title: 'Action',
    details: 'Take it. As men in The Arena we prioritize the real and concrete over the abstract. While others are talking we are doing. We are active participants in our lives, our relationships, and our community. We understand that motivation follows action and therefore we do not wait to feel motivated. Instead we act. And if we fail in our actions? At least we fail "while daring greatly."',
    icon: 'mdi-run-fast'
  },
  {
    title: 'Strength',
    details: 'Physical strength is a cornerstone of being a man. We value, prioritize and develop strength. We do so to be better protectors of those in our care and to be useful to those around us who may need our strength. We do so because we understand that physicality and being active means we can enjoy a longer, healthier, happier existence. We do so because strength is never a disadvantage.',
    icon: 'mdi-weight-lifter'
  },
  {
    title: 'Honor',
    details: 'We are concerned about our reputation among our fellow men in the arena and we do nothing which will jeopardize that reputation. We understand there are expectations to be met by us as individuals and as members of the group and we understand that the greatness of honor can not only be gained, it can more importantly, be lost. We strive to do everything in our power to not lose our honor.',
    icon: 'mdi-medal'
  },
  {
    title: 'Boldness',
    details: 'Inextricably linked to action, boldness is required when our inner critic is raging, telling us we should give into timidity. It is a willingness to confidently take calculated risks even though the outcome is uncertain. When everything is telling us to stay within the comfort of our little circle, boldness is our truest self encouraging us to enthusiastically step outside and embrace the growth of discomfort. We boldly go and do.',
    icon: 'mdi-fire'
    // icon: 'mdi-exclamation-thick'
  },
  {
    title: 'Fortitude',
    details: 'Suffering is required at times, but misery is optional. It is the virtue of fortitude which gives us durability in the toughest of circumstances and allows us to bear our misfortunes well. With it we resist the urge to crumble under the immense weight of seemingly unbearable trials. With it, we are a rock for others.',
    icon: 'mdi-chess-rook'
  },
  {
    title: 'Resolution',
    details: 'The world is full of good intentions. It is full of unfulfilled dreams. It is full of endless New Year’s resolutions which at the end of January are merely cold remnants of a once burning fire. We set ourselves apart as men through an unshakable resolution to do what we should and nothing can deter us in that resolution.',
    icon: 'mdi-compass-rose'
  },
])

</script>

<style scoped>
@import '~/assets/style.css';

.virtue-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.circle {
  border-radius: 50%;
  background-image: linear-gradient(to bottom right, #D4C5B4, #2F5D3F);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#virtue-title {
  color: #2D2825;
}

#virtue-icon {
  color: #2D2825;
}

/* Small - Mobile */
@media (max-width: 750px) {
  .virtue-row {
    width: 92%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #virtue-title {
    font-size: 22px;
    padding: 10px;
  }

  .virtue-details {
    margin: 15px 0;
  }

  .circle {
    max-height: 150px;
    max-width: 150px;
    min-height: 150px;
    min-width: 150px;
  }
}

/* Medium - Laptop */
@media (min-width: 751px) and (max-width: 1300px) {
  .virtue-row {
    width: 70%;
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #virtue-title {
    font-size: 24px;
    padding: 10px;
  }

  .virtue-details {
    margin: 0 15px;
  }

  .circle {
    max-height: 150px;
    max-width: 150px;
    min-height: 150px;
    min-width: 150px;
  }
}

/* Large - Desktop */
@media (min-width: 1301px) and (max-width: 1700px) {  
  .virtue-row {
    width: 60%;
    padding: 25px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #virtue-title {
    font-size: 28px;
    padding: 10px;
  }
  
  .virtue-details {
    font-size: 20px !important;
    margin: 0 25px;
  }

  .circle {
    max-height: 200px;
    max-width: 200px;
    min-height: 200px;
    min-width: 200px;
  }
}

/* XLarge - Monitor */
@media (min-width: 1701px) {
  .virtue-row {
    width: 50%;
    padding: 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #virtue-title {
    font-size: 28px;
    padding: 10px;
  }
  
  .virtue-details {
    font-size: 20px !important;
    margin: 0 30px;
  }

  .circle {
    max-height: 200px;
    max-width: 200px;
    min-height: 200px;
    min-width: 200px;
  }
}

</style>