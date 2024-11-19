<template>
  <div class="component">
    <div class="booklist-wrapper">
      <button @click="decrement()" style="align-self: center;" :disabled="currentPage === 0">
        <UIcon class="w-14 h-14" name="i-mdi-chevron-left"></UIcon>
      </button>

      <!-- Column 1 -->
      <div class="booklist-column">
        <div class="book-row"
          @click="openBookLink(book.url)"
          v-for="(book, index) in displayedBooks.slice(0, 3)"
          :key="index"
        >
          <img :src="book.image" alt="Book cover" class="book-image" />
          <div class="book-info">
            <h3 class="book-title item-title">{{ book.title }}</h3>
            <p class="medium-text">by {{ book.author }}</p>
            <p class="book-blurb small-text">{{ book.blurb }}</p>
          </div>
        </div>
      </div>
      
      <!-- Column 2 -->
      <div class="booklist-column" v-if="windowWidth >= 850">
        <div class="book-row"
          @click="openBookLink(book.url)"
          v-for="(book, index) in displayedBooks.slice(3, 6)"
          :key="index"
        >
          <img :src="book.image" alt="Book cover" class="book-image" />
          <div class="book-info">
            <h3 class="book-title">{{ book.title }}</h3>
            <p class="medium-text">by {{ book.author }}</p>
            <p class="book-blurb">{{ book.blurb }}</p>
          </div>
        </div>
      </div>
      
      <button @click="increment()" style="align-self: center;" :disabled="currentPage >= maxPage">
        <UIcon class="w-14 h-14" name="i-mdi-chevron-right"></UIcon>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'

onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth
    })
  }
})

let windowWidth = ref(0)
const currentPage = ref(0)

const books = ref([
  {
    title: "The Pursuit of Happiness",
    author: "Jeffery Rosen",
    url: "https://a.co/d/io8kOAh",
    blurb: "Explores the meaning of happiness in the context of American history and legal thought, offering insights on individual liberty and societal values.",
    image: "books/pursuit-of-happiness.jpg"
  },
  {
    title: "Nicomachean Ethics",
    author: "Aristotle",
    url: "https://a.co/d/ajmxDlm",
    blurb: "An essential philosophical text where Aristotle lays out his vision of a good life, focusing on virtues, morality, and the path to happiness.",
    image: "books/nico-ethics.jpg"
  },
  {
    title: "The Comfort Crisis",
    author: "Michael Easter",
    url: "https://a.co/d/ajmxDlm",
    blurb: "Challenges modern society's obsession with comfort, urging readers to embrace discomfort for a healthier and more meaningful life.",
    image: "books/comfort-crisis.jpg"
  },
  {
    title: "Education of a Wandering Man",
    author: "Louis L\'Amour",
    url: "https://a.co/d/3MbjEZZ",
    blurb: "An autobiography chronicling Louis L\'Amour's adventures, love of books, and self-education as he wandered the world.",
    image: "books/wandering-man.jpg"
  },
  {
    title: "The Way of Men",
    author: "Jack Donovan",
    url: "https://a.co/d/h1PLMIf",
    blurb: "Examines masculinity and the traditional values that shape men\'s roles, strength, and honor in society.",
    image: "books/way-of-men.jpg"
  },
  {
    title: "Undaunted Courage",
    author: "Stephen Ambrose",
    url: "https://a.co/d/4NtaZ5h",
    blurb: "A historical account of Lewis and Clark's expedition, showcasing their courage, resilience, and discoveries.",
    image: "books/undaunted-courage.jpg"
  },
  {
    title: "Tusculan Disputations",
    author: "Cicero",
    url: "https://a.co/d/4NtaZ5h",
    blurb: "Cicero's reflections on enduring hardship, achieving happiness, and leading a virtuous life.",
    image: "books/tusculan.jpg"
  },
  {
    title: "Manhood in the Making",
    author: "David Gilmore",
    url: "https://a.co/d/4NIBxUt",
    blurb: "An anthropological study on masculinity, exploring cultural differences and the traits societies expect from men.",
    image: "books/manhood-making.jpg"
  },
  {
    title: "Mere Christianity",
    author: "C.S. Lewis",
    url: "https://a.co/d/34ikHwP",
    blurb: "C.S. Lewis's exploration of Christian values, morals, and the core beliefs of Christianity.",
    image: "books/mere-christianity.jpg"
  },
  {
    title: "Walden",
    author: "Henry David Thoreau",
    url: "https://a.co/d/chMzSJc",
    blurb: "Thoreau's reflections on simple living in natural surroundings, a meditation on society and self-sufficiency.",
    image: "books/walden.jpg"
  },
  {
    title: "Republic",
    author: "Plato",
    url: "https://a.co/d/chMzSJc",
    blurb: "Plato's seminal work on justice, the ideal state, and the virtues of individuals and communities.",
    image: "books/republic.png"
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    url: "https://a.co/d/0uWnUDp",
    blurb: "A collection of personal writings from the Roman Emperor, focusing on philosophy, resilience, and Stoicism.",
    image: "books/meditations.png"
  },
  {
    title: "The Rise of Theodore Roosevelt",
    author: "Edmund Morris",
    url: "https://a.co/d/1TRRJO2",
    blurb: "A comprehensive biography detailing Theodore Roosevelt's early life, ambitions, and rise to the presidency.",
    image: "books/theodore-roosevelt.jpg"
  },
  {
    title: "Washington: A Life",
    author: "Ron Chernow",
    url: "https://a.co/d/1TRRJO2",
    blurb: "An acclaimed biography offering an in-depth look at the life, leadership, and legacy of George Washington.",
    image: "books/washington-life.jpg"
  },
  {
    title: "Raising Cain",
    author: "Dan Kindlon, Michael Thompson",
    url: "https://a.co/d/5wTbvo1",
    blurb: "Insights into boys' emotional development, helping them build resilience and express themselves authentically in a complex world",
    image: "books/raising-cain.jpg"
  },
  {
    title: "The Ruthless Elimination of Hurry",
    author: "John Mark Comer",
    url: "https://a.co/d/ddhkEpd",
    blurb: "Explores the dangers of a hurried lifestyle, offering practical wisdom and spiritual insights to embrace a slower, more meaningful way of living",
    image: "books/ruthless-elimination.jpg"
  },
]);

const booksPerPage = computed(() => (windowWidth.value < 850 ? 3 : 6))
const maxPage = computed(() => Math.ceil(books.value.length / booksPerPage.value) - 1)

const displayedBooks = computed(() => {
  const start = currentPage.value * booksPerPage.value
  return books.value.slice(start, start + booksPerPage.value)
})

function increment() {
  if (currentPage.value < maxPage.value) {
    currentPage.value++
  }
}

function decrement() {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

function openBookLink(url: string) {
  window.open(url)
}
</script>

<style>
@import '~/assets/style.css';

.booklist-wrapper {
  display: flex;
  align-items: start;
}

.booklist-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 450px) {
  .book-row {
    flex-direction: column;
  }
}

@media (min-width: 451px) {
  .book-row {
    flex-direction: row;
  }
}

.book-row {
  display: flex;
  align-items: center;
  padding: 8px;
}

.book-row:hover {
  background-color: #B8B8B833;
  cursor: pointer;
}

.book-image {
  width: 80px;
  height: auto;
  margin-right: 15px;
}

.book-info {
  display: flex;
  flex-direction: column;
}

.book-title {
  font-weight: bold;
  margin: 0;
}

.book-blurb {
  font-size: 0.9em;
  color: #555;
}

</style>