<template>
  <div style="padding: 2rem; max-width: 700px; margin: 0 auto;">
    <button @click="$router.back()" style="margin-bottom: 1.5rem; padding: 8px 20px; border: 1px solid #ccc; border-radius: 8px; cursor: pointer; background: white; font-size: 14px;">
      ← Back
    </button>

    <div v-if="country">
      <img :src="country.flag" :alt="country.name" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 1.5rem;" />
      <h1 style="margin: 0 0 1rem;">{{ country.name }}</h1>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="info-card">
          <p class="label">Capital</p>
          <p class="value">{{ country.capital || 'N/A' }}</p>
        </div>
        <div class="info-card">
          <p class="label">Currency</p>
          <p class="value">{{ country.currency || 'N/A' }}</p>
        </div>
        <div class="info-card">
          <p class="label">Region</p>
          <p class="value">{{ country.region || 'N/A' }}</p>
        </div>
        <div class="info-card">
          <p class="label">Country Code</p>
          <p class="value">{{ country.iso2 || 'N/A' }}</p>
        </div>
      </div>
    </div>

    <p v-else>Country not found.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCountriesStore } from '../stores/countries'

const route = useRoute()
const store = useCountriesStore()

const country = computed(() =>
  store.countries.find(c => c.name === decodeURIComponent(route.params.name as string))
)
</script>

<style scoped>
.info-card {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #eee;
}
.label {
  font-size: 12px;
  color: #888;
  margin: 0 0 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.value {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #222;
}
</style>