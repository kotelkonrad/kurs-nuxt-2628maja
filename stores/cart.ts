import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useCartStore = defineStore("cart", () => {
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
  ]);

  function updateQuantity(id: number, newQuantity: number) {
    const item = cartItems.value.find((p) => p.id === id);
    if (item) item.quantity = newQuantity;
  }

  const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );

  watch(
    cartItems,
    (nowa) => {
      console.log("Koszyk się zmienił:", nowa);
    },
    { deep: true },
  );

  function removeItem(id: number) {
    const idx = cartItems.value.findIndex((item) => item.id === id);
    if (idx !== -1) {
      cartItems.value.splice(idx, 1);
    }
  }

  function addRandomProduct() {
    const produkty = [
      {
        id: 4,
        title: "Koc bawełniany",
        price: 99,
        description: "Miękki koc",
        image: "https://picsum.photos/123/80",
      },
      {
        id: 5,
        title: "Prześcieradło 160x200",
        price: 49,
        description: "Białe prześcieradło",
        image: "https://picsum.photos/124/80",
      },
    ];
    const istniejąceId = cartItems.value.map((item) => item.id);
    const doDodania = produkty.filter((p) => !istniejąceId.includes(p.id));
    if (doDodania.length > 0) {
      cartItems.value.push({ ...doDodania[0], quantity: 1 });
    }
  }

  return {
    cartItems,
    updateQuantity,
    totalPrice,
    removeItem,
    addRandomProduct,
  };
});
