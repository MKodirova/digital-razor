<template>
  <div>
    <div class="lg:hidden flex mt-6">
      <card-swiper />
    </div>
    <div class="lg:flex hidden items-center space-x-6 my-20">
      <div v-for="(card, index) in cards" :key="index">
        <div
          class="bg-light-black relative shadow p-6 w-80 h-500 border-transparent border-2 rounded-sm hover:border-red-500"
        >
          <div class="rounded-xl bg-gradient-to-t from-blue to-light-blue">
            <img :src="card.img" class="w-80 h-72" />
          </div>
          <div
            class="text-white font-black text-2xl h-10 text-center uppercase mt-5"
          >
            {{ card.title }}
          </div>
          <div class="absolute bottom-5 inset-x-5 block mt-6">
            <div class="text-gray-200 text-sm text-center mb-4">
              {{ card.subtitle }}
            </div>
            <div class="flex items-center justify-center">
              <button
                class="text-white border flex items-center border-red-500 rounded-sm p-4 text-lg font-black"
              >
                Подробнее
                <img src="images/vector.png" class="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardSwiper from "./CardSwiper.vue";
export default {
  components: { CardSwiper },
  name: "Card",
  data() {
    return {
      cards: [
        {
          img: "images/img.png",
          title: "Игровые компьютеры",
          subtitle:
            "Создаем системы с учетом требований геймеров и энтузиастов",
        },
        {
          img: "images/computer.png",
          title: "РаБОЧИЕ СТАНЦИИ",
          subtitle:
            "Высокопроизводительные станции созданные для работы в профессиональных пакетах 3D-моделирования и анимации",
        },
        {
          img: "images/mono.png",
          title: "МОНОБЛОКИ",
          subtitle:
            "Вмещает в себя всё необходимое и экономит рабочее пространство ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.shadow {
  filter: drop-shadow(0 0 0.3rem #d43c38);
}
</style>
