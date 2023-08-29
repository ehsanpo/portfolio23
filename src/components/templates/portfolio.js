import React, { useState, useEffect } from "react";

import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import Section from "@/components/Section";
import NextImage from "next/image";

const NextArticle = ({ data }) => {
  if (Object.keys(data.nextPost).length === 0) {
    return null;
  }
  return (
    <Link href={data.nextPost.permalink} className="next">
      <span>Next</span> <br />
      {data.nextPost.title}
    </Link>
  );
};

const PrevArticle = ({ data }) => {
  if (Object.keys(data.prevPost).length === 0) {
    return null;
  }
  return (
    <Link href={data.prevPost.permalink}>
      <span>Previous</span> <br />
      {data.prevPost.title}
    </Link>
  );
};

const IndexPage = ({ data, content }) => {
  const portfolioBlockData = data.post;
  const permalink = "/images/portfolio/" + data.post.fileName + "/";
  const portfolioBlockBody = content;
  const [headerClose, setHeaderClose] = useState("");

  useEffect(() => {
    let open = setTimeout(function () {
      setHeaderClose("portfolio-header--close");
      clearTimeout(open);
    }, 1000);
  }, []);

  return (
    <Section>
      <article className="portfolio-page page">
        <div
          className="hero h-[calc(50vh)] place-items-end"
          style={{
            backgroundImage: `url(${
              permalink + portfolioBlockData.background_image[0]
            })`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-right text-neutral-content flex place-items-end ">
            <div className="max-w-md mx-4">
              <h1 className="mb-5 text-4xl font-bold">
                {portfolioBlockData.title}
              </h1>

              <button className="btn btn-primary">Visit Site</button>
            </div>
          </div>
        </div>
        <section className="flex items-start ">
          <aside className="sticky w-56 flex-none top-0">
            <div>
              <div>
                <h4>
                  <span>Date</span>

                  {portfolioBlockData.port_date}
                </h4>
                <h4>
                  <span>Client</span>

                  {portfolioBlockData.client}
                </h4>
                {portfolioBlockData.agancy && (
                  <h4>
                    <span>Agancy</span>

                    {portfolioBlockData.agancy}
                  </h4>
                )}
              </div>
              <div>
                <div className="tags">
                  <span>01</span> Roles
                  {portfolioBlockData.category.map((cat) => (
                    <span key={cat}>{cat} </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="tags">
                  <span>02</span> Tech
                  {portfolioBlockData.tag.map((tag, index) => (
                    <Link key={index} href={`/portfolio/tags/${tag}`}>
                      <span key={tag}>{tag} </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <div className=" gallery-wrapper flex-1">
            {portfolioBlockBody && (
              <div>
                <span>4</span> About
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: portfolioBlockBody }}
                />
              </div>
            )}

            <div>
              <span>5</span> Gallery
              {portfolioBlockData.bilder.map((bild) => (
                <div className="image-wrapper" key={bild.id}>
                  <NextImage
                    // style={{
                    // //   color: bild.colors.vibrant,
                    //   boxShadow: "0 0 30px " + bild.colors.vibrant,
                    // }}
                    // width={1200}

                    fill
                    src={permalink + bild}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="wrapper pagination">
            <NextArticle data={data} />
            <PrevArticle data={data} />
          </div>
        </section>
      </article>
    </Section>
  );
};

export default IndexPage;
