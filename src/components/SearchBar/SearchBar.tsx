import type { FormEvent } from "react";

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
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="search" placeholder="Search GitHub username..." />

      {error && <span>No results</span>}

      <button type="submit">Search</button>
    </form>
  );
}
