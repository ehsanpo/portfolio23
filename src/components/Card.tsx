import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";

interface CardProps {
  title: string;
  img?: { src: string; alt: string; width?: number; height?: number };
  desc: string | JSX.Element;
  tags?: string[];
  new?: boolean;
  link?: string;
  sec?: boolean;
  aspectRatio?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  img,
  desc,
  tags,
  new: isNew,
  link,
  aspectRatio,
  children,
  sec,
  className,
}) => {
  const cardContent = (
    <article
      className={`${className} ${
        sec ? "bg-primary text-primary-content" : ""
      }  card h-full w-96 bg-base-300 shadow-xl border transition hover:border-accent border-base-300`}
    >
      {img && (
        <figure>
          <Image
            style={{ aspectRatio: aspectRatio ? "16/9" : "unset" }}
            className={!aspectRatio ? "mt-4 " : "w-full"}
            src={img.src}
            alt={img.alt}
            width={img.width ? img.width : 400}
            height={img.height ? img.height : 200}
          />
        </figure>
      )}

      <div className="card-body">
        {title && (
          <header>
            <Heading
              className="card-title"
              element="h3"
              size="m"
              padding="none"
            >
              {title}
              {isNew && <div className="badge badge-secondary">NEW</div>}
            </Heading>
          </header>
        )}
        {children}
        {desc && <div>{desc}</div>}
        {tags && (
          <div className="card-actions justify-end">
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                className="badge badge-outline  hover:text-primary-content"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (link) {
    return <Link href={link}>{cardContent}</Link>;
  } else {
    return cardContent;
  }
};

export default Card;
