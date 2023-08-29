import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import reactStringReplace from "react-string-replace";
import Image from "next/image";

const Index = ({ data, onHome = false, excerpt = false }) => {
  return (
    <div className="mx-auto container  mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto  lg:max-w-none">
        <div className="space-y-24 lg:space-y-32">
          {data.map((item) => {
            const imgLink = item.data.permalink.replace("/notes/", "/images/");
            const permalink = "/notes" + item.data.permalink;
            const content = excerpt
              ? item.content.substr(0, 170)
              : item.content;
            const regex = /(!\[(.*?)\]\((.*?)\))/g;
            let cleanContent = reactStringReplace(
              content,
              regex,
              (match, i) => {
                if (match[0] == "!") return null;
                return " ";
              }
            );

            cleanContent = reactStringReplace(
              cleanContent,
              /<iframe\s*/,
              (match, i) => {
                const text = match.match(/src="([^"]+)"/);
                if (text) {
                  const srcValue = text[1];
                  return <iframe width="100%" src={srcValue} />;
                }
              }
            );

            return (
              <article
                key={item.data.id}
                className="mt-7 pt-6 relative 
                
               "
              >
                <span
                  className=" absolute 
                  bg-accent-focus   
                left-0 top-0 w-3 
                h-[2px]
                "
                />
                <span
                  className=" absolute 
                bg-accent right-0
                left-4 top-0 
                h-[1px]
                "
                />

                <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                  <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-neutral-950">
                      <a href={permalink}>{item.data.title}</a>
                    </h2>
                    <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                      <dt className="sr-only">Published</dt>
                      <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                        <time dateTime="2023-04-06"> {item.data.date}</time>
                      </dd>
                      <dt className="sr-only">Author</dt>
                      <dd className="mt-2 flex gap-x-2">
                        <div className="flex-none overflow-hidden rounded-xl bg-base-200">
                          <img
                            alt=""
                            loading="lazy"
                            width="1800"
                            height="1800"
                            className="h-5 w-5 object-cover grayscale"
                            src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchelsea-hagon.073aa8f2.jpg&w=1920&q=75"
                          />
                        </div>
                        <div className="text-sm text-neutral-950">
                          <div className="font-semibold">
                            {item.data.author}
                          </div>
                          <div>Senior Developer</div>
                        </div>
                      </dd>
                    </dl>
                    <p className="mt-2 max-w-2xl text-base text-neutral-600">
                      {cleanContent}
                    </p>
                    <a
                      className="btn mt-4"
                      aria-label={item.data.title}
                      href={permalink}
                    >
                      <span className="relative top-px">Read more</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
          {onHome && (
            <div className="center">
              <Button className="btn--3">See Portfolio</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
