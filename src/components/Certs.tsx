import React from "react";
import cert_data from "@/../data/cert-data";
import Image from "next/image";
import Grid from "./Grid";
import Heading from "./Heading";

interface Certification {
  img: string;
  name: string;
}

const Certs: React.FC = () => {
  return (
    <div className="container mx-auto mb-4">
      <Heading
        size="xl"
        element="h2"
        padding="xl"
        center
        className="text-primary"
      >
        Certifications
      </Heading>
      <Grid columns={4}>
        {cert_data.map((cert: Certification, index: number) => {
          return (
            <div key={index} className="text-center">
              <Image
                src={`/img/cert/${cert.img}`}
                alt={cert.name}
                width={320}
                height={320}
              />
              <h4></h4>
              <Heading
                size="m"
                element="h3"
                padding="none"
                center
                className="text-accent"
              >
                {cert.name}
              </Heading>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default Certs;
