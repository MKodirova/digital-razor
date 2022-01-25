<template>
  <div class="relative">
    <swiper ref="swiper" class="swiper" :options="cardOption">
      <swiper-slide
        v-for="(card, index) in cards"
        :key="index"
        class="bg-light-black group relative shadow p-6 w-32 border-transparent border-2 rounded-sm hover:border-red-500"
      >
        <div class="rounded-xl bg-gradient-to-t from-blue to-light-blue">
          <img :src="card.img" class="w-32 h-72" />
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
      </swiper-slide>
    </swiper>
    <div class="absolute group top-1/2 justify-between inset-x-0">
      <div
        slot="button-prev"
        class="swiper-button-prev btn shadow-md group-hover:opacity-100 opacity-0 -left-9"
        @click="prev()"
      />
      <div
        slot="button-next"
        class="swiper-button-next btn shadow-md group-hover:opacity-100 opacity-0 -right-9"
        @click="next()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSwiper",
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
      cardOption: {
        direction: "horizontal",
        slideToClickedSlide: false,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 6,
          },
          410: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    },
  },
};
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #059669;
  background-color: white;
  padding: 22px;
  color: #059669 !important;
  fill: #059669 !important;
  stroke: #059669 !important;
  border-radius: 100%;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 13px;
}
</style>
