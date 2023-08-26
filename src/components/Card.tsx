import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  img?: { src: string; alt: string };
  desc: string;
  tags?: string[];
  new?: boolean;
  link: string;
}

const Card: React.FC<CardProps> = ({
  title,
  img,
  desc,
  tags,
  new: isNew,
  link,
}) => {
  return (
    <Link href={link}>
      <article className="card w-96 bg-base-100 shadow-xl border border-base-300">
        {img && (
          <figure>
            <Image
              style={{ aspectRatio: "16/9" }}
              src={img.src}
              alt={img.alt}
              width={400}
              height={200}
            />
          </figure>
        )}

        <div className="card-body">
          <header>
            <h2 className="card-title">
              {title}
              {isNew && <div className="badge badge-secondary">NEW</div>}
            </h2>
          </header>
          <p>{desc}</p>
          {tags && (
            <div className="card-actions justify-end">
              {tags.slice(0, 3).map((tag) => (
                <div key={tag} className="badge badge-outline">
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default Card;
