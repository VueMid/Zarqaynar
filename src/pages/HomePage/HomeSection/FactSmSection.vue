<template>
  <section id="Фактов" class="fact md:hidden py-[59px]">
    <div
      class="container fact__container w-full flex flex-col justify-center items-center gap-[30px]"
    >
      <div class="fact__top-box">
        <h3
          class="fact__top-title text-[26px] text-darker-pink mb-[22px] w-[326px] duration-300"
          v-motion-slide-visible-once-top
        >
          ФАКТЫ О НАШИХ ПРОЕКТАХ
        </h3>
        <p
          class="fact__top-text w-max-[391px] text-[16px] text-[#4a4a4a] duration-500"
          v-motion-slide-visible-once-top
        >
          В центральной части Ташкента мы создали концептуальное жилое
          пространство, гармонично сочетающее современные представления об
          абсолютном удобстве
        </p>
      </div>
      <div
        class="fact__bottom-box flex flex-col justify-center items-center gap-[15px] w-full"
      >
        <div
          class="fact__bottom-boxes relative flex flex-col justify-center items-center w-full duration-500"
          v-motion-slide-visible-once-left
        >
          <img
            class="fact__images w-max-[391px] h-[285px] w-full object-cover"
            src="@/assets/images/image__first.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 bottom-[0px] text-[24px] text-white bg-darker-pink/85 w-full text-center py-3"
          >
            Роскошь и комфорт
          </p>
        </div>
        <div
          class="fact__bottom-boxes relative flex flex-col justify-center items-center w-full duration-500"
          v-motion-slide-visible-once-right
        >
          <img
            class="fact__images w-max-[391px] h-[285px] w-full object-cover"
            src="@/assets/images/image__second.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 bottom-[0px] text-[24px] text-white bg-darker-pink/85 w-full text-center py-3"
          >
            Оазис моды и элегантности
          </p>
        </div>
        <div
          class="fact__bottom-boxes relative flex flex-col justify-center items-center w-full duration-500"
          v-motion-slide-visible-once-left
        >
          <img
            class="fact__images w-max-[391px] h-[285px] w-full object-cover"
            src="@/assets/images/image__third.png"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 bottom-[0px] text-[24px] text-white bg-darker-pink/85 w-full text-center py-3"
          >
            Идеальное место для семейного отдыха
          </p>
        </div>
        <div
          class="fact__bottom-boxes relative flex flex-col justify-center items-center w-full duration-500"
          v-motion-slide-visible-once-right
        >
          <img
            class="fact__images w-max-[391px] h-[285px] w-full object-cover"
            src="@/assets/images/image__fourth.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 bottom-[0px] text-[24px] text-white bg-darker-pink/85 w-full text-center py-3"
          >
            Эксклюзивные коллекции
          </p>
        </div>
        <div
          class="fact__bottom-boxes relative flex flex-col justify-center items-center w-full duration-500"
          v-motion-slide-visible-once-left
        >
          <img
            class="fact__images w-max-[391px] h-[285px] w-full object-cover"
            src="@/assets/images/image__fifth.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 bottom-[0px] text-[24px] text-white bg-darker-pink/85 w-full text-center py-3"
          >
            Национальный стиль
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style scoped lang="scss">
.fact {
  &__container {
  }

  &__top-box {
  }

  &__top-title {
    font-family: "Lora";
  }

  &__top-text {
    font-family: "Montserrat";
  }

  &__bottom-box {
  }

  &__bottom-boxes {
    width: 100%;
    max-width: 391px;
    height: 285px;
    overflow: hidden;
    border-radius: 15px;
  }

  &__images {
    transition: 0.9s ease;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      transition: 0.9s ease;
      transform: scale(1.1);
    }
  }

  &__bottom-titles {
  }
}
</style>
