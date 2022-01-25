<template>
  <div class="container mx-auto mt-6">
    <!-- <button class="flex justify-start focus:outline-none">
      <img src="images/back_btn.png" class="w-16 h-16" />
    </button> -->
    <div class="flex items-center justify-center">
      <div
        class="uppercase font-black text-5xl text-white border-b-2 border-red-500 p-6"
      >
        твой пк
      </div>
      <div></div>
    </div>
    <div
      class="flex items-center justify-center uppercase text-gray-300 text-xl mt-6"
    >
      здесь пока ничего нет...
    </div>
    <div
      class="flex items-center justify-center uppercase text-white text-4xl font-semibold"
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
