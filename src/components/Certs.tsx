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
    <div className="container mx-auto">
      <Heading size="xl" element="h2" padding="xl" center>
        Certifications
      </Heading>
      <Grid columns={4}>
        {cert_data.map((cert: Certification, index: number) => {
          return (
            <div key={index}>
              <Image
                src={`/images/cert/${cert.img}`}
                alt={cert.name}
                width={320}
                height={320}
              />
              <h4>{cert.name}</h4>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default Certs;
