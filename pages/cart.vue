<!-- pages/cart.vue -->
<template>
  <!-- Koszyk -->
  <main class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
    <!-- Lista produktów -->
    <section class="md:col-span-2">
      <div class="flex items-center gap-2 text-2xl font-bold mb-6">
        <span class="material-symbols-outlined">shopping_cart</span>
        <h2>Twój koszyk</h2>
      </div>

      <div class="space-y-6" v-if="cartItems.length > 0">
        <CartItem
          v-for="item in cartItems" :key="item.id"
          :product="item"
          @update:quantity="(val, id) => updateQuantity(id, val)"
        />
        <!-- Przykład usuwania produktu -->
        <button
          v-for="item in cartItems"
          :key="'remove-' + item.id"
          class="text-red-600 underline ml-2"
          @click="removeItem(item.id)"
        >
          Usuń {{ item.title }}
        </button>
      </div>

      <p v-else class="text-center text-gray-600 py-12">Koszyk jest pusty.</p>
    </section>

    <!-- Podsumowanie -->
    <aside class="bg-white p-6 rounded shadow-md">
      <h3 class="text-xl font-bold mb-4">Podsumowanie</h3>
      <div class="mb-2 flex justify-between">
        <span>Wartość produktów:</span>
        <span>{{ totalPrice.toFixed(2) }} zł</span>
      </div>
      <div class="mb-2 flex justify-between">
        <span>Dostawa:</span>
        <span class="text-green-700">0,00 zł</span>
      </div>
      <hr class="my-4" />
      <div class="mb-4 flex justify-between font-bold text-lg">
        <span>Razem:</span>
        <span>{{ totalPrice.toFixed(2) }} zł</span>
      </div>
      <button
        class="w-full bg-green-600 hover:bg-green-700 text-white font-bold 
        py-3 mb-2"
        @click="addRandomProduct"
      >
        DODAJ LOSOWY PRODUKT
      </button>
      <a href="#" class="text-green-600 hover:underline block text-center"
        >Kontynuuj zakupy</a
      >
    </aside>
  </main>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'

const cartItems = ref([
  {
    id: 1,
    title: "Materac 140x200 kieszeniowy BLANCO",
    description: "7 stref, średnio twardy, pokrowiec zdejmowany",
    price: 475.0,
    quantity: 1,
    image: "https://picsum.photos/120/80",
  },
  {
    id: 2,
    title: "Poduszka ortopedyczna profilowana",
    description: "Pianka memory 40x30 cm",
    price: 69.0,
    quantity: 2,
    image: "https://picsum.photos/121/80",
  },
  {
    id: 3,
    title: "Kołdra całoroczna z włókien kukurydzy",
    description: "Rozmiar: 160x200 cm",
    price: 199.0,
    quantity: 1,
    image: "https://picsum.photos/122/80",
  },
])

function updateQuantity(id: number, newQuantity: number) {
  const item = cartItems.value.find((p) => p.id === id)
  if (item) item.quantity = newQuantity
}

// computed - obliczanie sumy
const totalPrice = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
})

// watch - obserwacja zmian w koszyku
watch(cartItems, (nowa, stara) => {
  console.log('Koszyk się zmienił:', nowa)
}, { deep: true })

// splice - usuwanie produktu po id
function removeItem(id: number) {
  const idx = cartItems.value.findIndex(item => item.id === id)
  if (idx !== -1) {
    cartItems.value.splice(idx, 1)
  }
}

// push - dodawanie nowego produktu
function addRandomProduct() {
  const produkty = [
    { id: 4, title: "Koc bawełniany", price: 99, description: "Miękki koc", image: "https://picsum.photos/123/80" },
    { id: 5, title: "Prześcieradło 160x200", price: 49, description: "Białe prześcieradło", image: "https://picsum.photos/124/80" }
  ]
  // filter + includes - dodaj tylko, jeśli nie ma już produktu o tym id
  const istniejąceId = cartItems.value.map(item => item.id)
  const doDodania = produkty.filter(p => !istniejąceId.includes(p.id))
  if (doDodania.length > 0) {
    cartItems.value.push({ ...doDodania[0], quantity: 1 })
  }
}
</script>

<style scoped></style>