<template>
  <footer
    class="footer px-0 flex flex-col justify-center items-center lg:flex lg:flex-row-reverse lg:justify-between lg:items-center w-full"
  >
    <div
      class="container px-0 footer__container flex flex-col justify-between items-center lg:w-full lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:px-[30px]"
    >
      <FooterMap />
      <FooterMain />
    </div>
  </footer>
</template>
<script>
import FooterMap from "./FooterMap.vue";
import FooterMain from "./FooterMain.vue";
export default {
  components: {
    FooterMap,
    FooterMain,
  },
};
</script>
<style scoped lang="scss">
.footer {
}
</style>
