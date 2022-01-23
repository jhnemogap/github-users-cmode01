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
        <h1>devfinder</h1>
        <button onClick={toggleTheme}>Change theme</button>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
