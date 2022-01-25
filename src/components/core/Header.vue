<template>
  <div class="max-w-7xl mx-auto px-4 border-b border-gray-50 pt-5 pb-11">
    <div class="flex items-center text-white justify-between">
      <div class="flex items-center space-x-8">
        <div v-for="(item, index) in items" :key="index">
          <p class="text-xl">{{ item.name }}</p>
        </div>
      </div>
      <div class="flex items-center space-x-8 text-xl">
        <div class="flex items-center">
          <img src="images/location.png" class="w-4 h-5 mr-2" />
          <p>Санкт-Петербург</p>
        </div>
        <div class="flex items-center">
          <img src="images/phone.png" class="w-6 h-6 mr-2" />
          <p>8 800 500-99-26</p>
        </div>
        <div><img src="images/personal.png" class="w-16 h-16" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      items: [
        { name: "Контакты", link: "/" },
        { name: "Оплата", link: "/" },
        { name: "Доставка", link: "/" },
        { name: "FAQ", link: "/" },
        { name: "Задайте вопрос", link: "/" },
      ],
    };
  },
};
</script>

<style></style>
