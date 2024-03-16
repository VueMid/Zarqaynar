<template>
  <div class="main flex flex-row justify-center items-center gap-10">
    <div class="menu__icon-box flex flex-row justify-center items-center gap-5">
      <a
        href="https://www.instagram.com/zarmalluz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          class="fa-brands fa-instagram text-[23px] hover:text-gold text-white duration-[300ms] hover:translate-y-[-4px]"
        >
        </i>
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <i
          class="fa-brands fa-facebook text-[23px] hover:text-gold text-white duration-[300ms] hover:translate-y-[-4px]"
        >
        </i>
      </a>
      <a href="http://t.me/Zarmalluz" target="_blank" rel="noopener noreferrer">
        <i
          class="fa-brands fa-telegram text-[23px] hover:text-gold text-white duration-[300ms] hover:translate-y-[-4px]"
        >
        </i>
      </a>
    </div>
    <Languages />
    <div class="flex flex-row justify-center items-center gap-3 text-white">
      <a class="hover:text-gold duration-[400ms]" href="tel:+998788888838">
        <span class="text-white">+998</span>
        78 888 88 38
      </a>
      <!-- <div
        class="bg-gold flex justify-center items-center w-[30px] h-[30px] rounded-[50%]"
      >
        <img
          class="w-[18px] h-[18px]"
          src="@/assets/images/phone.gif"
          alt="phone__gif"
        />
      </div> -->
    </div>
  </div>
</template>
<script>
import Languages from "./Language.vue";
export default {
  components: { Languages },
};
</script>
<style>
@media (max-width: 1279px) {
  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
}
</style>
