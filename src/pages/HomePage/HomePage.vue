<template>
  <div class="Home-page">
    <HeaderLayout />
    <HeroSection />
    <AboutSection />
    <FloorsSection />
    <FloorsMainSection />
    <FactSmSection />
    <FactMdSection />
    <FactSection />
    <NewSection />
    <ContactSection />
    <FooterLayout />
  </div>
</template>
<script>
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout.vue";
import HeroSection from "./HomeSection/HeroSection.vue";
import AboutSection from "./HomeSection/AboutSection.vue";
import FloorsSection from "./HomeSection/FloorsSection.vue";
import FloorsMainSection from "./HomeSection/FloorsMainSection.vue";
import FactSmSection from "./HomeSection/FactSmSection.vue";
import FactMdSection from "./HomeSection/FactMdSection.vue";
import FactSection from "./HomeSection/FactSection.vue";
import ContactSection from "./HomeSection/ContactSection.vue";
import NewSection from "./HomeSection/NewSection.vue";
import FooterLayout from "../../layouts/FooterLayout/FooterLayout.vue";
export default {
  components: {
    HeaderLayout,
    HeroSection,
    AboutSection,
    FloorsSection,
    FloorsMainSection,
    FactSmSection,
    FactMdSection,
    FactSection,
    NewSection,
    ContactSection,
    FooterLayout,
  },
};
</script>
