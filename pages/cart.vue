<!-- pages/cart.vue -->
<template>
  <main class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
    <!-- Lista produktów -->
    <section class="md:col-span-2">
      <div class="flex items-center gap-2 text-2xl font-bold mb-6">
        <span class="material-symbols-outlined">shopping_cart</span>
        <h2>Twój koszyk</h2>
      </div>

      <div v-if="items.length" class="space-y-6">
        <!-- pojedynczy wiersz koszyka -->
        <div
          v-for="p in items"
          :key="p.id"
          class="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <img :src="p.img" class="rounded border" :alt="p.title" width="120" height="80" />
          <div class="flex-1">
            <h3 class="font-bold">{{ p.title }}</h3>
            <p class="text-sm text-gray-500">{{ p.subtitle }}</p>
          </div>

          <!-- przyciski +/- -->
          <div class="flex items-center gap-2">
            <button
              class="px-3 py-1 border"
              @click="dec(p)"
              :disabled="p.qty === 1"
            >
              –
            </button>
            <span>{{ p.qty }}</span>
            <button class="px-3 py-1 border" @click="inc(p)">+</button>
          </div>

          <p class="text-green-700 font-bold">
            {{ (p.price * p.qty).toFixed(2) }} zł
          </p>
        </div>
      </div>

      <p v-else class="text-center text-gray-600 py-12">Koszyk jest pusty.</p>
    </section>

    <!-- Podsumowanie -->
    <aside class="bg-white p-6 rounded shadow-md">
      <h3 class="text-xl font-bold mb-4">Podsumowanie</h3>
      <div class="mb-2 flex justify-between">
        <span>Wartość produktów:</span>
        <span>{{ sum.toFixed(2) }} zł</span>
      </div>
      <div class="mb-2 flex justify-between">
        <span>Dostawa:</span>
        <span class="text-green-700">0,00 zł</span>
      </div>
      <hr class="my-4" />
      <div class="mb-4 flex justify-between font-bold text-lg">
        <span>Razem:</span>
        <span>{{ sum.toFixed(2) }} zł</span>
      </div>
      <button
        class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mb-2"
      >
        DOSTAWA I PŁATNOŚĆ
      </button>
      <NuxtLink to="/" class="text-green-600 hover:underline block text-center"
        >Kontynuuj zakupy</NuxtLink
      >
    </aside>
  </main>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

interface CartRow {
  id: string
  title: string
  subtitle: string
  img: string
  price: number
  qty: number
}

// tymczasowe, statyczne dane – w prawdziwym projekcie pobierzesz z useCart()
const items = reactive<CartRow[]>([
  {
    id: 'mattress',
    title: 'Materac 140x200 BLANCO',
    subtitle: '7 stref, średnio twardy, pokrowiec zdejmowany',
    img: 'https://picsum.photos/120/80?1',
    price: 475,
    qty: 1,
  },
  {
    id: 'pillow',
    title: 'Poduszka ortopedyczna profilowana',
    subtitle: 'Pianka memory 40×30 cm',
    img: 'https://picsum.photos/120/80?2',
    price: 69,
    qty: 2,
  },
  {
    id: 'duvet',
    title: 'Kołdra całoroczna z włókien kukurydzy',
    subtitle: 'Rozmiar 160×200 cm',
    img: 'https://picsum.photos/120/80?3',
    price: 199,
    qty: 1,
  },
])

// inkrementacja / dekrementacja
const inc = (row: CartRow) => (row.qty += 1)
const dec = (row: CartRow) => {
  if (row.qty > 1) row.qty -= 1
}

// łączna wartość koszyka
const sum = computed(() =>
  items.reduce((acc, p) => acc + p.price * p.qty, 0),
)
</script>
