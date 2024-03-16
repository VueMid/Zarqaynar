<template>
  <header
    class="header w-full flex flex-row justify-between items-center fixed top-0 duration-[0.5s] transition-all z-[1111] px-[15px] md:px-[30px] lg:hidden rounded-none"
    :class="isScrolled ? 'header__scrolled py-[20px]' : 'py-[26px]'"
  >
    <Languages />
    <div
      class="header__left-box cursor-pointer duration-100 active:opacity-65"
      @click="$router.push('/')"
    >
      <img
        class="header__logo w-[71px] h-[47px] md:w-[81px] md:h-[57px] object-contain"
        src="@/assets/images/logo.png"
        alt="logo__image"
      />
    </div>
    <div
      class="flex flex-row justify-center items-end gap-[20px] md:flex md:flex-row md:justify-center md:items-center md:gap-[30px]"
    >
      <!-- <a class="translate-y-1" href="tel:+998994665547">
        <img
          class="w-[28px] h-[28px]"
          src="@/assets/images/phone.gif"
          alt="phone__gif"
        />
      </a> -->
      <button class="header__right-burger" @click="openMenu">
        <img
          class="header__burger-on w-[22px] h-[18px]"
          src="@/assets/icons/open__menu.svg"
          alt="open__menu"
        />
      </button>
    </div>
  </header>
  <Transition name="menu">
    <Menu v-if="isOpen" @closeMenu="closeMenu" />
  </Transition>
</template>
<script>
import Languages from "./Languages.vue";
import Menu from "./Menu.vue";
export default {
  data() {
    return {
      isOpen: false,
      isScrolled: false,
    };
  },
  components: {
    Menu,
    Languages,
  },
  methods: {
    openMenu() {
      this.isOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeMenu() {
      this.isOpen = false;
      document.body.style.overflow = "auto";
    },
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
};
</script>
<style lang="scss" scoped>
@media (max-width: 1023px) {
  .menu-enter-active,
  .menu-leave-active {
    transition: 0.6s ease;
  }
  .menu-enter-from,
  .menu-leave-to {
    transform: translateX(100%);
  }
  .header {
    border-radius: 0 0 15px 15px;
    &__scrolled {
      background-image: url("@/assets/images/bg-preload.jpg");
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
    }
    &__container {
    }

    &__left-box {
    }

    &__logo {
    }

    &__right-burger {
      background: none;
      border: none;
      outline: none;
      display: block;
    }

    &__burger-on {
    }
  }
}
@media (max-width: 767px) {
  .menu-enter-active,
  .menu-leave-active {
    transition: 0.6s ease;
  }

  .menu-enter-from,
  .menu-leave-to {
    transform: translateX(100%);
  }
  .header {
    border-radius: 0px;
    &__scrolled {
      background-image: url("@/assets/images/bg-preload.jpg");
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
    }
    &__container {
    }

    &__left-box {
    }

    &__logo {
    }

    &__right-burger {
      background: none;
      border: none;
      outline: none;
      display: block;
    }

    &__burger-on {
    }
  }
}
</style>
