<template>
  <section id="Компании" class="about mt-[636px] md:mt-[636px] lg:mt-[636px]">
    <video
      class="about__background-video"
      autoplay="true"
      loop
      muted
      playsinline
      preload="auto"
    >
      <source src="@/assets/images/background__gif.mp4" type="video/mp4" />
    </video>
    <div class="container about__container pt-[50px] md:px-[30px]">
      <p
        class="about__mini-title text-[23px] mb-[15px] text-white font-black md:text-[20px] md:mb-[40px] lg:text-[23px] lg:mb-[42px] duration-200"
        v-motion-slide-visible-once-left
      >
        О компании
      </p>
      <h3
        class="about__title text-[27px] text-gold w-max-[390px] mb-[15px] md:text-[33px] md:w-[430px] md:mb-[26px] lg:w-[466px] lg:mb-[28px] lg:leading-[35px] duration-200"
        v-motion-slide-visible-once-left
      >
        Один из ведущих и опытных девелоперов
      </h3>
      <p
        class="about__text text-white text-[14px] w-max-[390px] md:w-[430px] lg:w-[466px] lg:text-[18px] duration-200"
        v-motion-slide-visible-once-left
      >
        Zarqaynar торговый сентер, команда профессионалов, ставшая единой
        семьей, сплоченная единством мысли и духа во имя создания уникальных
        объектов недвижимости, призванная приносить счастье, радость и комфорт
        людям!
      </p>
      <div
        class="about__bottom-box w-full flex flex-row justify-between items-start mt-[50px] md:flex md:justify-start md:items-center"
      >
        <div
          class="about__mini-boxes duration-300"
          v-motion-slide-visible-once-bottom
        >
          <h5 class="text-[33px] text-white w-[125px]">
            <span class="num">0,9</span> га
          </h5>
          <div
            class="aboout__main-texts flex flex-row justify-start items-center gap-4"
          >
            <img
              class="w-[14px] h-[14px] object-cover"
              src="@/assets/images/gold.png"
              alt="triangle"
            />
            <p
              class="text-[14px] text-white w-[124px] md:w-[215px] md:text-[18px]"
            >
              площадь территории
            </p>
          </div>
        </div>
        <div
          class="about__mini-boxes duration-[300ms]"
          v-motion-slide-visible-once-bottom
        >
          <h5 class="text-[33px] text-white w-[178px]">
            <span class="num">36600</span>+ м<sup>2</sup>
          </h5>
          <div
            class="aboout__main-texts flex flex-row justify-start items-center gap-4"
          >
            <img
              class="w-[14px] h-[14px] object-cover"
              src="@/assets/images/gold.png"
              alt="triangle"
            />
            <p
              class="text-[14px] text-white w-[125px] md:w-[215px] md:text-[18px]"
            >
              общая площадь
            </p>
          </div>
        </div>
      </div>
      <div
        class="about__bottom-box w-full flex flex-row justify-between items-start mt-[42px] md:flex md:justify-start md:items-center"
      >
        <div
          class="about__mini-boxes duration-300"
          v-motion-slide-visible-once-bottom
        >
          <h5 class="text-[33px] text-white w-[125px]">
            <span class="num">0,61</span> га
          </h5>
          <div
            class="aboout__main-texts flex flex-row justify-center items-center gap-4"
          >
            <img
              class="w-[14px] h-[14px] object-cover"
              src="@/assets/images/gold.png"
              alt="triangle"
            />
            <p
              class="text-[14px] text-white w-[115px] md:w-[215px] md:text-[18px]"
            >
              площадь застройки
            </p>
          </div>
        </div>
        <div
          class="about__mini-boxes duration-300"
          v-motion-slide-visible-once-bottom
        >
          <h5 class="text-[33px] text-white w-max-[167px]">
            <span class="num">200</span>+ мест
          </h5>
          <div
            class="aboout__main-texts flex flex-row justify-start items-center gap-4"
          >
            <img
              class="w-[14px] h-[14px] object-cover"
              src="@/assets/images/gold.png"
              alt="triangle"
            />
            <p
              class="text-[14px] text-white w-[105px] md:w-[215px] md:text-[18px]"
            >
              скрытая парковка
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style lang="scss" scoped>
.about {
  height: 620px;
  position: relative;
  &::after {
    z-index: 2;
    position: absolute;
    content: "";
    width: 450px;
    height: 450px;
    bottom: -108px;
    right: 0;
    display: inline-block;
    background-image: url("@/assets/images/building.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__container {
  }
  &__background-video {
    margin: 0 auto !important;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 620px;
    object-fit: cover;
    background-position: center;
  }
  &__mini-title {
    font-family: "Lora" !important;
  }
  &__title {
    font-family: "Lora" !important;
  }
  &__text {
    font-family: "Lora" !important;
  }
}
@media (max-width: 1023px) {
  .about {
    height: 620px;
    position: relative;
    &::after {
      z-index: 2;
      position: absolute;
      content: "";
      width: 300px;
      height: 300px;
      bottom: -73px;
      right: 0;
      display: inline-block;
      background-image: url("@/assets/images/building.png");
      background-repeat: no-repeat;
      background-size: contain;
    }
    &__container {
    }
    &__background-video {
      margin: 0 auto !important;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 620px;
      object-fit: cover;
      background-position: center;
    }

    &__mini-title {
      font-family: "Lora" !important;
    }

    &__title {
      font-family: "Lora" !important;
    }

    &__text {
      font-family: "Lora" !important;
    }
  }
}
@media (max-width: 767px) {
  .about {
    height: 800px;
    position: relative;
    &::after {
      z-index: 2;
      position: absolute;
      content: "";
      width: 220px;
      height: 220px;
      bottom: -53px;
      right: 0;
      display: inline-block;
      background-image: url("@/assets/images/building.png");
      background-repeat: no-repeat;
      background-size: contain;
    }
    &__container {
    }
    &__background-video {
      margin: 0 auto !important;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 800px;
      object-fit: cover;
      background-position: center;
    }

    &__mini-title {
      font-family: "Lora" !important;
    }

    &__title {
      font-family: "Lora" !important;
    }

    &__text {
      font-family: "Lora" !important;
    }
  }
}
</style>
