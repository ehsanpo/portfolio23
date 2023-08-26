import React from "react";
import cert_data from "@/../data/cert-data";
import Image from "next/image";
import Grid from "./Grid";

interface Certification {
  img: string;
  name: string;
}

const Certs: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h2 className="title red">Certifications</h2>
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
