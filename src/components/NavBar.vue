<template>
  <nav>
    <div class="nav-inner">
      <RouterLink to="/" class="logo">
        🌍 World Explorer
      </RouterLink>
      <div style="display:flex; align-items:center; gap:1rem;">
        <span class="count" v-if="store.countries.length">
          {{ store.countries.length }} countries
        </span>
        <button @click="toggleDark" class="dark-toggle">
          {{ isDark ? '☀️ Light' : '🌙 Dark' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCountriesStore } from '../stores/countries'

const store = useCountriesStore()
const isDark = ref(false)

function toggleDark() {
  isDark.value = !isDark.value
  document.body.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  isDark.value = document.body.classList.contains('dark')
})
</script>

<style scoped>
nav {
  background: #2c3e50;
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
}
.logo:hover { opacity: 0.85; }
.count {
  font-size: 13px;
  color: rgba(255,255,255,0.6);
}
.dark-toggle {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s;
}
.dark-toggle:hover {
  background: rgba(255,255,255,0.25);
}
</style>