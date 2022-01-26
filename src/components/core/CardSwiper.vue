<template>
  <div class="mt-4 mb-7 gap-3">
    <swiper class="swiper" ref="swiper" :options="cardOption">
      <swiper-slide
        v-for="(card, index) in cards"
        :key="index"
        class="flex items-center justify-center"
      >
        <div
          class="relative bg-light-black shadow p-6 w-72 border-transparent border-2 rounded-sm border-red-500"
        >
          <div class="rounded-xl bg-gradient-to-t from-blue to-light-blue">
            <img :src="card.img" class="w-60 h-64" />
          </div>
          <div
            class="text-white font-black text-2xl text-center uppercase mt-5"
          >
            {{ card.title }}
          </div>

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
          <div class="absolute top-1/2 flex justify-between inset-x-0">
            <div
              @click="prev()"
              class="swiper-button-prev border rounded-full border-white shadow-md absolute -left-14"
              slot="button-prev"
            ></div>
            <div
              @click="next()"
              class="swiper-button-next border rounded-full border-white shadow-md absolute -right-14"
              slot="button-next"
            ></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "CardSwiper",
  data() {
    return {
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
  --swiper-theme-color: white;
  background-color: black;
  border-color: white;
  padding: 22px;
  color: white !important;
  fill: white !important;
  stroke: white !important;
  border-radius: 100%;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 16px;
}
</style>
