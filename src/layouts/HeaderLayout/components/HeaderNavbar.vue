<template>
  <nav class="navbar">
    <ul
      class="nabvar__list flex flex-row justify-between items-center gap-[46px]"
    >
      <a href="#">
        <li class="navbar__lists link link--elara text-white">Главный</li>
      </a>
      <a href="#Компании">
        <li class="navbar__lists link link--elara text-white">О компании</li>
      </a>
      <a href="#ЭтажиSecond">
        <li class="navbar__lists link link--elara text-white">Этажи</li>
      </a>
      <a href="#ФактовSecond">
        <li class="navbar__lists link link--elara text-white">Фактов</li>
      </a>
      <a href="#Контакты">
        <li class="navbar__lists link link--elara text-white">Контакты</li>
      </a>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
.link {
  cursor: pointer;
  font-size: 13px;
  position: relative;
  white-space: nowrap;
  transition: 0.5s ease;
}
.link:hover {
  color: #d2ae6d;
  transition: 0.5s ease;
}
.link::before,
.link::after {
  position: absolute;
  width: 100%;
  height: 1px;
  background: currentColor;
  top: 100%;
  left: 0;
  pointer-events: none;
}
.link::before {
  content: "";
}
.link--elara {
  font-family: aktiv-grotesk-extended, sans-serif;
  font-size: 16px;
}
.link--elara::before {
  transform-origin: 50% 100%;
  transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
  clip-path: polygon(
    0% 0%,
    0% 100%,
    0 100%,
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 100%,
    100% 100%,
    100% 0%
  );
}
.link--elara:hover::before {
  transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
  clip-path: polygon(
    0% 0%,
    0% 100%,
    50% 100%,
    50% 0,
    50% 0,
    50% 100%,
    50% 100%,
    0 100%,
    100% 100%,
    100% 0%
  );
}
.link--elara span {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
}
.link--elara:hover span {
  transform: translate3d(0, -2px, 0);
}
@media (max-width: 1279px) {
  .nabvar__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 26px;
  }
}
</style>
