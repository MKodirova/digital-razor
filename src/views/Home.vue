<template>
  <div class="container mx-auto mt-6">
    <!-- <button class="flex justify-start focus:outline-none">
      <img src="images/back_btn.png" class="w-16 h-16" />
    </button> -->
    <div class="flex items-center justify-center">
      <div
        class="uppercase font-black lg:text-5xl text-2xl text-white border-b-2 border-red-500 lg:p-6 p-3"
      >
        твой пк
      </div>
      <div></div>
    </div>
    <div
      class="flex items-center justify-center uppercase text-gray-300 lg:text-xl text-lg mt-6"
    >
      здесь пока ничего нет...
    </div>
    <div
      class="flex items-center justify-center uppercase text-center text-white lg:text-4xl text-2xl font-semibold"
    >
      начни создавать свой пк
    </div>
    <div class="flex items-center justify-center">
      <card />
    </div>
  </div>
</template>

<script>
import Card from "../components/core/Card.vue";
export default {
  components: { Card },
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>
