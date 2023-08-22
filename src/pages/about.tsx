import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Section from "@/components/Section";
import TextAndImage from "@/components/TextAndImage";
import InstagramGallery from "@/components/InstagramGallery";

export default function About() {
  return (
    <>
      <InstagramGallery />
      <TextAndImage
        headline="About Ehsan"
        subHeadline="Welcome to my digital world! I'm Ehsan Pourhadi, a versatile Developer, Designer, and Producer with over ten years of experience crafting innovative solutions for the digital realm."
      />

      <div className="bg-white">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <span className="text-gray-600 mt-4">
            My journey as a self-taught professional has equipped me with a
            profound understanding of software development, design, and
            multimedia. With a relentless drive for excellence, I have honed my
            expertise in delivering robust software architectures, seamless user
            experiences, and visually captivating designs. With a diverse skill
            set, I excel in various web development stacks, anchored by a robust
            command of WordPress and Laravel for backend excellence.
            <br />
            My proficiency extends seamlessly to front-end mastery with
            Javascript and HTML/CSS. Beyond web development, I possess a
            profound comprehension of user interface design, intricacies of logo
            and identity creation, and the intricacies of search engine
            optimization.
            <br />
            My extensive expertise also spans multimedia and mobile development,
            as I consistently seek novel ideas and methodologies to elevate my
            skills and enrich the user experience.
          </span>
        </div>
      </div>

      <section className="text-gray-600 body-font bg-base-200">
        <div className="container px-5 py-7 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Philosophy
          </h2>
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
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-7 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Motivators
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <div className="leading-relaxed text-base">
              <ul>
                <li>
                  <p>Tackling complex problems.</p>
                </li>
                <li>
                  <p>
                    Empowering colleagues to contribute meaningful insights.
                  </p>
                </li>
                <li>
                  <p>
                    Constructing cohesive and scalable software architectures.
                  </p>
                </li>
                <li>
                  <p>
                    Optimizing workflows. Sharing expertise. Cultivating
                    connections.
                  </p>
                </li>
                <li>
                  <p>Establishing credibility and reliability.</p>
                </li>
                <li>
                  <p>
                    Code is not just functional; it molds digital environments,
                    driving innovation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Section>
        <div className="flex w-full">
          <Education />
          <div className="divider divider-horizontal"></div>
          <Experience />
        </div>
      </Section>

      <Awards />
    </>
  );
}
