<template>
  <div
    class="header fixed top-0 w-full h-full overflow-y-auto overflow-x-hidden backdrop-blur-sm bg-white/30 dark:backdrop-blur-sm flex flex-col justify-center items-center px-4 md:px-[30px] lg:px-[56px]"
  >
    <div
      class="header__main-wrapper w-full flex flex-col justify-center items-center bg-white relative rounded-[15px] px-6 py-[26px] md:px-[109px] md:py-[50px] md:w-[510px] lg:px-[146px] lg:w-[600px] lg:py-[20px] border-[2px] border-darker-pink"
    >
      <form
        class="header__form w-full flex flex-col justify-center items-start gap-2 md:flex-col md:justify-center md:items-start md:gap-2"
        @submit.prevent="sendInformation"
        action="https://echo.htmlacademy.ru"
        method="post"
      >
        <h5
          class="header__form-title text-xl text-darker-pink font-bold leading-[130%] mb-2 md:text-2xl md:leading-[100%]"
        >
          Свяжется с нами
        </h5>
        <span class="header__form-hr w-full h-[1px] bg-darker-pink mb-2">
        </span>
        <div
          class="header__form-control w-full"
          :class="error.nameError ? 'invalid' : ''"
        >
          <button
            type="button"
            @click="$emit('closeModal')"
            class="header__form-buttons text-darker-pink"
            data-modal-hide="staticModal"
          >
            <svg
              class="header__form-svg w-4 h-4 top-[30px] right-6 absolute md:w-5 md:h-5 md:top-[50px] md:right-[50px] lg:top-[20px] lg:right-[20px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <input
            type="text"
            name="text"
            v-model.trim="username"
            id="username"
            autocomplete="off"
            class="header__input-username outline-none w-full bg-[#F9F9FB] text-darker-pink text-sm font-medium leading-[140%] rounded-[57px] border-[1px] border-[#EBF0F0] py-4 pl-[18px] md:pl-[30px]"
            placeholder="Имя"
          />
          <small
            class="header__error-texts text-lg text-red-500 font-medium text-[13px]"
          >
            {{ error.nameError }}
          </small>
        </div>
        <div
          class="header__form-control w-full"
          :class="errorSecond.nameErrorSecond ? 'invalid' : ''"
        >
          <input
            type="tel"
            name="number"
            v-model.number="tel"
            id="tel"
            autocomplete="off"
            class="header__input-tel w-full bg-[#F9F9FB] text-darker-pink text-sm font-medium leading-[140%] rounded-[57px] border-[1px] border-[#EBF0F0] py-4 pl-[18px] md:pl-[30px] outline-none"
            maxlength="13"
          />
          <small
            class="header__error-texts text-lg text-red-500 font-medium text-[13px]"
          >
            {{ errorSecond.nameErrorSecond }}
          </small>
        </div>
        <div
          class="header__form-control w-full"
          :class="errorThird.nameErrorThird ? 'invalid' : ''"
        >
          <input
            type="text"
            name="text"
            v-model.trim="message"
            id="message"
            autocomplete="off"
            class="header__input-message w-full outline-none bg-[#F9F9FB] text-darker-pink text-sm font-medium leading-[140%] rounded-[32px] border-[1px] border-[#EBF0F0] pt-4 pb-[201px] pl-[18px] md:pl-[30px] md:pb-[134px]"
            placeholder="Сообщение"
          />
          <small
            class="header__error-texts text-lg text-red-500 font-medium text-[13px]"
          >
            {{ errorThird.nameErrorThird }}
          </small>
        </div>
        <p class="header__warning text-[11px] w-[315px] text-center text-gold">
          Нажимая кнопку «Отправить», вы подтверждаете свое согласие на
          обработку персональных данных
        </p>
        <button
          type="submit"
          class="header__submit-button flex flex-row justify-center items-center gap-4 text-white w-full bg-darker-pink rounded-[85px] outline-none py-[14px] active:opacity-60 duration-100 text-base font-semibold leading-[150%]"
        >
          Отправить
          <i class="icon fa-solid fa-arrow-right-long fa-beat"></i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      toast: useToast(),
      username: "",
      tel: "+998",
      message: "",
      error: {
        nameError: null,
      },
      errorSecond: {
        nameErrorSecond: null,
      },
      errorThird: {
        nameErrorThird: null,
      },
    };
  },
  methods: {
    validatedForm() {
      let isValid = true;
      if (this.username.length === 0) {
        isValid = false;
        this.error.nameError = "*Введите здесь свое полное имя";
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
        this.errorSecond.nameErrorSecond = "*Введите здесь свой номер";
      } else if (this.tel.length < 13) {
        isValidSecond = false;
        this.errorSecond.nameErrorSecond = "*Минимум 13 символов!";
      } else {
        isValidSecond = true;
        this.errorSecond.nameErrorSecond = null;
      }
      return isValidSecond;
    },
    validatedFormThird() {
      let isValidThird = true;
      if (this.message.length === 0) {
        isValidThird = false;
        this.errorThird.nameErrorThird = "*Введите сюда ваше сообщение";
      } else {
        isValidThird = true;
        this.errorThird.nameErrorThird = null;
      }
      return isValidThird;
    },
    sendInformation() {
      if (
        this.validatedForm() &&
        this.validatedFormSecond() &&
        this.validatedFormThird()
      ) {
        this.sendData(this.username, this.tel, this.message);
      }
    },
    async sendData(name, tel, message) {
      const token = `7029925459:AAEoPSNB2Vn7FfnShnR74LpArYLezLsjr00`;
      const bot_id = `-1002108239735`;
      const info = `User: %0A<strong>Full-name 🤖:</strong> ${name} %0A<strong>Phone Number ☎️:</strong> ${tel} %0A<strong>Message 📩:</strong> ${message}`;
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${bot_id}&text=${info}&parse_mode=html`
      );
      const data = await response.json();
      console.log(data);
      this.username = "";
      this.tel = "";
      this.message = "";
      this.toast.success("Ваша информация отправлена");
      this.$emit("closeModal");
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
  color: #560f20 !important;
  font-family: "Montserrat" !important;
}
#tel::placeholder {
  color: #560f20 !important;
  font-family: "Montserrat" !important;
}
#message::placeholder {
  color: #560f20 !important;
  font-family: "Montserrat" !important;
}
.header {
  position: fixed;
  top: 0;
  &__main-wrapper {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  &__form {
  }

  &__form-title {
    font-family: "Lora" !important;
  }

  &__form-hr {
  }

  &__form-control {
  }

  &__form-buttons {
  }

  &__form-svg {
  }

  &__input-username {
    font-family: "Lora" !important;
  }

  &__input-tel {
    font-family: "Lora" !important;
  }

  &__input-message {
    font-family: "Lora" !important;
  }
  &__warning {
    font-family: "Lora" !important;
  }
  &__submit-button {
    font-family: "Lora" !important;
  }
}
</style>
