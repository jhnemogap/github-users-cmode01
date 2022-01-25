import { TEXT_BIOGRAPHY_DEFAULT, TEXT_NOT_AVAILABLE } from "constants/general";
import styles from "./UserCard.module.scss";

interface Props {
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

export function UserCard(props: Props): JSX.Element {
  const {
    username,
    avatar,
    joined,
    repos,
    followers,
    following,
    name,
    biography,
    location,
    website,
    twitter,
    company,
  } = props;

  const joinedArray: string[] = new Date(joined).toDateString().slice(4).split(" ");
  const joinedText: string = ["Joined", joinedArray[1], joinedArray[0], joinedArray[2]].join(" ");

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <img alt={"avatar"} src={avatar} width="100%" className={styles.avatar} />

        <section className={styles.intro}>
          <h1 className={styles.name} aria-roledescription="name of the user">
            {name || `${username}@`}
          </h1>
          <h3 className={styles.username} aria-roledescription="username to login">
            {`@${username}`}
          </h3>
          <p className={`h3 ${styles.joined}`} aria-roledescription="date the user joined github">
            {joinedText}
          </p>
        </section>

        <section className={styles.bio} style={{ opacity: !biography ? "50%" : "" }}>
          <p aria-roledescription="user biography">{biography || TEXT_BIOGRAPHY_DEFAULT}</p>
        </section>
      </header>

      <main className={styles.main}>
        <section className={styles.statisticsSection}>
          <div className={styles.statisticItem}>
            <h4>repos</h4>
            <p className={"h2"}>{repos}</p>
          </div>

          <div className={styles.statisticItem}>
            <h4>followers</h4>
            <p className={"h2"}>{followers}</p>
          </div>

          <div className={styles.statisticItem}>
            <h4>following</h4>
            <p className={"h2"}>{following}</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>{location || TEXT_NOT_AVAILABLE}</p>
        <p>{twitter || TEXT_NOT_AVAILABLE}</p>
        <p>{website || TEXT_NOT_AVAILABLE}</p>
        <p>{company || TEXT_NOT_AVAILABLE}</p>
      </footer>
    </article>
  );
}
