import { useEffect } from "react";
import { useRouter } from "next/router";

import { routeUsername } from "routes";

import type { NextPage } from "next";
import type { NextRouter } from "next/router";

const UsersPage: NextPage = () => {
  const router: NextRouter = useRouter();

  useEffect((): void => {
    router.replace(routeUsername()).then();
  }, []);

  return <div>Users Page</div>;
};

export default UsersPage;
