import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Section from "@/components/Section";
import TextAndImage from "@/components/TextAndImage";
import InstagramGallery from "@/components/InstagramGallery";
import Imagehover from "@/components/ImageHover";
import SeO from "@/components/Seo";
import Heading from "@/components/Heading";

export default function About() {
  const classnames = [
    "bg-grad0",
    "bg-grad1",
    "bg-grad2",
    "bg-grad3",
    "bg-grad4",
    "bg-grad5",
    "bg-grad6",
    "bg-grad7",
  ];

  return (
    <>
      <SeO
        title="About Ehsan Pourhadi - Digital Developer Portfolio"
        description="Explore a diverse 10+ year journey spanning Software Development, UI/UX Design, Music Production, AI Operations, Tech Research, and more."
      />

      <TextAndImage
        className={`duration-500 transition-all bg-center bg-[length:100%] hover:bg-[length:500%] ${
          classnames[Math.floor(Math.random() * classnames.length)]
        } `}
        headline="About Ehsan"
        imgComponent={<Imagehover />}
        description="Welcome to my digital world! I'm Ehsan Pourhadi, a versatile Developer, Designer, and Producer with over ten years of experience crafting innovative solutions for the digital realm."
      />
      <Section primary>
        <div className="container px-2 md:px-5 md:py-6 mx-auto flex flex-wrap">
          <Heading element="h2" size="xl" className="md:w-2/5">
            Background
          </Heading>
          <div className="md:w-3/5 md:pl-6">
            <div className="leading-relaxed text-base">
              <span className=" mt-4">
                My journey as a self-taught professional has equipped me with a
                profound understanding of software development, design, and
                multimedia. With a relentless drive for excellence, I have honed
                my expertise in delivering robust software architectures,
                seamless user experiences, and visually captivating designs.
                With a diverse skill set, I excel in various web development
                stacks, anchored by a robust command of WordPress and Laravel
                for backend excellence.
                <br />
                <br />
                My proficiency extends seamlessly to front-end mastery with
                Javascript and HTML/CSS. Beyond web development, I possess a
                profound comprehension of user interface design, intricacies of
                logo and identity creation, and the intricacies of search engine
                optimization.
                <br />
                <br />
                My extensive expertise also spans multimedia and mobile
                development, as I consistently seek novel ideas and
                methodologies to elevate my skills and enrich the user
                experience.
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container px-2 md:px-5 md:py-6 mx-auto flex flex-wrap">
          <Heading element="h2" size="xl" className="md:w-2/5">
            Philosophy
          </Heading>
          <div className="md:w-3/5 md:pl-6">
            <ul className="leading-relaxed text-base">
              <li>
                <p>
                  <strong>Iterative Excellence:</strong> Code and art thrive
                  through iterative processes. I embrace trial, error, and rapid
                  iteration to create solutions that transcend boundaries.
                </p>
              </li>
              <li>
                <p>
                  <strong>Architects of Inclusivity:</strong> Developers shape a
                  virtual landscape where inclusivity and user-centric design
                  prevail. My goal is to create online spaces where every user
                  feels a sense of belonging.
                </p>
              </li>
              <li>
                <p>
                  <strong>Humility in Design:</strong> Ego has no place in
                  design. I approach work humbly, embracing failure to pave the
                  way for rapid success.
                </p>
              </li>
              <li>
                <p>
                  <strong>Problem Definition:</strong> Effective design starts
                  with clear problem definition. Understanding challenges leads
                  to purposeful solutions.
                </p>
              </li>
              <li>
                <p>
                  <strong>Diverse Solutions:</strong> No single solution fits
                  all. I explore creative possibilities to address unique
                  contexts and demands.
                </p>
              </li>
              <li>
                <p>
                  <strong>User-Centric Empathy:</strong> Guided by empathy, I
                  design from a user-centric perspective, ensuring solutions
                  resonate and provide value.
                </p>
              </li>
              <li>
                <p>
                  <strong>Ethics and Impact:</strong> I prioritize privacy,
                  security, and ethics, contributing to a digital landscape of
                  integrity.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section secondary>
        <div className="container px-2 md:px-5 md:py-6 mx-auto flex flex-wrap">
          <Heading element="h2" size="xl" className="md:w-2/5">
            Motivators
          </Heading>
          <div className="md:w-3/5 md:pl-6">
            <div className="leading-relaxed text-base">
              <ul>
                <li>
                  <p>
                    Tackling <strong>complex</strong> problems.
                  </p>
                </li>
                <li>
                  <p>
                    Empowering colleagues to contribute
                    <strong> meaningful</strong> insights.
                  </p>
                </li>
                <li>
                  <p>
                    Constructing cohesive and{" "}
                    <strong>scalable software </strong>
                    architectures.
                  </p>
                </li>
                <li>
                  <p>
                    Optimizing workflows. <strong>Sharing expertise</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    Establishing <strong>credibility</strong> and reliability.
                  </p>
                </li>
                <li>
                  <p>
                    Code is not just functional; it molds
                    <strong>digital environments</strong>, driving innovation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="lg:mt-4 flex w-full flex-col gap-2 sm:flex-row">
          <div className="md:w-3/6 mt-4  sm:mt-0 w-6/6">
            <Experience />
          </div>
          <div className="md:w-3/6 mt-4  sm:mt-0 w-6/6">
            <Education />
          </div>
        </div>
      </Section>
      <InstagramGallery />

      <Awards />
    </>
  );
}
