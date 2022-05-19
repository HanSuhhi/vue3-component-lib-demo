class Css {
  /**  */
  public isColor = (color: string | number): boolean => {
    const style = document.createElement("option").style;
    style.color = color.toString();
    return !!style.color;
  };
  public camelCaseNameToCssName = (name: string): string => {
    return `--${name.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}`;
  };
}
export const css = new Css();
