<template>
  <div class="card" @click="goToCountry">
    <img :src="country.flag" :alt="country.name" />
    <div class="info">
      <h3>{{ country.name }}</h3>
      <p><span>Capital:</span> {{ country.capital || 'N/A' }}</p>
      <p><span>Currency:</span> {{ country.currency || 'N/A' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  country: any
}>()

function goToCountry() {
  router.push('/country/' + encodeURIComponent(props.country.name))
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-4px); }
img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.info { padding: 1rem; }
h3 { margin: 0 0 8px; font-size: 15px; }
p { margin: 4px 0; font-size: 13px; color: #555; }
p span { font-weight: 600; color: #222; }
</style>