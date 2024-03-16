<template>
  <main class="overflow-x-hidden">
    <RouterView />
    <button
      @click="openModal"
      class="phone__modal flex flex-row justify-center items-center cursor-pointer w-[60px] h-[60px] leading-[60px] text-[15px] md:w-[60px] md:h-[60px] md:leading-[60px] md:text-[30px] lg:w-[55px] lg:h-[55px] lg:leading-[55px] lg:text-[20px] rounded-[50%] bg-[#560F20] dark:bg-dark-navy border-[2px] border-gold"
    >
      <i class="fa-solid fa-user fa-beat fa-xs" style="color: #ffffff"></i>
    </button>
  </main>
  <Transition name="modal" class="relative z-[1111]">
    <div v-if="isModalOpened">
      <Modal @closeModal="closeModal" />
    </div>
  </Transition>
</template>
<script>
import Modal from "./components/Modal.vue";
export default {
  data() {
    return {
      isModalOpened: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpened = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.isModalOpened = false;
      document.body.style.overflow = "auto";
    },
  },
  components: {
    Modal,
  },
  mounted() {
    window.addEventListener("scroll", () => {
      const phone__modal = document.querySelector(".phone__modal");
      if (scrollY > 600) {
        phone__modal.classList.add("show-scroll");
      } else {
        phone__modal.classList.remove("show-scroll");
      }
    });
  },
};
</script>
<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
