<template>
  <section id="Этажи" class="floor py-[40px] mt-[-1px] md:py-[50px] lg:hidden">
    <div
      class="container floor__contianer flex flex-col justify-center items-start"
    >
      <h3
        class="floor__title mb-[30px] text-start text-[30px] text-white duration-300"
        v-motion-slide-visible-once-bottom
      >
        Bizning qavatlarimiz
      </h3>
      <div
        class="floor__bottom-box flex flex-col justify-center items-center gap-[20px] w-full"
      >
        <div
          class="floor__main-boxes flex flex-col justify-center items-center gap-[20px] md:flex md:flex-row md:justify-between md:items-center w-full"
        >
          <div
            class="floor__mini-boxes duration-300"
            v-motion-slide-visible-once-bottom
          >
            <img
              class="floor__images rounded-[15px] w-[391px] h-[205px] object-cover"
              src="@/assets/images/minustwo.jpg"
              alt="floor-images"
            />
            <p class="floor__main-text rounded-b-[15px]">-2 etaj</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                Avtoturargoh - Markazimizning avtoturargohi ikki qavatdan iborat
                va 200 dan ortiq mashinani sig'dira oladi.
              </p>
            </div>
          </div>
          <div
            class="floor__mini-boxes duration-500"
            v-motion-slide-visible-once-bottom
          >
            <img
              class="floor__images rounded-[15px] w-[391px] h-[205px] object-cover"
              src="@/assets/images/minusone.png"
              alt="floor-images"
            />
            <p class="floor__main-text rounded-b-[15px]">-1 etaj</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                ZARG'AR DO'KONLARI - Birinchi qavatda siz dunyoga
                sho'ng'ishingiz mumkin zargarlik buyumlari. Bu yerda siz
                eksklyuziv kolleksiyalarni topasiz mashhur brendlar va
                hunarmandlar.
              </p>
            </div>
          </div>
        </div>
        <div
          class="floor__main-boxes flex flex-col justify-center items-center gap-[20px] md:flex md:flex-row md:justify-between md:items-center"
        >
          <div
            class="floor__mini-boxes duration-300"
            v-motion-slide-visible-once-bottom
          >
            <img
              class="floor__images rounded-[15px] w-[391px] h-[205px] object-cover"
              src="@/assets/images/one.png"
              alt="floor-images"
            />
            <p class="floor__main-text rounded-b-[15px]">1 etaj</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                ZARG'AR DO'KONLARI - Har bir do'kon o'ziga xos noyob narsalarni
                taklif etadi diapazoni va eng yuqori darajadagi xizmatni
                ta'minlaydi.
              </p>
            </div>
          </div>
          <div
            class="floor__mini-boxes duration-500"
            v-motion-slide-visible-once-bottom
          >
            <img
              class="floor__images rounded-[15px] w-[391px] h-[205px] object-cover"
              src="@/assets/images/two.webp"
              alt="floor-images"
            />
            <p class="floor__main-text rounded-b-[15px]">2 etaj</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                SHOPS - Ikkinchi qavatda siz moda do'konlarini topasiz va jahon
                brendlarining so'nggi to'plamlarini ifodalovchi parfyumeriya va
                shuningdek, mahalliy brendlarning eksklyuziv mahsulotlari.
              </p>
            </div>
          </div>
        </div>
        <div
          class="floor__main-boxes flex flex-col justify-center items-center gap-[20px] md:flex md:flex-row md:justify-between md:items-center"
        >
          <div
            class="floor__mini-boxes duration-300"
            v-motion-slide-visible-once-bottom
          >
            <img
              class="floor__images rounded-[15px] w-[391px] h-[205px] object-cover"
              src="@/assets/images/three.png"
              alt="floor-images"
            />
            <p class="floor__main-text rounded-b-[15px]">3 etaj</p>
            <div class="floor__overlay">
              <p class="floor__texts w-[295px] text-center">
                Uchinchi qavat go'zallik va qulaylikni biluvchilar uchun haqiqiy
                jannatdir uy. Mana, do'konlarda ajoyib atirlar parfyumeriya,
                shuningdek, dekorativ elementlarning keng tanlovi har qanday
                makonni o'zgartira oladigan ichki dizayn.
              </p>
            </div>
          </div>
          <div
            class="floor__mini-boxes duration-500"
            v-motion-slide-visible-once-bottom
          >
            <img
              class="floor__images rounded-[15px] w-[391px] h-[205px] object-cover"
              src="@/assets/images/four.png"
              alt="floor-images"
            />
            <p class="floor__main-text rounded-b-[15px]">4 etaj</p>
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
@media (max-width: 820px) {
  .floor {
    width: 100%;
    background-image: url("@/assets/images/bg-preload.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .floor__title {
  }

  .floor__bottom-box {
  }

  .floor__main-boxes {
  }

  .floor__mini-boxes {
    position: relative;
  }

  .floor__images {
    position: relative;
  }
  .floor__main-text {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    font-size: 20px;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 5px;
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
  .floor__mini-boxes:hover .floor__overlay {
    height: 100%;
  }
  .floor__texts {
    width: 100%;
    margin-top: 8%;
    color: white;
    position: absolute;
    font-size: 14px;
    text-align: center;
    transform: skew(-5deg);
    padding: 0 30px;
  }
}
@media (max-width: 768px) {
  .floor {
    width: 100%;
    background-image: url("@/assets/images/bg-preload.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .floor__title {
  }

  .floor__bottom-box {
  }

  .floor__main-boxes {
  }

  .floor__mini-boxes {
    position: relative;
  }

  .floor__images {
    position: relative;
  }
  .floor__main-text {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    font-size: 20px;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 5px;
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
  .floor__mini-boxes:hover .floor__overlay {
    height: 100%;
  }
  .floor__texts {
    width: 100%;
    margin-top: 7%;
    color: white;
    position: absolute;
    font-size: 14px;
    text-align: center;
    transform: skew(-5deg);
    padding: 0 30px;
  }
}
@media (max-width: 767px) {
  .floor {
    width: 100%;
    background-image: url("@/assets/images/bg-preload.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .floor__title {
  }

  .floor__bottom-box {
  }

  .floor__main-boxes {
  }

  .floor__mini-boxes {
    position: relative;
  }

  .floor__images {
    position: relative;
  }
  .floor__main-text {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    font-size: 20px;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 5px;
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
  .floor__mini-boxes:hover .floor__overlay {
    height: 100%;
  }
  .floor__texts {
    width: 100%;
    margin-top: 7%;
    color: white;
    position: absolute;
    font-size: 16px;
    text-align: center;
    transform: skew(-5deg);
    padding: 0 30px;
  }
}
@media (max-width: 430px) {
  .floor {
    width: 100%;
    background-image: url("@/assets/images/bg-preload.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .floor__title {
  }

  .floor__bottom-box {
  }

  .floor__main-boxes {
  }

  .floor__mini-boxes {
    position: relative;
  }

  .floor__images {
    position: relative;
  }
  .floor__main-text {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    font-size: 20px;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 5px;
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
  .floor__mini-boxes:hover .floor__overlay {
    height: 100%;
  }
  .floor__texts {
    width: 100%;
    margin-top: 5%;
    color: white;
    position: absolute;
    font-size: 14px;
    text-align: center;
    transform: skew(-5deg);
    padding: 0 30px;
  }
}
@media (max-width: 390px) {
  .floor {
  }

  .floor__title {
  }

  .floor__bottom-box {
  }

  .floor__main-boxes {
  }

  .floor__mini-boxes {
    position: relative;
  }

  .floor__images {
    position: relative;
  }
  .floor__main-text {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    font-size: 20px;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 5px;
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
  .floor__mini-boxes:hover .floor__overlay {
    height: 100%;
  }
  .floor__texts {
    width: 100%;
    margin-top: 7%;
    color: white;
    position: absolute;
    font-size: 13px;
    text-align: center;
    transform: skew(-5deg);
    padding: 0 30px;
  }
}
@media (max-width: 375px) {
  .floor {
  }

  .floor__title {
  }

  .floor__bottom-box {
  }

  .floor__main-boxes {
  }

  .floor__mini-boxes {
    position: relative;
  }

  .floor__images {
    position: relative;
  }
  .floor__main-text {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    font-size: 20px;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 5px;
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
  .floor__mini-boxes:hover .floor__overlay {
    height: 100%;
  }
  .floor__texts {
    width: 100%;
    margin-top: 9%;
    color: white;
    position: absolute;
    font-size: 12px;
    text-align: center;
    transform: skew(-5deg);
    padding: 0 30px;
  }
}
@media (max-width: 360px) {
  .floor {
  }

  .floor__title {
  }

  .floor__bottom-box {
  }

  .floor__main-boxes {
  }

  .floor__mini-boxes {
    position: relative;
  }

  .floor__images {
    position: relative;
  }
  .floor__main-text {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    font-size: 20px;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 5px;
    padding: 5px;
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
  .floor__mini-boxes:hover .floor__overlay {
    height: 100%;
  }
  .floor__texts {
    width: 100%;
    margin-top: 10%;
    color: white;
    position: absolute;
    font-size: 12px;
    text-align: center;
    transform: skew(-5deg);
    padding: 0 30px;
  }
}
</style>
