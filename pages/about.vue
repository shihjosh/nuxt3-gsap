<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

definePageMeta({
  layout: "custom",
});

onMounted(() => {
//   gsap.from(".box", { 
//   y: -200,
// });

gsap.from("img", { 
  rotation: 360,
  duration: 2,
  // repeat: -1,
  repeatDelay: 2,
  ease: "power1.inOut",
});


});

</script>

<template>
  <!-- <div>
    <Contentgsap /> //引入元件
    
  </div> -->

  <div class="box hero min-h-screen bg-base-200" style="background-image: url(./14.jpg)">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 data-aos="fade-down" class="text-4xl text-zinc-900 md:text-7xl text-zinc-900 font-bold mb-6">Josh Where 不做永遠是 0%</h1>
        <p data-aos="fade-down" data-aos-delay="300" class="md:text-lg text-zinc-900 mb-6">簡簡單單的用</p>
        <div class="flex justify-center space-x-5">
          <a data-aos="fade-down" data-aos-delay="600" class="btn btn-sm md:btn-md btn-primary" href="https://github.com/shihjosh" target="_blank"> Git Hub 連結 </a>
          <a data-aos="fade-down" data-aos-delay="600" class="btn btn-sm md:btn-md btn-primary" href="https://www.google.com.tw/" target="_blank"> Google 搜尋 </a>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="hero min-h-screen bg-base-200" style="background-image: url(./14.jpg)">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 data-aos="fade-down" class="text-4xl text-zinc-900 md:text-7xl text-zinc-900 font-bold mb-6">Josh Where 不做永遠是 0%</h1>
        <p data-aos="fade-down" data-aos-delay="300" class="md:text-lg text-zinc-900 mb-6">簡簡單單的用</p>
        <div class="flex justify-center space-x-5">
          <a data-aos="fade-down" data-aos-delay="600" class="btn btn-sm md:btn-md btn-primary" href="https://github.com/shihjosh" target="_blank"> Git Hub 連結 </a>
          <a data-aos="fade-down" data-aos-delay="600" class="btn btn-sm md:btn-md btn-primary" href="https://www.google.com.tw/" target="_blank"> Google 搜尋 </a>
        </div>
      </div>
    </div>
  </div> -->

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 ml-3">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.box {
  display: block;
}

</style>
