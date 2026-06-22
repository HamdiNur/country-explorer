<template>
  <div class="card" @click="goToCountry">
    <div class="flag-wrapper">
      <img :src="country.flag" :alt="country.name" @error="handleImgError" />
      <div class="region-badge">{{ country.region }}</div>
    </div>
    <div class="info">
      <h3>{{ country.name }}</h3>
      <div class="details">
        <p><i>🏛</i> {{ country.capital || 'N/A' }}</p>
        <p><i>💰</i> {{ country.currency || 'N/A' }}</p>
      </div>
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

function handleImgError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = 'https://placehold.co/400x200?text=No+Flag'
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}
.flag-wrapper {
  position: relative;
}
.flag-wrapper img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}
.region-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0,0,0,0.55);
  color: white;
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}
.info {
  padding: 1rem;
}
h3 {
  margin: 0 0 10px;
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.details p {
  margin: 0;
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>