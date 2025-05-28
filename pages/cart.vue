<script lang="ts" setup>
import { useCartStore } from "~/stores/cart";
const cart = useCartStore();
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
    <section class="md:col-span-2">
      <div class="flex items-center gap-2 text-2xl font-bold mb-6">
        <span class="material-symbols-outlined">shopping_cart</span>
        <h2>Twój koszyk</h2>
      </div>

      <div class="space-y-6" v-if="cart.cartItems.length > 0">
        <CartItem
          v-for="item in cart.cartItems"
          :key="item.id"
          :product="item"
          @update:quantity="(val, id) => cart.updateQuantity(id, val)"
        />
        <button
          v-for="item in cart.cartItems"
          :key="'remove-' + item.id"
          class="text-red-600 underline ml-2"
          @click="cart.removeItem(item.id)"
        >
          Usuń {{ item.title }}
        </button>
      </div>

      <p v-else class="text-center text-gray-600 py-12">Koszyk jest pusty.</p>
    </section>

    <aside class="bg-white p-6 rounded shadow-md">
      <h3 class="text-xl font-bold mb-4">Podsumowanie</h3>
      <div class="mb-2 flex justify-between">
        <span>Wartość produktów:</span>
        <span>{{ cart.totalPrice.toFixed(2) }} zł</span>
      </div>
      <div class="mb-2 flex justify-between">
        <span>Dostawa:</span>
        <span class="text-green-700">0,00 zł</span>
      </div>
      <hr class="my-4" />
      <div class="mb-4 flex justify-between font-bold text-lg">
        <span>Razem:</span>
        <span>{{ cart.totalPrice.toFixed(2) }} zł</span>
      </div>
      <button
        class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mb-2"
        @click="cart.addRandomProduct"
      >
        DODAJ LOSOWY PRODUKT
      </button>
      <a href="#" class="text-green-600 hover:underline block text-center"
        >Kontynuuj zakupy</a
      >
    </aside>
  </main>
</template>
