import React from "react";
import Image from "next/image";
import styles from "./AuthorCard.module.scss";
import { urlFor } from "@/sanity/sanity.client";
import { Author } from "@/types/blog";
import Icon from "../Icon/Icon";

type Props = {
  author: Author;
  lang: string;
};

const LABELS: Record<string, string> = {
  en: "Written by",
  pl: "Autor",
  ru: "Автор",
};

const AuthorCard: React.FC<Props> = ({ author, lang }) => {
  const label = LABELS[lang] ?? LABELS.en;

  return (
    <div className={styles.card}>
      <p className={styles.eyebrow}>{label}</p>
      <div className={styles.content}>
        {author.photo && (
          <Image
            src={urlFor(author.photo).url()}
            alt={author.photo.alt ?? author.name}
            width={64}
            height={64}
            unoptimized
            className={styles.avatar}
          />
        )}
        <div className={styles.text}>
          <p className={styles.name}>{author.name}</p>
          {author.role && <p className={styles.role}>{author.role}</p>}
          {author.bio && <p className={styles.bio}>{author.bio}</p>}
          {author.socialLinks && author.socialLinks.length > 0 && (
            <div className={styles.social}>
              {author.socialLinks.map((link) => (
                <a
                  key={link._key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className={styles.socialLink}
                >
                  <Icon name={link.platform} size={18} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
