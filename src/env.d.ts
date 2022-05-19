/// <reference types="vite/client" />

declare module "*.vue" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: import("vue").DefineComponent<{}, {}, any>;
  export default component;
}

declare interface AtypicalComponent {
  setProperty?: <T>(key: T, value: string | null) => void;
}

declare type CyberButtonProperty = "color" | "borderColor" | "bg" | "glitchColor" | "glitchText" | "top" | "left" | "animationTime";

declare interface AtypicalCyberButton {
  setProperty: ((key: CyberButtonProperty, value: string | null | number) => void) | undefined;
}
