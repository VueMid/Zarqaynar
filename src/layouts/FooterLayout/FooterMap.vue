<template>
  <div class="map">
    <iframe
      class="w-full h-[340px] md:h-[352px] lg:h-[571px] lg:rounded-r-[15px] lg:rounded-b-none"
      src="https://yandex.ru/map-widget/v1/?ll=69.241477%2C41.328607&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=69.237463%2C41.329503&whatshere%5Bzoom%5D=17&z=17"
    >
    </iframe>
  </div>
</template>
<style scoped>
.map {
  padding: 0 !important;
  width: 100% !important;
  filter: grayscale(50%) sepia(0%) hue-rotate(-0deg) brightness(97%);
}
</style>
