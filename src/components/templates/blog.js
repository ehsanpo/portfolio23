import React from "react";

import Seo from "../Seo";
import Image from "next/image";
import reactStringReplace from "react-string-replace";
import Section from "../Section";

const Post = ({ data, content }) => {
  const imgLink = data.post.permalink.replace("/notes/", "/images/");
  const regex = /(!\[(.*?)\]\((.*?)\))/g;
  let cleanContent = reactStringReplace(content, regex, (match, i) => {
    if (match[0] == "!") return null;

    return (
      <Image
        src={"/images" + imgLink + match.replace(".", "")}
        alt={match}
        width={1200}
        height={200}
      />
    );
  });

  cleanContent = reactStringReplace(cleanContent, /<iframe\s*/, (match, i) => {
    const text = match.match(/src="([^"]+)"/);
    if (text) {
      const srcValue = text[1];
      return <iframe width="100%" src={srcValue} />;
    }
  });

  return (
    <>
      <Seo title={data.post.title} />
      <Section maxWidth="m" className="page-header ">
        <div className="wrapper">
          <h1 className="display">{data.post.title}</h1>
        </div>
      </Section>

      <Section maxWidth="m">
        <div className="wrapper">
          <div className="wrapper-m">
            <div className="blogContent">{cleanContent}</div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Post;
