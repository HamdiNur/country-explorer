<template>
  <NavBar />
  <RouterView />
  <button v-show="showBtn" @click="scrollToTop" class="back-to-top">↑</button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'

const showBtn = ref(false)

function onScroll() {
  showBtn.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #f4f6f8;
  color: #1a1a1a;
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #2c3e50;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  z-index: 999;
}

.back-to-top:hover {
  transform: translateY(-3px);
  opacity: 0.85;
}
body.dark {
  background: #1a1a2e;
  color: #e0e0e0;
}

body.dark .card {
  background: #16213e;
  border-color: #0f3460;
}

body.dark .card h3 {
  color: #e0e0e0;
}

body.dark .card .details p {
  color: #aaa;
}

body.dark .search-bar input,
body.dark .search-bar select {
  background: #16213e;
  border-color: #0f3460;
  color: #e0e0e0;
}

body.dark .info-card {
  background: #16213e;
  border-color: #0f3460;
}

body.dark .value {
  color: #e0e0e0;
}
</style>