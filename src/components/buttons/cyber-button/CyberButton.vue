<script lang="ts">
export default {
  name: "CyberButton",
};
</script>

<script setup lang="ts">
import { warn } from "../../../utils/console";
import { ref } from "vue";
import { css } from "../../../utils/css";

const CyberButton = ref<HTMLButtonElement>();

type Props = { disabled?: boolean };

const props = withDefaults(defineProps<Props>(), {});

// TODO test it
const setProperty = (key: CyberButtonProperty, value: string | null | number) => {
  const cssKey = css.camelCaseNameToCssName(key);

  switch (key) {
    case "glitchText":
      CyberButton.value?.style.setProperty(cssKey, `"${value}"`);
      break;
    case "bg":
    case "color":
    case "glitchColor":
    case "borderColor":
      if (!value) return;
      if (css.isColor(value)) {
        CyberButton.value?.style.setProperty(`--${key}`, `${value}`);
      } else warn(`${key} is not a valid color`);
      break;
    case "top":
    case "left":
      CyberButton.value?.style.setProperty(cssKey, `${value}`);
      break;
    default:
      warn("CyberButton -", `Unknown property: ${key}`);
      break;
  }
  return CyberButton.value?.style.setProperty;
};

// const setProperties

// eslint-disable-next-line no-undef
defineExpose<AtypicalCyberButton>({
  setProperty: setProperty,
});
</script>

<template>
  <button ref="CyberButton" class="at-cyber-button" :class="{ 'at-cyber-button-disabled': props.disabled }" :disabled="props.disabled">
    <slot />
    <span class="at-cyber-button__glitch" />
    <span v-if="!!$slots['tag']" class="at-cyber-button__tag">
      <slot name="tag" />
    </span>
  </button>
</template>

<style scoped>
.at-cyber-button {
  --color: var(--white);
  --border-color: var(--blue);
  --bg: var(--red);
  --glitch-text: "";
  --glitch-color: var(--white);
  --top: rem(16px);
  --left: rem(80px);
}
</style>
