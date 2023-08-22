import { InstagramGallery } from "instagram-gallery";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    setTimeout(() => {
      Array.from(document.getElementsByTagName("video")).forEach((element) => {
        element.removeAttribute("autoplay");
      });
    }, 1000);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex py-7 md:flex-row flex-col items-center">
        <InstagramGallery
          accessToken={process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}
          pagination={true}
          count={24}
        />
      </div>
    </section>
  );
}
