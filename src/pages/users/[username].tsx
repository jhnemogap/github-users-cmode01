import { useRouter } from "next/router";

import type { NextPage } from "next";
import type { NextRouter } from "next/router";

const UsernamePage: NextPage = () => {
  const router: NextRouter = useRouter();

  return <div>Page of Username {router.query?.username}</div>;
};

export default UsernamePage;
