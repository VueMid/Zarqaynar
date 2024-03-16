<template>
  <header class="header z-[1111] fixed w-full top-0 hidden lg:block">
    <div
      class="container header__container px-[32px] lg:flex lg:flex-row lg:justify-between lg:items-center py-2 duration-[0.5s] transition-all hidden"
      :class="isScrolled ? 'header__scrolled py-[20px]' : 'py-[26px]'"
    >
      <HeaderNavbar />
      <HeaderLogo />
      <HeaderIconRuNumber />
    </div>
  </header>
</template>
<script>
import HeaderNavbar from "./components/HeaderNavbar.vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import HeaderIconRuNumber from "./components/HeaderIconRuNumber.vue";
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    });
  },
  components: {
    HeaderNavbar,
    HeaderLogo,
    HeaderIconRuNumber,
  },
};
</script>
<style>
.header {
}
.header__scrolled {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-image: url("@/assets/images/bg-preload.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  border-radius: 0 0 15px 15px;
}
@media (max-width: 1023px) {
  .header {
    display: none;
  }
}
</style>
