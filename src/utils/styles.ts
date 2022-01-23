import { DARK_THEME_NAME, LIGHT_THEME_NAME } from "constants/general";

export function toggleTheme(): void {
  const bodyTag = document.querySelector("body");
  if (!!bodyTag) {
    const currentTheme: string = bodyTag.dataset.theme ?? LIGHT_THEME_NAME;
    bodyTag.dataset.theme = currentTheme === LIGHT_THEME_NAME ? DARK_THEME_NAME : LIGHT_THEME_NAME;
  }
}
