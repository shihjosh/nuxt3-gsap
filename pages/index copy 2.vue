<template>
  <div class="website-content">
   <div class="header">
    <div class="h1">
      <h1>Website</h1>
      <h1>Contert</h1>
    </div>
    <div class="header-revealer"></div>
   </div>
  </div>

<div class="loading-screen">
  <div class="loader">
    <div class="loader-1 bar"></div>
    <div class="loader-2 bar"></div>
  </div>

  <div class="counter">
    <div class="counter-1 digit">
      <div class="num">0</div>
      <div class="num num1offset1">1</div>
    </div>
    <div class="counter-2 digit">
      <div class="num">0</div>
      <div class="num num1offset2">1</div>
      <div class="num">2</div>
      <div class="num">3</div>
      <div class="num">4</div>
      <div class="num">5</div>
      <div class="num">6</div>
      <div class="num">7</div>
      <div class="num">8</div>
      <div class="num">9</div>
      <div class="num">0</div>
    </div>
    <div class="counter-3 digit">
      <div class="num">0</div>
      <div class="num">1</div>
      <div class="num">2</div>
      <div class="num">3</div>
      <div class="num">4</div>
      <div class="num">5</div>
      <div class="num">6</div>
      <div class="num">7</div>
      <div class="num">8</div>
      <div class="num">9</div>
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
 const counter3 = document.querySelector(".counter-3");

for (let i = 0; i < 2; i++){
  for(let j = 0; j < 10; j++){
    const div = document.createElement("div");
    div.className = "num";
    div.textContent = j;
    counter3.appendChild(div);
  }
}

const finalDiv = document.createElement("div");
finalDiv.className = "num";
finalDiv.textContent = "0";
counter3.appendChild(finalDiv);

function animate(counter, duration, delay = 0){
  const numHeight = counter.querySelector(".num").clientHeight;
  const totalDistance = (counter.querySelectorAll(".num").length -1) * numHeight;

  gsap.to(counter, {
    y: -totalDistance,
    duration: duration,
    delay: delay,
    ease: "power2.inOut",
  });
}

animate(counter3,5);
animate(document.querySelector(".counter-2",6));
animate(document.querySelector(".counter-1", 2, 4));

gsap.to(".digit",{
  top: "-150px",
  stagger: {
    amount: 0.25,
  },
  delay: 6,
  duration: 1,
  ease: "power4.inOut",
});

gsap.from(".loader-1",{
  width:0,
  duration: 6,
  ease: "power2.inOut",
});

gsap.from(".loader-2", {
  width: 0,
  delay: 1.9,
  duration: 2,
  ease: "power2.inOut,"
});

gsap.to("loader",{
  background: "none",
  delay: 6,
  duration: 0.1,
});

gsap.to(".loader-1",{
  rotate: 90,
  y: -50,
  duration: 0.5,
  delay: 6,
});

gsap.to("loader-2",{
  x: -75,
  y: 75,
  duration: 0.5,
},"<");

gsap.to(".loader",{
  scale: 40,
  duration: 1,
  delay: 7,
  ease: "power2.inOut"
});

gsap.to(".loader", {
  rotate: 45,
  y: 500,
  x:2000,
  duration: 1,
  delay: 7,
  ease: "power2.inOut"
});

gsap.to(".loading-screen", {
  opacity: 0,
  duratioin: 0.5,
  delay: 7.5,
  ease: "power1.inOut",
});

gsap.to("h1",{
  duratioin: 1.5,
  delay: 7,
  y: -80,
  ease: "power4.inOut",
  stagger: {
    amount: 0.1,
  },
});


});
</script>

<style>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  widows: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  pointer-events: none;
}

.counter {
  position: fixed;
  bottom: 50px;
  display: flex;
  height: 100px;
  font-size: 100px;
  line-height: 102px;
  clip-path: polygon(0 0, 100% 0, 100% 100px, 0 100px);
  font-weight: 400;

}

.counter-1,
.counter-2,
.counter-3 {
  position: relative;
  top: -15px;
}

.num1offset1 {
  position: relative;
  right: -25px;
}

.num1offset2 {
  position: relative;
  right: -10px;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 50px;
  transform: translate(-50%, -50%);
  display: flex;
  background: rgb(80, 80, 80);
}

.loader-1 {
  position: relative;
  background: #fff;
  width: 200px;
}

.loader-2 {
  position: relative;
  width: 100px;
  background: #fff;
}

.bar {
  height: 50px;
}

.website-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  position: relative;
  width: max-content;
  height: max-content;
}

.h1 {
  display: flex;
}

h1 {
  font-size: 80px;
}

.header .h1 h1 {
  text-align: center;
  position: relative;
  top: 80px;
  margin: 0 10px;
  text-transform: uppercase;
  font-weight: 400;
}

.header-revealer {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.header-revealer:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 105%;
  height: 110%;
  background: #fff;
  top: 80px;
}

</style>
