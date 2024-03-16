<template>
  <section id="ФактовSecond" class="fact hidden lg:block lg:py-[68px]">
    <div class="container fact__container px-[30px]">
      <div class="fact__top-box mb-[41px]">
        <h3
          v-motion-slide-visible-once-left
          class="fact__top-title text-[39px] text-darker-pink mb-[3px] w-max-[510px] duration-150"
        >
          ФАКТЫ О НАШИХ ПРОЕКТАХ
        </h3>
        <p
          class="fact__top-text w-[510px] text-[15px] text-[#330707] duration-150"
          v-motion-slide-visible-once-left
        >
          В центральной части Ташкента мы создали концептуальное жилое
          пространство, гармонично сочетающее современные представления об
          абсолютном удобстве
        </p>
      </div>
      <div class="fact__dual-box flex flex-row justify-between items-center">
        <div
          class="fact__bottom-boxes relative flex flex-col justify-center items-center duration-300"
          v-motion-slide-visible-once-bottom
        >
          <img
            class="fact__dual-images object-cover"
            src="@/assets/images/image__first.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 rounded-b-[15px] bottom-0 text-[24px] text-white bg-darker-pink/85 w-full text-center py-3"
          >
            Роскошь и комфорт
          </p>
        </div>
        <div
          class="fact__bottom-boxes relative flex flex-col justify-center items-center duration-500"
          v-motion-slide-visible-once-bottom
        >
          <img
            class="fact__dual-images object-cover"
            src="@/assets/images/image__second.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 rounded-b-[15px] bottom-0 text-[24px] text-white bg-darker-pink/85 w-full text-center py-3"
          >
            Оазис моды и элегантности
          </p>
        </div>
      </div>
      <div
        class="fact__triple-box flex flex-row justify-between items-center duration-150"
        v-motion-slide-visible-once-bottom
      >
        <div
          class="fact__bottom-mini-boxes relative flex flex-col justify-center items-center"
        >
          <img
            class="fact__triple-images object-cover"
            src="@/assets/images/image__third.png"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 rounded-b-[15px] bottom-0 text-[24px] text-white bg-darker-pink/85 w-full text-center py-3"
          >
            Идеальное место для семейного отдыха
          </p>
        </div>
        <div
          class="fact__bottom-mini-boxes relative flex flex-col justify-center items-center duration-200"
          v-motion-slide-visible-once-bottom
        >
          <img
            class="fact__triple-images object-cover"
            src="@/assets/images/image__fourth.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 rounded-b-[15px] bottom-0 text-[24px] text-white bg-darker-pink/85 w-full text-center py-3"
          >
            Эксклюзивные коллекции
          </p>
        </div>
        <div
          class="fact__bottom-mini-boxes relative flex flex-col justify-center items-center duration-300"
          v-motion-slide-visible-once-bottom
        >
          <img
            class="fact__triple-images object-cover"
            src="@/assets/images/image__fifth.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 rounded-b-[15px] bottom-0 text-[24px] text-white bg-darker-pink/85 w-full text-center py-3"
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

  &__dual-box {
    margin-bottom: 45px;
  }

  &__bottom-boxes {
    width: 100%;
    max-width: 578px;
    height: 341px;
    overflow: hidden;
    border-radius: 15px;
  }

  &__dual-images {
    width: 100%;
    max-width: 578px;
    height: 341px;
    overflow: hidden;
    transition: 0.9s ease;
    cursor: pointer;
    &:hover {
      transition: 0.9s ease;
      transform: scale(1.1);
    }
  }
  &__bottom-mini-boxes {
    width: 100%;
    max-width: 376px;
    height: 341px;
    overflow: hidden;
    border-radius: 15px;
  }
  &__bottom-titles {
    font-family: "Lora";
  }

  &__triple-box {
  }

  &__triple-images {
    width: 100%;
    max-width: 376px;
    height: 341px;
    overflow: hidden;
    transition: 0.9s ease;
    cursor: pointer;
    &:hover {
      transition: 0.9s ease;
      transform: scale(1.1);
    }
  }
}
@media (max-width: 1279px) {
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

    &__dual-box {
      margin-bottom: 45px;
    }

    &__bottom-boxes {
      width: 100%;
      max-width: 450px;
      height: 340px;
      overflow: hidden;
      border-radius: 15px;
    }

    &__dual-images {
      width: 100%;
      max-width: 450px;
      height: 340px;
      overflow: hidden;
      transition: 0.9s ease;
      cursor: pointer;
      &:hover {
        transition: 0.9s ease;
        transform: scale(1.1);
      }
    }
    &__bottom-mini-boxes {
      width: 100%;
      max-width: 290px;
      height: 300px;
      overflow: hidden;
      border-radius: 15px;
    }
    &__bottom-titles {
      font-family: "Lora";
    }

    &__triple-box {
    }

    &__triple-images {
      width: 100%;
      max-width: 290px;
      height: 300px;
      overflow: hidden;
      transition: 0.9s ease;
      cursor: pointer;
      &:hover {
        transition: 0.9s ease;
        transform: scale(1.1);
      }
    }
  }
}
</style>
