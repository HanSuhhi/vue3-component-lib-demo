import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CyberButton from "./CyberButton.vue";

describe("cyber-button.vue", () => {
  const buttonName = "button.at-cyber-button";
  it("should render button component", () => {
    const wrapper = mount(CyberButton, {
      slots: {
        default: "hello world",
      },
    });
    const list = wrapper.find(buttonName);
    expect(list.text()).toBe("hello world");
  });

  it("should be disabled", () => {
    const wrapper = mount(CyberButton, {
      slots: {
        default: "hello world",
      },
      props: {
        disabled: true,
      },
    });
    const list = wrapper.find(buttonName);
    expect(list.classes("at-cyber-button-disabled")).toBe(true);
    expect(list.attributes("disabled")).toBe("true");
  });
});
