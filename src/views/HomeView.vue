<template>
  <div class="page">
    <div class="search-bar">
      <input
        v-model="store.search"
        type="text"
        placeholder="🔍 Search for a country..."
      />
      <select v-model="store.region">
        <option value="">All Regions</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>

    <p class="count-label">{{ store.filtered.length }} countries found</p>

    <div v-if="store.loading" class="grid">
      <div class="skeleton" v-for="n in 12" :key="n"></div>
    </div>

    <div v-else-if="store.filtered.length === 0" class="empty">
      <p>😕 No countries found for "<strong>{{ store.search }}</strong>"</p>
    </div>

    <div v-else class="grid">
      <CountryCard
        v-for="country in store.filtered"
        :key="country.name"
        :country="country"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCountriesStore } from '../stores/countries'
import CountryCard from '../components/CountryCard.vue'

const store = useCountriesStore()

onMounted(() => {
  store.fetchAll()
})
</script>

<style scoped>
.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
.search-bar {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.search-bar input {
  flex: 1;
  min-width: 200px;
  padding: 12px 16px;
  font-size: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
}
.search-bar input:focus {
  border-color: #2c3e50;
}
.search-bar select {
  padding: 12px 16px;
  font-size: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  outline: none;
}
.count-label {
  font-size: 14px;
  color: #888;
  margin-bottom: 1.5rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}
.skeleton {
  height: 240px;
  background: #e0e0e0;
  border-radius: 12px;
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.empty {
  text-align: center;
  padding: 4rem 0;
  font-size: 18px;
  color: #888;
}
</style>