<template>
  <header class="bg-green-600 text-white p-4">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="material-symbols-outlined">eco</span>
          <h1 class="text-2xl font-bold whitespace-nowrap">Green Allegro</h1>
        </NuxtLink>

        <!-- Desktop search bar -->
        <div
          class="desktop-search hidden md:flex flex-1 max-w-2xl bg-white rounded overflow-hidden"
        >
          <input
            type="text"
            placeholder="Czego szukasz?"
            class="w-full px-4 py-3 text-black focus:outline-none"
          />
          <select
            class="bg-white text-black px-4 py-3 border-l border-gray-300 focus:outline-none"
          >
            <option>Wszystkie kategorie</option>
            <option>Dom</option>
            <option>Elektronika</option>
          </select>
          <button
            class="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 flex items-center gap-1"
          >
            <span class="material-symbols-outlined">search</span> SZUKAJ
          </button>
        </div>

        <nav class="space-x-4 hidden md:flex items-center">
          <NuxtLink to="/" class="hover:underline flex items-center gap-1">
            <span class="material-symbols-outlined">home</span>Home
          </NuxtLink>
          <a href="#" class="hover:underline flex items-center gap-1">
            <span class="material-symbols-outlined">category</span>Kategorie
          </a>
          <a href="#" class="hover:underline flex items-center gap-1">
            <span class="material-symbols-outlined">sell</span>Promocje
          </a>
          <a href="#" class="hover:underline flex items-center gap-1">
            <span class="material-symbols-outlined">contact_support</span
            >Kontakt
          </a>
        </nav>

        <!-- Hamburger for mobile -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-white text-2xl focus:outline-none"
          >
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      <!-- Mobile search bar + special for max-1100px -->
      <div class="custom-mobile-search hidden mt-4">
        <div class="flex flex-col w-full bg-white">
          <input
            type="text"
            placeholder="Czego szukasz?"
            class="w-full px-4 py-3 text-black focus:outline-none"
          />
          <select
            class="bg-white text-black px-4 py-3 border-t border-gray-300 focus:outline-none appearance-none"
          >
            <option>Wszystkie kategorie</option>
            <option>Dom</option>
            <option>Elektronika</option>
          </select>
          <button
            class="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-3 w-full flex items-center justify-center gap-1"
          >
            <span class="material-symbols-outlined">search</span> SZUKAJ
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <!-- 
  Dynamiczne przypisywanie klas CSS do elementu menu mobilnego za pomocą składni :class w Vue.

  Stałe klasy:
    - 'md:hidden' – ukrywa menu na urządzeniach >= md (czyli menu pokazuje się tylko na ekranach mobilnych)
    - 'overflow-hidden' – ukrywa zawartość, gdy wysokość elementu jest ograniczona
    - 'transition-all duration-300' – umożliwia płynne animowanie wszystkich zmian stylu przez 300 ms
    - 'bg-green-700' – ustawia tło menu na ciemnozielony

  Dynamiczne klasy (zależne od isMenuOpen):
    - Jeśli isMenuOpen === true → dodana zostaje klasa 'max-h-screen', co ustawia maksymalną wysokość na wysokość całego ekranu, czyli menu się rozwija
    - Jeśli isMenuOpen === false → dodana zostaje klasa 'max-h-0', co ogranicza maksymalną wysokość do 0, czyli menu się zwija

  Dzięki połączeniu transition i max-height uzyskujemy płynny efekt rozwijania/zwijania menu bez użycia JavaScript do manipulacji stylem
-->
    <div
      id="mobile-menu"
      :class="[
        'md:hidden overflow-hidden transition-all duration-300 bg-green-700',
        isMenuOpen ? 'max-h-screen' : 'max-h-0',
      ]"
    >
      <div class="px-4 pt-4 pb-2">
        <a
          href="#"
          class="block py-2 text-white hover:underline flex items-center gap-1"
        >
          <span class="material-symbols-outlined">home</span>Home
        </a>
        <a
          href="#"
          class="block py-2 text-white hover:underline flex items-center gap-1"
        >
          <span class="material-symbols-outlined">category</span>Kategorie
        </a>
        <a
          href="#"
          class="block py-2 text-white hover:underline flex items-center gap-1"
        >
          <span class="material-symbols-outlined">sell</span>Promocje
        </a>
        <a
          href="#"
          class="block py-2 text-white hover:underline flex items-center gap-1"
        >
          <span class="material-symbols-outlined">contact_support</span>Kontakt
        </a>
      </div>
    </div>
  </header>

  <NuxtPage />

  <!-- Footer -->
  <footer class="bg-green-600 text-white py-6 mt-12">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <p>&copy; 2025 Green Allegro. Wszystkie prawa zastrzeżone.</p>
    </div>
  </footer>
</template>
<script setup></script>
