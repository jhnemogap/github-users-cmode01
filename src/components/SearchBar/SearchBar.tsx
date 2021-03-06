import type { FormEvent } from "react";

import { SearchIcon } from "components";

import styles from "./SearchBar.module.scss";

interface Props {
  onSearch?: (s: string) => void;
  error?: boolean;
}

export function SearchBar(props: Props): JSX.Element {
  const { onSearch = () => undefined, error = false } = props;

  const handleOnSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const search: string = (new FormData(event.currentTarget as HTMLFormElement).get("search") ?? "") as string;
    onSearch(search);
  };

  return (
    <div>
      <form name={"search-bar"} className={styles.searchBar} onSubmit={handleOnSubmit}>
        <SearchIcon className={styles.icon} />

        <div className={styles.inputContainer}>
          <input
            type={"text"}
            name={"search"}
            placeholder={"Search GitHub username..."}
            tabIndex={1}
            autoFocus={true}
            className={styles.input}
          />
          {error && (
            <span role={"label"} className={styles.errorLabel}>
              No results
            </span>
          )}
        </div>

        <button type={"submit"} tabIndex={2} className={styles.btn}>
          search
        </button>
      </form>
    </div>
  );
}
