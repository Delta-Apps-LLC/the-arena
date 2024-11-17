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

/**
 * {
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
 */

const resourceIntro = ref('We live in a world of mind-numbing technology and entertainment. Surrounding ourselves with positive and enlightening content helps us accomplish the mission of The Arena to improve our lives in meaningful ways. Please explore the books, podcasts, and other resources we have to offer!')

</script>

<style scoped>
@import '~/assets/style.css';

</style>