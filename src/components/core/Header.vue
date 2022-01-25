<template>
  <div class="container mx-auto pt-5">
    <div class="lg:hidden flex items-center justify-between">
      <img src="images/personal.png" class="w-16 h-16" />
      <img src="images/logo.png" class="w-12 h-12" />
      <img src="images/hamburger.png" alt="" />
    </div>
    <div
      class="lg:flex hidden items-center text-white justify-between border-b border-light-gray border-opacity-80 pb-8"
    >
      <div class="flex items-center space-x-8 ml-32">
        <div v-for="(item, index) in menu" :key="index">
          <p class="text-xl text-gray-300">{{ item.name }}</p>
        </div>
      </div>
      <div class="flex items-center space-x-8 text-xl">
        <div class="flex items-center">
          <img src="images/location.png" class="w-4 h-5 mr-2" />
          <p class="text-gray-300">Санкт-Петербург</p>
        </div>
        <div class="flex items-center">
          <img src="images/phone.png" class="w-6 h-6 mr-2" />
          <p>8 800 500-99-26</p>
        </div>
        <div><img src="images/personal.png" class="w-16 h-16" /></div>
      </div>
    </div>
    <div class="lg:flex hidden items-center text-white justify-between mt-8">
      <div class="flex items-center space-x-8">
        <img src="images/logo.png" alt="" />
        <div v-for="(item, index) in subMenu" :key="index">
          <p class="text-xl">{{ item.name }}</p>
        </div>
      </div>
      <div class="flex items-center space-x-6 text-xl">
        <img src="images/brush.png" class="w-10 h-10 mr-2" />
        <img src="images/basket.png" class="w-9 h-8" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menu: [
        { name: "Контакты", link: "/" },
        { name: "Оплата", link: "/" },
        { name: "Доставка", link: "/" },
        { name: "FAQ", link: "/" },
        { name: "Задайте вопрос", link: "/" },
      ],
      subMenu: [
        { name: "Игровые компьютеры" },
        { name: "Рабочие станции" },
        { name: "Моноблоки" },
      ],
    };
  },
};
</script>

<style></style>
