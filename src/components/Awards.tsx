// @ts-ignore

import React from "react";
import Link from "next/link";

import Grid from "@/components/Grid";
import InViewMonitor from "react-inview-monitor";
import Button from "@/components/Button";
import Image from "next/image";
import image1 from "../../public/cannen-b.png";
import image2 from "../../public/svenskadesign-b.png";
import image3 from "../../public/guldagg-b.png";
import Section from "./Section";

const Award = () => {
  return (
    <Section>
      <InViewMonitor
        intoViewMargin="8%"
        classNameNotInView="vis-hidden"
        classNameInView="animated titleIn"
        toggleClassNameOnInView
      >
        <h2 className="title yellow">Awards</h2>
      </InViewMonitor>
      <Grid columns={3}>
        <div>
          <div>
            <InViewMonitor
              intoViewMargin="10%"
              classNameNotInView="vis-hidden"
              classNameInView="animated titleIn"
              toggleClassNameOnInView
            >
              <Image alt="Svenska design" className="award-img" src={image2} />
              <div>
                <h3>Svenska design</h3>
                Gold Category Digital Design
                <br />
              </div>
              <Button
                className="btn btn--b btn--link"
                to="/portfolio/malmo-saluhall/"
              >
                View project
              </Button>
            </InViewMonitor>
          </div>
        </div>
        <div >
          <div >
            <InViewMonitor
              intoViewMargin="10%"
              classNameNotInView="vis-hidden"
              classNameInView="animated titleIn"
              toggleClassNameOnInView
            >
              <Image alt="Cannes lions" className="award-img" src={image1} />
              <div className="content">
                <h3>Cannes lions</h3>
                Silver Lion in Promo & Activation, Bronze Lion in Cyber &
                Shortlist in Media
              </div>
              <Button
                className="btn btn--b btn--link"
                to="/portfolio/toolpool/"
              >
                View project
              </Button>
            </InViewMonitor>
          </div>
        </div>
        <div >
          <div >
            <InViewMonitor
              intoViewMargin="10%"
              classNameNotInView="vis-hidden"
              classNameInView="animated titleIn"
              toggleClassNameOnInView
            >
              <Image alt="Guldägget" className="award-img" src={image3} />
              <div className="content">
                <h3>Guldägget</h3>
                Gold Category PR & Silver Categories Digital and Alternative
                Media
              </div>
              <Button
                className="btn btn--b btn--link"
                to="/portfolio/toolpool/"
              >
                View project
              </Button>
            </InViewMonitor>
          </div>
        </div>
        </Grid>
      <div className="center">
        <Button type="link" to="/about" className="btn--secondary">
          About Ehsan
        </Button>
      </div>
    </Section>
  );
};

export default Award;
