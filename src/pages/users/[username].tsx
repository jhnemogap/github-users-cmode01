import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { SearchBar, UserCard } from "components";

import { routeUsername } from "routes";

import { USERNAME_DEFAULT } from "constants/general";
import styles from "./[username].module.scss";

import type { NextPage } from "next";
import type { NextRouter } from "next/router";
import type { GitHubUserResponse } from "types/users";

const UsernamePage: NextPage = () => {
  const router: NextRouter = useRouter();

  const [username, setUsername] = useState<string>(USERNAME_DEFAULT);
  const [errorData, setErrorData] = useState<boolean>(false);
  const [githubUser, setUserData] = useState<GitHubUserResponse | null>(null);

  const handleOnSearch = (value: string): void => setUsername(value || USERNAME_DEFAULT);

  const handleResponseSuccess = (resource: GitHubUserResponse): void => {
    setUserData(resource);
    router.push(routeUsername({ username })).then();
  };

  function fetching(): void {
    fetch(`https://api.github.com/users/${username}`)
      .then((resp: Response): Promise<any> | null => (resp.status === 200 ? resp.json() : null))
      .then((resource: GitHubUserResponse): void => (resource ? handleResponseSuccess(resource) : setErrorData(true)))
      .catch((_) => setErrorData(true));
  }

  useEffect((): void => {
    fetching();
  }, [username]);

  return (
    <section className={styles.page}>
      <SearchBar onSearch={handleOnSearch} error={errorData} />
      {!!githubUser && (
        <UserCard
          avatar={githubUser.avatar_url}
          name={githubUser.name}
          username={githubUser.login}
          joined={githubUser.created_at}
          biography={githubUser.bio}
          repos={githubUser.public_repos}
          followers={githubUser.followers}
          following={githubUser.following}
          location={githubUser.location}
          website={githubUser.blog}
          twitter={githubUser.twitter_username}
          company={githubUser.company}
        />
      )}
    </section>
  );
};

export default UsernamePage;
