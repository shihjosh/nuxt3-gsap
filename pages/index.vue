<template>
  <div style="background-image: url('./14.jpg'); background-size: cover;">
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
      <div class="clip-center" >
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
      <div class="container">
        <div class="nav">
          <div class="logo">Brand</div>
          <div class="nav-items">
            <a href="#">Design</a>
            <a href="#">Merch</a>
            <a href="#">Info</a>
          </div>
        </div>
        <div class="footer">
          <p>Play film</p>
          <p>High quality video production <br/>Made in Iceland</p>
          <p>Rove 2022</p>
        </div>
      </div>
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

// gsap.from(".clip-top, .clip-bottom", 2, {
//   delay: 1,
//   height: "50vh",
//   ease: "power4.inOut",
// });

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

gsap.to(".clip-top .marquee, .clip-bottom .marquee",{
  duration: 5,
  delay: 1,
  left: "100%",
  ease: "power3.inOut",
});

gsap.from(".clip-center .marquee",{
  duration: 5,
  delay: 1,
  left: "-50%",
  ease: "power3.inOut",
});

gsap.to(".clip-top",{
  duration: 2,
  delay: 6,
  clipPath: "inset(0 0 100% 0)",
  ease: "power4.inOut",
});

gsap.to(".clip-bottom",{
  duration: 2,
  delay: 6,
  clipPath: "inset(100% 0 0 0)",
  ease: "power4.inOut",
});

gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span",{
  duration: 1,
  delay: 6,
  opacity: 0,
  ease: "power2.inOut",
});

gsap.to(".clip-center .marquee", {
  delay: 7,
  color: '#000',
  mixBlendMode: 'multiply'
});

});
</script>

<style></style>
