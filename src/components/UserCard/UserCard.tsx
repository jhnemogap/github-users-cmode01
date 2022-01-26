import Link from "next/link";

import { CompanyIcon, LocationIcon, TwitterIcon, WebsiteIcon } from "components";

import { TEXT_BIOGRAPHY_DEFAULT, TEXT_NOT_AVAILABLE } from "constants/general";
import styles from "./UserCard.module.scss";

import type { UserCardProps } from "types/users";

export function UserCard(props: UserCardProps): JSX.Element {
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
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

        <section className={styles.bio} style={setCssOpacityOnStyle(!biography, "75%")}>
          <p aria-roledescription="user biography">{biography || TEXT_BIOGRAPHY_DEFAULT}</p>
        </section>
      </header>

      <main className={styles.main}>
        <section className={styles.statisticsSection}>
          <div className={styles.statisticItem}>
            <h4>repos</h4>
            <p className={"h2 textColorSecondary"}>{repos}</p>
          </div>

          <div className={styles.statisticItem}>
            <h4>followers</h4>
            <p className={"h2 textColorSecondary"}>{followers}</p>
          </div>

          <div className={styles.statisticItem}>
            <h4>following</h4>
            <p className={"h2 textColorSecondary"}>{following}</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.detail} style={setCssOpacityOnStyle(!location, "50%")}>
          <span className={styles.icon}>
            <LocationIcon />
          </span>
          <p>{location || TEXT_NOT_AVAILABLE}</p>
        </div>
        <div className={styles.detail} style={setCssOpacityOnStyle(!twitter, "50%")}>
          <span className={styles.icon}>
            <TwitterIcon />
          </span>
          <p>{twitter || TEXT_NOT_AVAILABLE}</p>
        </div>
        <div className={styles.detail} style={setCssOpacityOnStyle(!website, "50%")}>
          <span className={styles.icon}>
            <WebsiteIcon />
          </span>
          <p>
            {!website && TEXT_NOT_AVAILABLE}
            {!!website && (
              <Link href={website} passHref>
                <a target="_blank" rel="noreferrer">
                  {website}
                </a>
              </Link>
            )}
          </p>
        </div>
        <div className={styles.detail} style={setCssOpacityOnStyle(!company, "50%")}>
          <span className={styles.icon}>
            <CompanyIcon />
          </span>
          <p>{company || TEXT_NOT_AVAILABLE}</p>
        </div>
      </footer>
    </article>
  );
}

function setCssOpacityOnStyle(
  expression: boolean = false,
  percentTrue: string = "",
  percentFalse: string = "",
): { opacity: string } {
  return { opacity: expression ? percentTrue : percentFalse };
}
