<template>
  <section
    id="Контакты"
    class="form mt-[50px] px-[15px] md:mt-[30px] md:px-[30px] lg:mt-[120px] mb-[100px] lg:px-[70px]"
  >
    <div
      class="container form__container flex flex-col justify-center items-start rounded-[32px] px-6 pt-6 pb-[137px] md:flex md:flex-col md:justify-center md:items-start md:rounded-[28px] md:px-6 md:pt-[30px] md:pb-[30px] lg:rounded-[38px] lg:px-[50px] lg:pt-[50px] lg:pb-[50px]"
    >
      <div class="form__top-box flex flex-col justify-center items-start">
        <h2
          class="form__title mb-4 text-white w-max-[312px] text-[24px] font-bold leading-[130%] md:text[20px] md:w-[317px] lg:text-[30px] lg:w-[399px] duration-300"
          v-motion-pop-visible-once
        >
          Qayta bo'glanish uchun form
        </h2>
        <p
          class="form__text text-white/80 mb-6 w-max-[312px] text-sm font-normal leading-[140%] md:w-[361px] md:mb-[40px] lg:w-[570px] lg:leading-[150%] duration-300"
          v-motion-pop-visible-once
        >
          Biz har qanday murakkab raqamli tizimlarni talablar nuqtai nazaridan
          tavsiflaymiz, Biz batafsil loyiha hujjatlarini tuzamiz
        </p>
      </div>
      <form
        v-motion-slide-visible-once-bottom
        class="form__bottom w-full flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center duration-300 lg:z-30 lg:flex lg:flex-row lg:justify-start lg:items-center"
        @submit.prevent="sendInformation"
        action="https://echo.htmlacademy.ru"
        method="get"
      >
        <div
          class="form__main-inputs w-full flex flex-col justify-center items-center gap-2 md:flex md:flex-row md:justify-center md:items-center md:gap-0 md:relative lg:w-[700px]"
        >
          <input
            type="text"
            name="text"
            v-model.trim="username"
            id="username"
            autocomplete="off"
            class="form__number-text w-full bg-blue bg-[#a11737] font-semibold text-white border-[1px] border-[#560F20] rounded-[57px] py-4 pl-[18px] outline-none md:py-[18px] md:pl-6 md:border-e-0 md:rounded-e-none md:w-max md:pr-0 lg:pr-0"
            placeholder="Ism"
            required
          />

          <div class="w-full">
            <span
              class="form__span hidden md:block md:w-[1px] md:h-[31px] md:absolute md:bg-[#560F20] md:mt-4"
            >
            </span>
            <input
              type="tel"
              name="number"
              v-model.number="tel"
              id="tel"
              autocomplete="off"
              class="form__number-input w-full bg-[#a11737] font-semibold text-white border-[1px] border-darker-pink rounded-[57px] py-4 pl-[18px] outline-none md:py-[18px] md:pl-6 md:border-s-0 md:rounded-s-none lg:pr-0 lg:w-full lg:relative"
              placeholder="Telefon raqam"
              maxlength="13"
              max="13"
              required
            />
          </div>
          <button
            type="submit"
            class="form__butto w-full text-red-600 flex flex-row justify-center items-center rounded-[57px] py-4 border-[2px] border-darker-pink bg-white font-semibold gap-[15px] md:absolute md:w-max md:px-[20px] md:py-3 md:right-[6px] lg:absolute"
          >
            Yuborish
            <i class="icon fa-solid fa-arrow-right-long fa-beat text-red-600">
            </i>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      toast: useToast(),
      username: "",
      tel: "+998",
      error: {
        nameError: null,
      },
      errorSecond: {
        nameErrorSecond: null,
      },
    };
  },
  methods: {
    validatedForm() {
      let isValid = true;
      if (this.username.length === 0) {
        isValid = false;
        this.error.nameError = "*Bu yerga toʻliq ismingizni kiriting";
      } else {
        isValid = true;
        this.error.nameError = null;
      }
      return isValid;
    },
    validatedFormSecond() {
      let isValidSecond = true;
      if (this.tel.length <= 4) {
        isValidSecond = false;
        this.errorSecond.nameErrorSecond = "*Bu yerga raqamingizni kiriting";
      } else if (this.tel.length < 13) {
        isValidSecond = false;
        this.errorSecond.nameErrorSecond = "*Kamida 13 ta belgi!";
      } else {
        isValidSecond = true;
        this.errorSecond.nameErrorSecond = null;
      }
      return isValidSecond;
    },
    sendInformation() {
      if (this.validatedForm() && this.validatedFormSecond()) {
        this.sendData(this.username, this.tel);
      }
    },
    async sendData(name, tel) {
      const token = `7029925459:AAEoPSNB2Vn7FfnShnR74LpArYLezLsjr00`;
      const bot_id = `-1002108239735`;
      const info = `User: %0A<strong>Full-name 🤖:</strong> ${name} %0A<strong>Phone Number ☎️:</strong> ${tel}`;
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${bot_id}&text=${info}&parse_mode=html`
      );
      const data = await response.json();
      console.log(data);
      this.username = "";
      this.tel = "";
      this.toast.success("Sizning ma'lumotlaringiz yuborildi");
    },
  },
  watch: {
    tel(val) {
      if (val) {
        const str = String(val);
        this.tel = "+" + str.replace(/\D/g, "");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#username::placeholder {
  color: #fff !important;
}
#tel::placeholder {
  color: #fff !important;
}
.form {
  &__container {
    background: linear-gradient(101deg, #560f20 0.41%, #940a2a 108.74%);
    position: relative;
    &::after {
      margin: 0 auto;
      position: absolute;
      content: "";
      display: block;
      width: 700px;
      height: 240px;
      bottom: 80px;
      right: -94px;
      background-image: url("@/assets/images/hand.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  &__top-box {
  }

  &__title {
  }

  &__text {
  }

  &__bottom {
  }

  &__main-inputs {
    position: relative;
  }

  &__number-text {
    font-family: "TT Interfaces";
  }

  &__span {
  }

  &__number-input {
    font-family: "TT Interfaces";
  }

  &__button {
    font-family: "TT Interfaces";
  }
}
@media (max-width: 1315px) {
  .form {
    &__container {
      background: linear-gradient(101deg, #560f20 0.41%, #940a2a 108.74%);
      position: relative;
      &::after {
        margin: 0 auto;
        position: absolute;
        content: "";
        display: block;
        width: 700px;
        height: 152px;
        bottom: 150px;
        right: -188px;
        background-image: url("@/assets/images/hand.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    &__top-box {
    }

    &__title {
      width: 361px;
    }

    &__text {
      width: 361px;
    }

    &__bottom {
    }

    &__main-inputs {
    }

    &__number-text {
      font-family: "TT Interfaces";
    }

    &__span {
    }

    &__number-input {
      font-family: "TT Interfaces";
    }

    &__button {
      font-family: "TT Interfaces";
    }
  }
}
@media (max-width: 1023px) {
  .form {
    &__container {
      background: linear-gradient(101deg, #560f20 0.41%, #940a2a 108.74%);
      position: relative;
      &::after {
        margin: 0 auto;
        position: absolute;
        content: "";
        display: block;
        width: 700px;
        height: 142px;
        bottom: 100px;
        right: -199px;
        background-image: url("@/assets/images/hand.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    &__top-box {
    }

    &__title {
      width: 361px;
    }

    &__text {
      width: 361px;
    }

    &__bottom {
    }

    &__main-inputs {
    }

    &__number-text {
      font-family: "TT Interfaces";
    }

    &__span {
    }

    &__number-input {
      font-family: "TT Interfaces";
    }

    &__button {
      font-family: "TT Interfaces";
      left: auto;
    }
  }
}
@media (max-width: 767px) {
  .form {
    &__container {
      background: linear-gradient(101deg, #560f20 0.41%, #940a2a 108.74%);
      position: relative;
      &::after {
        margin: 0 auto;
        position: absolute;
        content: "";
        display: inline-block;
        width: 100%;
        max-width: 200px;
        height: 160px;
        bottom: -15px;
        right: 0px;
        background-image: url("@/assets/images/hand.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    &__top-box {
    }

    &__title {
      width: 100%;
      max-width: 312px;
    }

    &__text {
      width: 100%;
      max-width: 312px;
    }

    &__bottom {
    }

    &__main-inputs {
    }

    &__number-text {
    }

    &__span {
    }

    &__number-input {
    }

    &__button {
    }
  }
}
</style>
