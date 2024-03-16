<template>
  <section id="" class="hero lg:py-[5px] px-0">
    <div
      class="container hero__container flex flex-col justify-between items-center lg:flex lg:justify-start lg:items-start"
    >
      <video
        class="hero__background-video"
        autoplay="true"
        loop
        muted
        playsinline
        preload="auto"
      >
        <source src="@/assets/images/hero__background.mp4" type="video/mp4" />
      </video>
      <Header />
      <HeroComponent />
    </div>
  </section>
</template>
<script>
import Header from "../components/Header.vue";
import HeroComponent from "../components/HeroComponent.vue";
export default {
  components: {
    Header,
    HeroComponent,
  },
};
</script>
<style scoped lang="scss">
.hero {
  z-index: 20;
  width: 100%;
  height: 841px !important;
  position: absolute;
  top: -5px;
  left: 0;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 110px 56px -28px inset;

  &__background-video {
    margin: 0 auto !important;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 841px !important;
    object-fit: cover;
    background-position: center;
  }
  &__container {
  }
}
@media (max-width: 1466px) {
  .hero {
    width: 100%;
    height: 641px;
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 110px 56px -28px inset;

    &__background-video {
      margin: 0 auto !important;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 641px;
      object-fit: cover;
      background-position: center;
    }
    &__container {
    }
  }
}
@media (max-width: 1023px) {
  .hero {
    &__background-video {
      margin: 0 auto !important;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 720px;
      object-fit: cover;
      background-position: center;
    }
    &__container {
    }
  }
}
@media (max-width: 767px) {
  .hero {
    &__background-video {
      margin: 0 auto !important;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 650px;
      object-fit: cover;
      background-position: center;
    }
    &__container {
    }
  }
}
</style>
