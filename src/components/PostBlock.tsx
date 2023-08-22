import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Index = ({ data, onHome = false }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="space-y-24 lg:space-y-32">
          {data.map((item) => (
            <article key={item.data.id}>
              <div className="pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                  <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-neutral-950">
                      <a href="/blog/future-of-web-development">
                        {item.data.title}
                      </a>
                    </h2>
                    <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                      <dt className="sr-only">Published</dt>
                      <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                        <time dateTime="2023-04-06"> {item.data.date}</time>
                      </dd>
                      <dt className="sr-only">Author</dt>
                      <dd className="mt-6 flex gap-x-4">
                        <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                          {/*   <img
                              alt=""
                              loading="lazy"
                              width="1800"
                              height="1800"
                              decoding="async"
                              data-nimg="1"
                              className="h-12 w-12 object-cover grayscale"
                            
                              srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchelsea-hagon.073aa8f2.jpg&amp;w=1920&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchelsea-hagon.073aa8f2.jpg&amp;w=3840&amp;q=75 2x"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchelsea-hagon.073aa8f2.jpg&amp;w=3840&amp;q=75"
                            /> */}
                        </div>
                        <div className="text-sm text-neutral-950">
                          <div className="font-semibold">
                            {item.data.author}
                          </div>
                          <div>Senior Developer</div>
                        </div>
                      </dd>
                    </dl>
                    <p className="mt-6 max-w-2xl text-base text-neutral-600">
                      {item.data.excerpt}
                    </p>
                    <a
                      className="btn"
                      aria-label={item.data.title}
                      href={item.data.permalink}
                    >
                      <span className="relative top-px">Read more</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
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
