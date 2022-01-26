export interface GitHubUserResponse {
  login: string; // is a Date on UTC
  avatar_url: string;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  name?: string | null;
  bio?: string | null;
  location?: string | null;
  blog?: string | null;
  twitter_username?: string | null;
  company?: string | null;
}

export interface UserCardProps {
  username: string;
  avatar: string;
  joined: string; // is a Date on UTC
  repos: number;
  followers: number;
  following: number;
  name?: string | null;
  biography?: string | null;
  location?: string | null;
  website?: string | null;
  twitter?: string | null;
  company?: string | null;
}
