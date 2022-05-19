<script setup lang="ts">
import CyberButton from "@/components/buttons/cyber-button/CyberButton.vue";
import { ref, onMounted } from "vue";

const Button = ref<AtypicalCyberButton>();

const initCyberButton = () => {
  // javascript
  // Button.value?.setProperty("glitchText", "Hover me!");
  // typescript
  Button.value?.setProperty && Button.value.setProperty("left", "Me!");
};
onMounted(initCyberButton);
</script>

<template>
  <div class="at-cyber-button you">
    Hello World
    <div class="at-cyber-button__glitch" />
    <div class="at-cyber-button__tag">&</div>
  </div>

  <cyber-button ref="Button" class="demo">
    Now You
    <template #tag>See</template>
  </cyber-button>
</template>

<style scoped>
.you {
  --glitch-text: "You";

  width: rem(300px);
}

.demo {
  --glitch-text: "Hide Me";
}
</style>
