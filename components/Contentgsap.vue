<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";

onMounted(() => {

  gsap.to(".box", {
        duration: 1,
        x: 200,
        y: 100,
        backgroundColor: 'blue',
        borderRadius: '50%',
      });

});


</script>

<template>
   <div ref="box" class="box">
    GSAP Animation Example
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

</style>
