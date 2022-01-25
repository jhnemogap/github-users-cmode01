import { USERNAME_DEFAULT } from "constants/general";

export const routeRoot = (): string => "/";

export const routeHome = (): string => routeRoot();

export const routeUsers = (): string => routeHome() + "users";

export const routeUsername = (params: { username?: string }): string => {
  const { username = USERNAME_DEFAULT } = params;
  return routeUsers() + `/${username}`;
};
