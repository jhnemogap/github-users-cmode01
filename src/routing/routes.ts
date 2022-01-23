import { DEFAULT_USERNAME } from "constants/general";

export const routeRoot = (): string => "/";

export const routeHome = (): string => routeRoot();

export const routeUsers = (): string => routeHome() + "users";

export const routeUsername = (params: { username?: string }): string => {
  const { username = DEFAULT_USERNAME } = params;
  return routeUsers() + `/${username}`;
};
