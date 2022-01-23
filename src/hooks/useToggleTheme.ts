import { useEffect, useRef, useState } from "react";

import { DARK_THEME_NAME, LIGHT_THEME_NAME } from "constants/general";

interface state {
  active: string;
  next: string;
}

export function useToggleTheme(): [state, () => void] {
  const tag = useRef<any>(null);
  const [theme, setTheme] = useState<state>({ active: LIGHT_THEME_NAME, next: DARK_THEME_NAME });

  const toggleTheme = (): void => {
    if (!!tag.current) {
      setTheme((ps: state): state => {
        tag.current.theme = ps.next;
        return { active: ps.next, next: ps.active };
      });
    }
  };

  useEffect((): void => {
    tag.current = document.querySelector("body")?.dataset ?? null;
    if (!!tag.current) tag.current.theme = LIGHT_THEME_NAME;
  }, []);

  return [theme, toggleTheme];
}
