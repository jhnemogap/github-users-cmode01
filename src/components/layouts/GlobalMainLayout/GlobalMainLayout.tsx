import { MoonIcon, SunIcon } from "components";

import { toggleTheme } from "utils/styles";

import styles from "./GlobalMainLayout.module.scss";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function GlobalMainLayout(props: Props): JSX.Element {
  const { children }: Props = props;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 aria-label={"logo of devfinder"}>devfinder</h1>
        <button onClick={toggleTheme} className={styles.toggleTheme}>
          <h4 className={styles.text}>LIGHT</h4>
          <MoonIcon />
          <SunIcon />
        </button>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
