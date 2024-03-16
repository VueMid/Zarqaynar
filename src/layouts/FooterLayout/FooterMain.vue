<template>
  <section
    class="footer py-[38px] md:py-[56px] lg:rounded-l-[15px] lg:rounded-b-none"
  >
    <div class="container footer__container md:px-[30px] lg:px-[30px]">
      <div
        class="footer__left-box flex flex-col justify-center items-start gap-[30px] md:flex md:flex-col md:justify-center md:items-start md:gap-[20px]"
      >
        <img
          class="footer__logo-name w-[182px] h-[52px] md:w-[210px] md:h-[62px] md:mb-[20px]"
          src="@/assets/images/logo__name.png"
          alt="footer__logo-name"
        />
        <div
          class="footer__box flex flex-col justify-center items-start gap-[15px] md:flex md:flex-row md:justify-between md:items-end md:w-full"
        >
          <div>
            <p class="footer__text text-[16px] text-white/65 md:mb-[20px]">
              Телефон
            </p>
            <a
              class="footer__phone-number text-[30px] text-white md:text-[32px]"
              href="tel:+998788888838"
            >
              +998 78 888 88 38
            </a>
          </div>
          <div
            class="footer__right hidden md:flex md:flex-row md:justify-center md:items-center md:gap-4"
          >
            <p class="footer__right-text text-[16px] text-white">Наверх</p>
            <a
              class="w-[48px] h-[48px] border-[1px] border-white flex justify-center items-center rounded-[50%]"
              href="#"
            >
              <i
                class="fa-solid fa-arrow-up fa-beat-fade fa-lg"
                style="color: #ffffff"
              >
              </i>
            </a>
          </div>
        </div>
        <div
          class="footer__box flex flex-col justify-center items-start gap-[15px] md:flex md:flex-col md:justify-center md:items-start md:gap-[20px]"
        >
          <p class="footer__text text-[16px] text-white/65">Офис продаж</p>
          <address class="footer__address not-italic">
            <p
              class="footer__address-name text-[16px] w-[330px] text-white md:text-[20px] md:w-[576px]"
            >
              Адрес: г.Ташкент, Алмазарский район, ул. Заркайнар 7а,
            </p>
          </address>
        </div>
        <div
          class="footer__box flex flex-col justify-center items-start gap-[15px] md:flex md:flex-col md:justify-center md:items-start md:gap-[20px]"
        >
          <p class="footer__text text-[16px] text-white/65">Мы в соц. сетях</p>
          <div
            class="footer__icons flex flex-row justify-center items-center gap-4"
          >
            <a
              class="footer__facebook-icon lg:hover:translate-y-[-5px] duration-500 w-[36px] h-[36px] md:w-[39px] md:h-[39px] bg-white rounded-[6px] flex justify-center items-center"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-facebook fa-lg text-[#560F20]"></i>
            </a>
            <a
              class="footer__telegram-icon lg:hover:translate-y-[-5px] duration-500 w-[36px] h-[36px] md:w-[39px] md:h-[39px] bg-white rounded-[6px] flex justify-center items-center"
              href="http://t.me/Zarmalluz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-telegram fa-lg text-[#560F20]"></i>
            </a>
            <a
              class="footer__instagram-icon lg:hover:translate-y-[-5px] duration-500 w-[36px] h-[36px] md:w-[39px] md:h-[39px] bg-white rounded-[6px] flex justify-center items-center"
              href="https://www.instagram.com/zarmalluz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-instagram fa-lg text-[#560F20]"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        class="footer__right flex flex-row justify-start items-center gap-4 mt-[30px] md:hidden"
      >
        <p class="footer__right-text text-[16px] text-white">Наверх</p>
        <a
          class="w-[45px] h-[45px] border-[1px] border-white flex justify-center items-center rounded-[50%]"
          href="#"
        >
          <i
            class="fa-solid fa-arrow-up fa-beat-fade fa-xs"
            style="color: #ffffff"
          >
          </i>
        </a>
      </div>
      <p
        class="text-[12px] text-white/70 leading-normal font-medium mt-[50px] w-[330px]"
      >
        &copy; 2023 Торговый центр Залкайнар. Все права защищены.
      </p>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer {
  width: 100% !important;
  background-image: url("@/assets/images/bg-preload.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  &__container {
  }
  &__left-box {
  }

  &__logo-name {
  }

  &__box {
  }

  &__text {
  }

  &__phone-number {
  }

  &__address {
  }

  &__address-name {
  }

  &__icons {
  }

  &__facebook-icon {
  }

  &__telegram-icon {
  }

  &__instagram-icon {
  }

  &__right {
  }

  &__right-text {
  }
}
</style>
