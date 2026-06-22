<template>
  <div style="padding: 2rem">
    <h1>Country Explorer</h1>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
      <input
        v-model="store.search"
        type="text"
        placeholder="Search for a country..."
        style="flex: 1; min-width: 200px; padding: 10px 14px; font-size: 15px; border: 1px solid #ccc; border-radius: 8px;"
      />
      <select
        v-model="store.region"
        style="padding: 10px 14px; font-size: 15px; border: 1px solid #ccc; border-radius: 8px;"
      >
        <option value="">All Regions</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>

    <p style="color: #888; font-size: 14px; margin-bottom: 1rem;">
      {{ store.filtered.length }} countries found
    </p>

    <p v-if="store.loading">Loading countries...</p>
    <div v-else class="grid">
      <CountryCard
        v-for="country in store.filtered"
        :key="country.iso2"
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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}
</style>