<template>
  <section id="Фактов" class="fact hidden md:block lg:hidden md:py-[72px]">
    <div
      class="container fact__container px-[30px] flex flex-col justify-center items-center"
    >
      <div class="fact__top-box mr-auto mb-[44px]">
        <h3
          class="fact__top-title mb-[35px] text-[41px] text-darker-pink duration-300"
          v-motion-slide-visible-once-top
        >
          LOYIHALARIMIZ HAQIDA FAKTLAR
        </h3>
        <p
          class="fact__top-text w-[444px] text-[16px] duration-300"
          v-motion-slide-visible-once-top
        >
          Toshkentning markaziy qismida biz kontseptual turar joy yaratdik
          haqidagi zamonaviy g'oyalarni uyg'un tarzda birlashtirgan makon mutlaq
          qulaylik
        </p>
      </div>
      <div
        class="fact__bottom-single-box relative duration-500"
        v-motion-slide-visible-once-left
      >
        <img
          class="fact__image object-cover rounded-[15px]"
          src="@/assets/images/image__first.jpg"
          alt="images"
        />
        <p
          class="fact__bottom-titles absolute z-10 bottom-[0px] text-[24px] text-center pl-3 text-white w-full py-3 bg-darker-pink/85"
        >
          Hashamat va qulaylik
        </p>
      </div>
      <div
        class="fact__bottom-dual-boxes w-full flex flex-row justify-between items-center"
      >
        <div
          class="fact__bottom-dual-box relative flex justify-center items-center duration-500"
          v-motion-pop-visible-once
        >
          <img
            class="fact__images object-cover rounded-[15px]"
            src="@/assets/images/image__second.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 bottom-[0px] text-[24px] text-center text-white w-[360px] py-3 bg-darker-pink/85"
          >
            Moda va nafislik vohasi
          </p>
        </div>
        <div
          class="fact__bottom-dual-box relative flex justify-center items-center duration-500"
          v-motion-pop-visible-once
        >
          <img
            class="fact__images object-cover rounded-[15px]"
            src="@/assets/images/image__third.png"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 bottom-[0px] text-[24px] text-center text-white w-[360px] py-3 bg-darker-pink/85"
          >
            Oilaviy dam olish uchun ideal joy
          </p>
        </div>
      </div>
      <div
        class="fact__bottom-dual-boxes w-full flex flex-row justify-between items-center"
      >
        <div
          class="fact__bottom-dual-box relative flex justify-center items-center duration-500"
          v-motion-pop-visible-once
        >
          <img
            class="fact__images object-cover rounded-[15px]"
            src="@/assets/images/image__fourth.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 bottom-[0px] text-[24px] text-center text-white w-[360px] py-3 bg-darker-pink/85"
          >
            Eksklyuziv kolleksiyalar
          </p>
        </div>
        <div
          class="fact__bottom-dual-box relative flex justify-center items-center duration-500"
          v-motion-pop-visible-once
        >
          <img
            class="fact__images object-cover rounded-[15px]"
            src="@/assets/images/image__fifth.jpg"
            alt="images"
          />
          <p
            class="fact__bottom-titles absolute z-10 bottom-[0px] text-[24px] text-center text-white w-[360px] py-3 bg-darker-pink/85"
          >
            Milliy uslub
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
@media (max-width: 1023px) {
  .fact {
    &__container {
    }

    &__top-box {
    }

    &__top-title {
    }

    &__top-text {
    }

    &__bottom-single-box {
      width: 100%;
      height: 336px;
      overflow: hidden;
      border-radius: 15px;
    }

    &__image {
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

    &__bottom-dual-boxes {
      margin-top: 60px;
    }

    &__bottom-dual-box {
      width: 100%;
      max-width: 342px;
      height: 336px;
      overflow: hidden;
      border-radius: 15px;
    }

    &__images {
      width: 100%;
      max-width: 342px;
      height: 336px;
      transition: 0.9s ease;
      cursor: pointer;
      overflow: hidden;

      &:hover {
        transition: 0.9s ease;
        transform: scale(1.1);
      }
    }
  }
}
@media (max-width: 820px) {
  .fact {
    &__container {
    }

    &__top-box {
    }

    &__top-title {
    }

    &__top-text {
    }

    &__bottom-single-box {
      width: 100%;
      height: 336px;
      overflow: hidden;
      border-radius: 15px;
    }

    &__image {
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

    &__bottom-dual-boxes {
      margin-top: 60px;
    }

    &__bottom-dual-box {
      width: 100%;
      max-width: 342px;
      height: 336px;
      overflow: hidden;
      border-radius: 15px;
    }

    &__images {
      width: 100%;
      max-width: 342px;
      height: 336px;
      transition: 0.9s ease;
      cursor: pointer;
      overflow: hidden;
      &:hover {
        transition: 0.9s ease;
        transform: scale(1.1);
      }
    }
  }
}
@media (max-width: 768px) {
  .fact {
    &__container {
    }

    &__top-box {
    }

    &__top-title {
    }

    &__top-text {
    }

    &__bottom-single-box {
    }

    &__image {
    }

    &__bottom-titles {
    }

    &__bottom-dual-boxes {
      margin-top: 20px;
    }

    &__bottom-dual-box {
    }

    &__images {
      width: 100%;
      max-width: 342px;
      height: 336px;
    }
  }
}
</style>
