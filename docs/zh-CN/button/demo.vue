<template>
  <cyber-button ref="Button" class="demo">
    Now You
    <template #glitch />
    <template #tag>See</template>
  </cyber-button>
</template>

<style scoped>
.at-cyber-button {
  --glitch-text: "me";
  --color: black;
}
</style>
