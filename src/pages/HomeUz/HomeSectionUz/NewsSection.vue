<template>
  <div class="news container">
    <h1>Yangiliklar</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, libero?
    </p>
    <div class="newsSection">
      <div class="newsItem duration-150" v-motion-pop-visible-once>
        <img src="@/assets/images/news1.jpg" alt="Rasm bor" />
        <div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio
            sequi earum magnam
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            quos hic ipsam adipisci? Molestias odio sequi corrupti distinctio
            omnis
          </p>
          <hr />
        </div>
      </div>

      <div class="newsItem duration-150" v-motion-pop-visible-once>
        <img src="@/assets/images/nows2.jpg" alt="Rasm bor" />
        <div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio
            sequi earum magnam
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            quos hic ipsam adipisci? Molestias odio sequi corrupti distinctio
            omnis
          </p>
          <hr />
        </div>
      </div>

      <div class="newsItem duration-150" v-motion-pop-visible-once>
        <img src="@/assets/images/news3.jpg" alt="Rasm bor" />
        <div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio
            sequi earum magnam
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            quos hic ipsam adipisci? Molestias odio sequi corrupti distinctio
            omnis
          </p>
          <hr />
        </div>
      </div>

      <div class="newsItem duration-150" v-motion-pop-visible-once>
        <img src="@/assets/images/news4.jpg" alt="Rasm bor" />
        <div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odio
            sequi earum magnam
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            quos hic ipsam adipisci? Molestias odio sequi corrupti distinctio
            omnis
          </p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.news {
  h1 {
    margin-top: 20px;
    font-size: 40px;
    color: rgb(86 15 32);
  }
  p {
    font-size: 14px;
    color: rgb(86 15 32);
    margin-bottom: 40px;
  }
  .newsSection {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 20px;
    .newsItem {
      transition: 0.5s;
      cursor: pointer;
      display: flex;
      gap: 20px;
      padding: 20px;
      border-radius: 10px;
      background: linear-gradient(101deg, #560f20 0.41%, #940a2a 108.74%);
      img {
        object-fit: cover;
        border-radius: 10px;
        width: 200px;
        height: 200px;
        transition: 0.5s all;
        transform: translate(-30px, -30px);
      }
      h3 {
        font-size: 16px;
        color: #fff;
        margin-bottom: 20px;
      }
      p {
        font-size: 12px;
        color: #ccc;
      }
      hr {
        margin: 10px 0px 10px 0px;
      }
      &:hover {
        img {
          transform: translate(-20px, -20px);
        }
      }

      @media screen and (max-width: 470px) {
        flex-direction: column;
        img {
          width: 100%;
        }
      }
    }
    @media screen and (max-width: 470px) {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
  }
}
</style>
