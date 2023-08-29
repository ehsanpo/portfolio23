// @ts-ignore

import React from "react";
import Link from "next/link";

import Grid from "@/components/Grid";
import InViewMonitor from "react-inview-monitor";
import Button from "@/components/Button";
import Section from "./Section";
import Card from "./Card";
import Heading from "./Heading";

const Award = () => {
  return (
    <Section>
      <Heading size="xl" element="h2" padding="xl" center>
        Awards
      </Heading>

      <Grid columns={3}>
        <Card
          sec
          title="Svenska design"
          desc="Gold Category Digital Design "
          img={{
            src: "/static/svenskadesign-b.png",
            alt: "Svenska design",
            width: 80,
            height: 80,
          }}
        />

        <Card
          sec
          title="Cannes lions"
          desc=" Silver Lion in Promo & Activation, Bronze Lion in Cyber &
            Shortlist in Media"
          img={{
            src: "/static/cannen-b.png",
            alt: "Cannes lions",
            width: 80,
            height: 80,
          }}
        />

        <Card
          sec
          title="Guldägget"
          desc=" Gold Category PR & Silver Categories Digital and Alternative Media"
          img={{
            src: "/static/guldagg-b.png",
            alt: "Guldägget",
            width: 80,
            height: 80,
          }}
        />
      </Grid>
      <div className="mt-4 flex flex-col items-center justify-center">
        <Button type="link" to="/about" className="btn--secondary">
          About Ehsan
        </Button>
      </div>
    </Section>
  );
};

export default Award;
