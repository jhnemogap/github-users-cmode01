import { useEffect } from "react";
import { useRouter } from "next/router";

import { routeUsername } from "routes";

import type { NextPage } from "next";
import type { NextRouter } from "next/router";

const HomePage: NextPage = () => {
  const router: NextRouter = useRouter();

  useEffect((): void => {
    router.replace(routeUsername()).then();
  }, []);

  return <div>Homepage</div>;
};

export default HomePage;
