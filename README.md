# 🌍 World Explorer

A Vue.js app to explore information about 250+ countries around the world — search, filter by region, and dive into each country's details.

🔗 **Live Demo:** [country-explorer-sigma-eight.vercel.app](https://country-explorer-sigma-eight.vercel.app/)

---

## 📸 Features

- 🔍 Live search — filter countries as you type
- 🌎 Region filter — Africa, Americas, Asia, Europe, Oceania
- 🃏 Country cards — flag, capital, currency, region badge
- 📄 Detail page — click any card for more info
- 💀 Skeleton loader — animated placeholders while data loads
- 🌙 Dark mode — toggle between light and dark theme
- ⬆️ Back to top button — smooth scroll on long pages
- 📱 Responsive — works on mobile and desktop

---

## 🛠️ Built With

- [Vue.js 3](https://vuejs.org/) — Composition API + `<script setup>`
- [Pinia](https://pinia.vuejs.org/) — state management
- [Vue Router](https://router.vuejs.org/) — client side routing
- [Vite](https://vitejs.dev/) — build tool
- [CountriesNow API](https://countriesnow.space/) — country data
- [Vercel](https://vercel.com/) — deployment

---

## 🧠 Vue Concepts Practiced

- `ref` and `computed` for reactive state
- `v-for` for rendering lists
- `v-model` for two-way input binding
- `onMounted` lifecycle hook for API calls
- `props` for passing data into components
- `defineStore` with Pinia for global state
- `useRouter` and `useRoute` for navigation
- `<style scoped>` for component-level CSS

---

## 🚀 Getting Started

```bash
# clone the repo
git clone https://github.com/HamdiNur/country-explorer.git

# navigate into the project
cd country-explorer

# install dependencies
npm install

# run the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.


---

## 📁 Project Structure
src/

├── components/

│   ├── CountryCard.vue    # single country card

│   └── NavBar.vue         # top navigation bar

├── views/

│   ├── HomeView.vue       # main page with search and grid

│   └── CountryDetail.vue  # detail page for one country

├── stores/

│   └── countries.ts       # Pinia store — data, search, filter

├── router/

│   └── index.ts           # route definitions

└── App.vue                # root component

---

## 📁 Project Structure
---

## 👨‍💻 Author

**Hamdi Nur**  
[github.com/HamdiNur](https://github.com/HamdiNur)

---

## 📄 License

MIT