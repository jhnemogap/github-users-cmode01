import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { SearchBar, UserCard } from "components";

import { routeUsername } from "routes";

import { USERNAME_DEFAULT } from "constants/general";

import type { NextPage } from "next";
import type { NextRouter } from "next/router";

const fakeData = {
  login: "octocat",
  id: 583231,
  node_id: "MDQ6VXNlcjU4MzIzMQ==",
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/octocat",
  html_url: "https://github.com/octocat",
  followers_url: "https://api.github.com/users/octocat/followers",
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  repos_url: "https://api.github.com/users/octocat/repos",
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  received_events_url: "https://api.github.com/users/octocat/received_events",
  type: "User",
  site_admin: false,
  name: "The Octocat",
  company: "@github",
  blog: "https://github.blog",
  location: "San Francisco",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 8,
  followers: 4633,
  following: 9,
  created_at: "2011-01-25T18:44:36Z",
  updated_at: "2021-12-22T15:07:10Z",
};

const UsernamePage: NextPage = () => {
  const router: NextRouter = useRouter();

  const [username, setUsername] = useState<string>(USERNAME_DEFAULT);

  const handleOnSearch = (value: string): void => {
    setUsername(value || USERNAME_DEFAULT);
  };

  useEffect((): void => {
    if (username !== router.query?.username) setUsername(router.query?.username as string);
  }, [router.query?.username]);

  useEffect((): void => {
    if (username !== router.query?.username) router.push(routeUsername({ username })).then();
  }, [username]);

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <SearchBar onSearch={handleOnSearch} />
      <UserCard
        avatar={fakeData.avatar_url}
        name={fakeData.name}
        username={fakeData.login}
        joined={fakeData.created_at}
        biography={fakeData.bio}
        repos={fakeData.public_repos}
        followers={fakeData.followers}
        following={fakeData.following}
        location={fakeData.location}
        website={fakeData.blog}
        twitter={fakeData.twitter_username}
        company={fakeData.company}
      />
    </section>
  );
};

export default UsernamePage;
