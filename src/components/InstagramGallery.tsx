import { InstagramGallery } from "instagram-gallery";
import { useEffect } from "react";
import Heading from "./Heading";

export default function About() {
  useEffect(() => {
    setTimeout(() => {
      Array.from(document.getElementsByTagName("video")).forEach((element) => {
        element.removeAttribute("autoplay");
      });
    }, 1000);
  }, []);

  return (
    <section className="body-font">
      <div className="container mx-auto  py-3 ">
        <Heading size="xl" element="h2" padding="xl" center>
          Instagram Feed
        </Heading>
        <InstagramGallery
          accessToken={process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}
          count={24}
        />
      </div>
    </section>
  );
}
