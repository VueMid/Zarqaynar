<template>
  <div class="Home-page">
    <HeaderLayoutUz />
    <HeroSection />
    <AboutSection />
    <FloorsSection />
    <FloorsMainSection />
    <FactSmSection />
    <FactMdSection />
    <FactSection />
    <NewsSection/>
    <ContactSection />
    <FooterLayout />
  </div>
</template>
<script>
import HeaderLayoutUz from "../../layouts/HeaderLayoutUz/HeaderLayoutUz.vue";
import HeroSection from "./HomeSectionUz/HeroSection.vue";
import AboutSection from "./HomeSectionUz/AboutSection.vue";
import FloorsSection from "./HomeSectionUz/FloorsSection.vue";
import FloorsMainSection from "./HomeSectionUz/FloorsMainSection.vue";
import FactSmSection from "./HomeSectionUz/FactSmSection.vue";
import FactMdSection from "./HomeSectionUz/FactMdSection.vue";
import FactSection from "./HomeSectionUz/FactSection.vue";
import NewsSection from "./HomeSectionUz/NewsSection.vue";
import ContactSection from "./HomeSectionUz/ContactSection.vue";
import FooterLayout from "../../layouts/FooterLayoutUz/FooterLayout.vue";
export default {
  components: {
    HeaderLayoutUz,
    HeroSection,
    AboutSection,
    FloorsSection,
    FloorsMainSection,
    FactSmSection,
    FactMdSection,
    FactSection,
    NewsSection,
    ContactSection,
    FooterLayout,
  },
};
</script>
