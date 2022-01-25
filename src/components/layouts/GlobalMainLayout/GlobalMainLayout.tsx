import { MoonIcon, SunIcon } from "components";

import { useToggleTheme } from "hooks";

import { LIGHT_THEME_NAME } from "constants/general";
import styles from "./GlobalMainLayout.module.scss";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function GlobalMainLayout(props: Props): JSX.Element {
  const { children }: Props = props;

  const [themeState, setToggleTheme] = useToggleTheme();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 aria-label={"logo of devfinder"} className={styles.title}>
          devfinder
        </h1>
        <button onClick={setToggleTheme} className={styles.toggleTheme}>
          <h4 className={styles.text}>{themeState.next}</h4>
          {themeState.active === LIGHT_THEME_NAME ? <MoonIcon /> : <SunIcon />}
        </button>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
