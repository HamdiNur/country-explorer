import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const regionMap: Record<string, string> = {
  Afghanistan: 'Asia', Albania: 'Europe', Algeria: 'Africa', Andorra: 'Europe',
  Angola: 'Africa', Argentina: 'Americas', Armenia: 'Asia', Australia: 'Oceania',
  Austria: 'Europe', Azerbaijan: 'Asia', Bahamas: 'Americas', Bahrain: 'Asia',
  Bangladesh: 'Asia', Barbados: 'Americas', Belarus: 'Europe', Belgium: 'Europe',
  Belize: 'Americas', Benin: 'Africa', Bhutan: 'Asia', Bolivia: 'Americas',
  'Bosnia and Herzegovina': 'Europe', Botswana: 'Africa', Brazil: 'Americas',
  Brunei: 'Asia', Bulgaria: 'Europe', 'Burkina Faso': 'Africa', Burundi: 'Africa',
  Cambodia: 'Asia', Cameroon: 'Africa', Canada: 'Americas', Chad: 'Africa',
  Chile: 'Americas', China: 'Asia', Colombia: 'Americas', Comoros: 'Africa',
  'Costa Rica': 'Americas', Croatia: 'Europe', Cuba: 'Americas', Cyprus: 'Asia',
  'Czech Republic': 'Europe', Denmark: 'Europe', Djibouti: 'Africa',
  'Dominican Republic': 'Americas', Ecuador: 'Americas', Egypt: 'Africa',
  'El Salvador': 'Americas', Estonia: 'Europe', Eswatini: 'Africa', Ethiopia: 'Africa',
  Fiji: 'Oceania', Finland: 'Europe', France: 'Europe', Gabon: 'Africa',
  Gambia: 'Africa', Georgia: 'Asia', Germany: 'Europe', Ghana: 'Africa',
  Greece: 'Europe', Guatemala: 'Americas', Guinea: 'Africa', Guyana: 'Americas',
  Haiti: 'Americas', Honduras: 'Americas', Hungary: 'Europe', Iceland: 'Europe',
  India: 'Asia', Indonesia: 'Asia', Iran: 'Asia', Iraq: 'Asia', Ireland: 'Europe',
  Israel: 'Asia', Italy: 'Europe', Jamaica: 'Americas', Japan: 'Asia',
  Jordan: 'Asia', Kazakhstan: 'Asia', Kenya: 'Africa', Kuwait: 'Asia',
  Kyrgyzstan: 'Asia', Laos: 'Asia', Latvia: 'Europe', Lebanon: 'Asia',
  Lesotho: 'Africa', Liberia: 'Africa', Libya: 'Africa', Lithuania: 'Europe',
  Luxembourg: 'Europe', Madagascar: 'Africa', Malawi: 'Africa', Malaysia: 'Asia',
  Maldives: 'Asia', Mali: 'Africa', Malta: 'Europe', Mauritania: 'Africa',
  Mauritius: 'Africa', Mexico: 'Americas', Moldova: 'Europe', Monaco: 'Europe',
  Mongolia: 'Asia', Montenegro: 'Europe', Morocco: 'Africa', Mozambique: 'Africa',
  Myanmar: 'Asia', Namibia: 'Africa', Nepal: 'Asia', Netherlands: 'Europe',
  'New Zealand': 'Oceania', Nicaragua: 'Americas', Niger: 'Africa', Nigeria: 'Africa',
  'North Korea': 'Asia', 'North Macedonia': 'Europe', Norway: 'Europe', Oman: 'Asia',
  Pakistan: 'Asia', Panama: 'Americas', 'Papua New Guinea': 'Oceania', Paraguay: 'Americas',
  Peru: 'Americas', Philippines: 'Asia', Poland: 'Europe', Portugal: 'Europe',
  Qatar: 'Asia', Romania: 'Europe', Russia: 'Europe', Rwanda: 'Africa',
  'Saudi Arabia': 'Asia', Senegal: 'Africa', Serbia: 'Europe', 'Sierra Leone': 'Africa',
  Singapore: 'Asia', Slovakia: 'Europe', Slovenia: 'Europe', Somalia: 'Africa',
  'South Africa': 'Africa', 'South Korea': 'Asia', 'South Sudan': 'Africa',
  Spain: 'Europe', 'Sri Lanka': 'Asia', Sudan: 'Africa', Suriname: 'Americas',
  Sweden: 'Europe', Switzerland: 'Europe', Syria: 'Asia', Taiwan: 'Asia',
  Tajikistan: 'Asia', Tanzania: 'Africa', Thailand: 'Asia', Togo: 'Africa',
  'Trinidad and Tobago': 'Americas', Tunisia: 'Africa', Turkey: 'Asia',
  Turkmenistan: 'Asia', Uganda: 'Africa', Ukraine: 'Europe',
  'United Arab Emirates': 'Asia', 'United Kingdom': 'Europe',
  'United States': 'Americas', Uruguay: 'Americas', Uzbekistan: 'Asia',
  Venezuela: 'Americas', Vietnam: 'Asia', Yemen: 'Asia', Zambia: 'Africa',
  Zimbabwe: 'Africa'
}

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref<any[]>([])
  const search = ref('')
  const region = ref('')
  const loading = ref(false)

  async function fetchAll() {
    loading.value = true
    const res = await fetch('https://countriesnow.space/api/v0.1/countries/info?returns=name,flag,capital,currency')
    const json = await res.json()
    countries.value = json.data.map((c: any) => ({
      ...c,
      region: regionMap[c.name] || 'Other'
    }))
    loading.value = false
  }

  const filtered = computed(() => {
    return countries.value
      .filter(c => c?.name)
      .filter(c => c.name.toLowerCase().includes(search.value.toLowerCase()))
      .filter(c => region.value ? c.region === region.value : true)
      .sort((a, b) => a.name.localeCompare(b.name))
  })

  return { countries, search, region, loading, filtered, fetchAll }
})