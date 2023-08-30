import React, { useState, useEffect } from "react";

import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import Section from "@/components/Section";
import NextImage from "next/image";
import Card from "@/components/Card";

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
  const permalink = "/images/" + data.post.fileName + "/";
  const portfolioBlockBody = content;
  const [headerClose, setHeaderClose] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [video, setVideo] = useState(false);

  function extractYouTubeVideoId(url) {
    const regex =
      /(?:\?v=|\/embed\/|\/v\/|\/vi\/|\/e\/|\/watch\?v=|\/watch\?feature=player_embedded&v=|\/watch\?feature=player_embedded&v=|\/watch\?v=|\/watch\?feature=player_embedded&v=|\/embed\/videoseries\?list=)([^#\&\?]*).*/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }

  useEffect(() => {
    console.log(video);
    if (portfolioBlockData.video) {
      setVideo(extractYouTubeVideoId(portfolioBlockData.video[0]));
    }

    let open = setTimeout(function () {
      setHeaderClose("portfolio-header--close");
      clearTimeout(open);
    }, 1000);
  }, []);

  const inputChange = (e) => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <article className="portfolio-page page">
        <div
          className="hero h-[calc(50vh)] place-items-end z-40 relative"
          style={{
            backgroundImage: `url(${
              permalink + portfolioBlockData.background_image[0]
            })`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>

          <div
            className={`hero-content text-right text-neutral-content flex place-items-end  ${
              video && "mb-6"
            }`}
          >
            <div className="max-w-md mx-4">
              <h1 className="mb-5 text-4xl font-bold">
                {portfolioBlockData.title}
              </h1>

              <button className="btn btn-primary">Visit Site</button>
            </div>
          </div>
          {video && (
            <div
              className={`video-wrapper ${
                isPlaying ? "video-wrapper--fullscreen" : ""
              }`}
            >
              <input type="checkbox" onChange={() => inputChange()} />
              <div className="video">
                <iframe
                  className="bg-video"
                  src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&controls=1&loop=1`}
                  allowFullScreen
                  allow="autoplay"
                />
              </div>
              <div className="text max-w-md mr-2 my-3">
                <span data-text="Watch the video"></span>
              </div>
            </div>
          )}
        </div>
        <Section>
          <div className="flex items-start ">
            <aside className="sticky w-1/3 flex-none top-0 pr-3">
              <div>
                <Card title="01 - Info" className="mb-2">
                  <h4>
                    <span>Date: </span>

                    {portfolioBlockData.port_date}
                  </h4>
                  <h4>
                    <span>Client: </span>

                    {portfolioBlockData.client}
                  </h4>
                  {portfolioBlockData.agancy && (
                    <h4>
                      <span>Agancy: </span>

                      {portfolioBlockData.agancy}
                    </h4>
                  )}
                </Card>
                <Card title="02 - Roles" className="mb-2">
                  <div>
                    {portfolioBlockData.category.map((cat) => (
                      <span className="badge badge-primary mr-1" key={cat}>
                        {cat}{" "}
                      </span>
                    ))}
                  </div>
                </Card>
                <Card title="03 - Tech" className="mb-2 ">
                  <div className="">
                    {portfolioBlockData.tag.map((tag, index) => (
                      <Link
                        className="badge badge-secondary mr-1"
                        key={index}
                        href={`/portfolio/tags/${tag}`}
                      >
                        <span>{tag} </span>
                      </Link>
                    ))}
                  </div>
                </Card>
              </div>
            </aside>
            <div className=" gallery-wrapper flex-1">
              {portfolioBlockBody && (
                <Card title="04 - About" className="mb-2 ">
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: portfolioBlockBody }}
                  />
                </Card>
              )}

              <div>
                <Card title="05 - Gallery" className="mb-2 ">
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
                </Card>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="wrapper pagination">
            <NextArticle data={data} />
            <PrevArticle data={data} />
          </div>
        </Section>
      </article>
    </>
  );
};

export default IndexPage;
