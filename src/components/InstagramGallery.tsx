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
    <section className="body-font">
      <div className="container mx-auto  py-3 ">
        <h3 className="text-2xl">Instagram Feed</h3>
        <InstagramGallery
          accessToken={process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}
          pagination={true}
          count={24}
        />
      </div>
    </section>
  );
}
