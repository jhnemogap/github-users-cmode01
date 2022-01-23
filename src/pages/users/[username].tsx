import { useRouter } from "next/router";

import type { NextPage } from "next";
import type { NextRouter } from "next/router";

const UsernamePage: NextPage = () => {
  const router: NextRouter = useRouter();
  const { username } = router.query;

  return (
    <div>
      <h1>{username}</h1>
      <h2>Lorem ipsum dolor sit amet</h2>
      <h3>@{username}</h3>
      <h4>repos</h4>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet architecto consequuntur, corporis ducimus
        eum, excepturi iste itaque maiores nam neque nihil, quae quasi sit totam. Assumenda fugit nemo vel.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consequatur earum fuga neque nostrum
        ratione rerum sapiente sit vero. Alias culpa dolorum eius eligendi eum omnis perspiciatis vitae voluptates?
      </p>
    </div>
  );
};

export default UsernamePage;
