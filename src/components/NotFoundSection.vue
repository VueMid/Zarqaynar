<template>
  <section class="notFound bg-darker-pink w-full h-[100vh]">
    <div
      class="container notFound__container flex flex-col justify-center items-center min-h-screen"
    >
      <div
        class="notFound__main flex flex-row justify-center items-center h-full max-h-full"
      >
        <span class="notFound__numbers text-[165px] font-semibold text-gold">
          4
        </span>
        <div>
          <img
            class="icon w-[288px] h-[148px] object-contain"
            src="@/assets/images/burgundy__cricle.png"
            alt="ghost__image"
          />
        </div>
        <span class="notFound__numbers text-[165px] font-semibold text-gold">
          4
        </span>
      </div>
      <div
        class="notFound__bottom-box flex flex-col justify-center items-center gap-10"
      >
        <h4 class="text text-[30px] font-semibold text-gold">
          Страница не найдена! :)
        </h4>
        <router-link to="/">
          <button
            class="btn primary w-max bg-gold text-white py-[14px] px-[32px] text-base font-semibold leading-[150%] rounded-[85px] active:opacity-60 duration-100 border-2 border-darker-pink"
          >
            <i
              class="fa-solid fa-arrow-right-long fa-beat mr-4 text-darker-pink"
            />
            Вернуться к главному
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>
<style scoped>
.btn {
  font-family: "TT Interfaces";
}
.text {
  font-family: "Hauora";
}
.icon {
  animation: animate 2s infinite !important;
}
@keyframes animate {
  0% {
    margin-top: 0;
  }
  50% {
    margin-bottom: 30px;
  }
  100% {
    margin-top: 0;
  }
}
@media (max-width: 500px) {
  .notFound__numbers {
    font-size: 100px;
  }
  .icon {
    width: 140px;
    animation: animate 2s infinite !important;
  }
  .text {
    margin-top: 20px;
    font-size: 18px;
  }
  .btn {
  }
  @keyframes animate {
    0% {
      margin-top: 0;
    }
    50% {
      margin-bottom: 30px;
    }
    100% {
      margin-top: 0;
    }
  }
}
</style>
