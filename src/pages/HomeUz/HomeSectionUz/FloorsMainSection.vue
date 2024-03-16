<template>
  <section
    id="ЭтажиSecond"
    class="floor pt-[40px] pb-[240px] mt-[-1px] hidden lg:block"
  >
    <div
      class="container floor__contianer flex flex-col justify-center items-start"
    >
      <h3
        class="floor__title text-start text-[30px] text-white duration-300 mb-[30px]"
        v-motion-slide-visible-once-bottom
      >
        Bizning qavatlarimiz
      </h3>
      <div
        class="floor__bottom flex flex-row justify-between items-center gap-[100px]"
      >
        <div
          class="floor__right-box flex flex-col justify-center items-center gap-[100px] mt-[0px]"
        >
          <div
            class="floor__right-mini-boxes duration-300"
            v-motion-slide-visible-once-left
          >
            <img
              class="floor__images rounded-[15px] w-max-[391px] w-full object-cover"
              src="@/assets/images/minustwo.jpg"
              alt="floor-images"
            />
            <p class="floor__main-text">-2-qavat</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                Avtoturargoh - Markazimizning avtoturargohi ikki qavatdan iborat
                va 200 dan ortiq mashinani sig'dira oladi.
              </p>
            </div>
          </div>
          <div
            class="floor__right-mini-boxes duration-300"
            v-motion-slide-visible-once-left
          >
            <img
              class="floor__images rounded-[15px] w-max-[391px] w-full object-cover"
              src="@/assets/images/one.png"
              alt="floor-images"
            />
            <p class="floor__main-text">1 etaj</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                ZARG'AR DO'KONLARI - Har bir do'kon o'ziga xos noyob narsalarni
                taklif etadi diapazoni va eng yuqori darajadagi xizmatni
                ta'minlaydi.
              </p>
            </div>
          </div>
          <div
            class="floor__right-mini-boxes duration-300"
            v-motion-slide-visible-once-left
          >
            <img
              class="floor__images rounded-[15px] w-max-[391px] w-full object-cover"
              src="@/assets/images/three.png"
              alt="floor-images"
            />
            <p class="floor__main-text">3 etaj</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                Uchinchi qavat go'zallik va qulaylikni biluvchilar uchun haqiqiy
                jannatdir uy. Mana, do'konlarda ajoyib atirlar parfyumeriya,
                shuningdek, dekorativ elementlarning keng tanlovi har qanday
                makonni o'zgartira oladigan ichki dizayn.
              </p>
            </div>
          </div>
        </div>
        <div
          class="floor__left-box flex flex-col justify-center items-center gap-[100px] translate-y-[160px]"
        >
          <div
            class="floor__left-mini-boxes duration-300"
            v-motion-slide-visible-once-right
          >
            <img
              class="floor__images rounded-[15px] w-max-[391px] w-full object-cover"
              src="@/assets/images/minusone.png"
              alt="floor-images"
            />
            <p class="floor__main-text">-1 etaj</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                ZARG'AR DO'KONLARI - Birinchi qavatda siz dunyoga
                sho'ng'ishingiz mumkin zargarlik buyumlari. Bu yerda siz
                eksklyuziv kolleksiyalarni topasiz mashhur brendlar va
                hunarmandlar.
              </p>
            </div>
          </div>
          <div
            class="floor__left-mini-boxes duration-300"
            v-motion-slide-visible-once-right
          >
            <img
              class="floor__images rounded-[15px] w-max-[391px] w-full object-cover"
              src="@/assets/images/two.webp"
              alt="floor-images"
            />
            <p class="floor__main-text">2 etaj</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                SHOPS - Ikkinchi qavatda siz moda do'konlarini topasiz va jahon
                brendlarining so'nggi to'plamlarini ifodalovchi parfyumeriya va
                shuningdek, mahalliy brendlarning eksklyuziv mahsulotlari.
              </p>
            </div>
          </div>
          <div
            class="floor__left-mini-boxes duration-300"
            v-motion-slide-visible-once-right
          >
            <img
              class="floor__images rounded-[15px] w-max-[391px] w-full object-cover"
              src="@/assets/images/four.png"
              alt="floor-images"
            />
            <p class="floor__main-text">4 etaj</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                OVQAT KORTLARI VA BOLALAR OYIN MAYTONI To‘rtinchi qavat oilalar
                uchun oziq-ovqat maydonchasida turli xil pazandalik lazzatlari
                va zamonaviy bolalar ko‘ngilochar markazi takliflaridan
                bahramand bo‘lishlari uchun ideal joydir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.floor {
  width: 100%;
  background-image: url("@/assets/images/bg-preload.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.floor__bottom {
}
.floor__right-box {
}
.floor__right-mini-boxes {
  cursor: pointer;
  position: relative;
}
.floor__right-mini-boxes:hover .floor__overlay {
  height: 100%;
}
.floor__images {
  position: relative;
}
.floor__main-text {
  position: absolute;
  bottom: 3px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-size: 30px;
  z-index: 4;
}
.floor__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
  border-radius: 15px;
}
.floor__texts {
  cursor: text;
  font-style: normal !important;
  width: 100%;
  margin-top: 11%;
  color: white;
  position: absolute;
  font-size: 20px;
  text-align: center;
  transform: skew(-5deg);
  padding: 0 30px;
}
.floor__left-box {
}
.floor__left-mini-boxes {
  cursor: pointer;
  position: relative;
}
.floor__left-mini-boxes:hover .floor__overlay {
  height: 100%;
}
</style>
