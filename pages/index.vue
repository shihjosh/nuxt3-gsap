<template>
  <div style="background-image: url(./14.jpg); background-size: cover">
    <!-- <ContentItem /> //引入元件 -->
    <div class="loader">
      <div class="loader-clip clip-top">
        <div class="marquee">
          <div class="marquee-container">
            <span>Josh</span>
            <span>Josh</span>
            Josh
            <span>Josh</span>
            <span>Josh</span>
          </div>
        </div>
      </div>
      <div class="loader-clip clip-bottom">
        <div class="marquee">
          <div class="marquee-container">
            <span>Josh</span>
            <span>Josh</span>
            Josh
            <span>Josh</span>
            <span>Josh</span>
          </div>
        </div>
      </div>
      <div class="clip-center">
        <div class="marquee">
          <div class="marquee-container">
            <span>Josh</span>
            <span>Josh</span>
            <nuxt-link to="/about">Josh</nuxt-link>
            <span>Josh</span>
            <span>Josh</span>
          </div>
        </div>
      </div>
      <!-- <div class="container">
        <div class="nav">
          <div class="logo text-xl">Josh</div>
          <div class="nav-items text-xl">
            <nuxt-link to="/about" style="margin-right: 8px">Design</nuxt-link>
            <nuxt-link to="/about" style="margin-right: 8px">Merch</nuxt-link>
            <nuxt-link to="/about" style="margin-right: 8px">Info</nuxt-link>
          </div>
        </div>
        <div class="footer text-xl">
          <p>Josh Where</p>
          <p>Create beautiful and fast websites</p>
          <p>{{ new Date().getFullYear() }}</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";

// gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  gsap.from(".clip-top, .clip-bottom", {
    duration: 2,
    delay: 1,
    height: "50vh",
    ease: "power4.inOut",
  });

  gsap.to(".marquee", {
    duration: 3.5,
    delay: 0.75,
    top: "50%",
    ease: "power4.inOut",
  });

  gsap.to(".clip-top .marquee, .clip-bottom .marquee", {
    duration: 5,
    delay: 1,
    left: "100%",
    ease: "power3.inOut",
  });

  gsap.from(".clip-center .marquee", {
    duration: 5,
    delay: 1,
    left: "-50%",
    ease: "power3.inOut",
  });

  gsap.to(".clip-top", {
    duration: 2,
    delay: 6,
    clipPath: "inset(0 0 100% 0)",
    ease: "power4.inOut",
  });

  gsap.to(".clip-bottom", {
    duration: 2,
    delay: 6,
    clipPath: "inset(100% 0 0 0)",
    ease: "power4.inOut",
  });

  gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", {
    duration: 1,
    delay: 6,
    opacity: 0,
    ease: "power2.inOut",
  });

  gsap.to(".clip-center .marquee", {
    delay: 7,
    color: "#000",
    mixBlendMode: "multiply",
  });
});
</script>

<style>
.loader {
  width: 100vh;
  height: 100vh;
}

.loader-clip {
  position: absolute;
  width: 100vw;
  height: 33.3vh;
  overflow: clip;
  z-index: 10000;
}

.clip-top {
  top: 0;
  clip-path: inset(0 0 0 0);
  background: #000;
}

.clip-bottom {
  bottom: 0;
  clip-path: inset(0 0 0 0);
  background: #000;
}

.clip-center {
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 33.33vh;
  top: 33.33vh;
}

.marquee {
  position: absolute;
  top: 200%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200vw;
  color: #fff;
  mix-blend-mode: difference;
  font-size: 16vw;
}

.marquee-container {
  width: 100%;
  padding-top: 0.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Edu NSW ACT Foundation";
}

.container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  font-family: "Edu NSW ACT Foundation";
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 14px;
}


.container .nav,
.container .footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 2em 4em;
}

.nav-items a {
  text-decoration: none;
  color: #000;
}

.nav-items a:not(:last-child) {
  padding-right: 4em;
}
</style>
