import React from "react";
import Grid from "@/components/Grid";
import Button from "@/components/Button";
import Section from "./Section";
import Card from "./Card";
import Heading from "./Heading";
import { Fade } from "react-awesome-reveal";
import { calculateAnimationDelayValue } from "@/util/index";

const Award = () => {
  return (
    <Section>
      <Heading size="xl" element="h2" padding="xl" center>
        Awards
      </Heading>

      <Grid columns={3}>
        <Fade delay={10}>
          <Card
            center
            sec
            title="Svenska design"
            desc="Gold Category Digital Design "
            img={{
              src: "/static/svenskadesign.png",
              alt: "Svenska design",
              width: 80,
              height: 80,
            }}
          />
        </Fade>
        <Fade delay={100}>
          <Card
            center
            sec
            title="Cannes lions"
            desc=" Silver Lion in Promo & Activation, Bronze Lion in Cyber &
            Shortlist in Media"
            img={{
              src: "/static/cannen.png",
              alt: "Cannes lions",
              width: 80,
              height: 80,
            }}
          />
        </Fade>
        <Fade delay={150}>
          <Card
            center
            sec
            title="Guldägget"
            desc=" Gold Category PR & Silver Categories Digital and Alternative Media"
            img={{
              src: "/static/guldagg.png",
              alt: "Guldägget",
              width: 80,
              height: 80,
            }}
          />
        </Fade>
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
