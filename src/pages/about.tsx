import Awards from "@/components/Awards";
import Hero from "@/components/Hero";

const educationData = [
  {
    title: "Ruby on Rails",
    description:
      "Completed an intensive Ruby on Rails course at BredBand2, gaining proficiency in building robust web applications.",
    date: "2021",
  },
  {
    title: "Linux Academy / A Cloud Guru",
    description:
      "Earned the AWS Certified Solutions Architect certification through rigorous training from Linux Academy, demonstrating expertise in architecting scalable and reliable cloud solutions.",
    date: "2018",
  },
  {
    title: "Hermods",
    description:
      "Successfully completed a comprehensive Programming A and Database Management course at Hermods, mastering essential programming and database administration skills.",
    date: "2011",
  },
  {
    title: "Glokala Folkshögskola",
    description:
      "Immersed in an in-depth Music Production program at Glokala Folkshögskola, acquiring proficiency in recording, mixing, mastering, event planning, and industry-standard practices within the music domain.",
    date: "2009",
  },
  {
    title: "Universitetsholmen's High School",
    description:
      "Pursued an Electricity Program with a specialization in Automation at Universitetsholmen's High School, gaining skills in PLC programming, control engineering, pneumatic systems, and complemented by a comprehensive Web Design course.",
    date: "2008",
  },
];

const experienceData = [
  {
    title: "Software Developer at Telavox",
    description:
      "Collaborated on the development of various software projects using Angular, React, Java, and ElectronJs.",
    date: "2023",
  },
  {
    title: "Software Developer at Bredband2",
    description:
      "Contributed to the implementation of web applications utilizing Gatsby, NextJs, and Ruby on Rails. Also managed projects and teams.",
    date: "2020 - 2023",
    link: "/portfolio/bredband2/",
  },
  {
    title: "Software Developer with Front-end Focus at Skymill",
    description:
      "Led front-end development efforts by working with React and creating comprehensive end-to-end tests to ensure optimal user experiences.",
    date: "2020",
  },
  {
    title: "Freelance Web Developer",
    description:
      "Operated as an independent web developer, delivering high-quality responsive websites and web applications to clients.",
    date: "2019",
  },
  {
    title: "Web Developer/Tech Lead at Guts & Glory",
    description:
      "Served as a technical lead at an advertising agency, offering clients strategic digital communication solutions for expanding their market reach.",
    date: "2017 - 2019",
  },
  {
    title: "Full Stack Developer at Whitespace",
    description:
      "Managed end-to-end development projects for a global web agency, specializing in UX/UI design, web development, and digital marketing.",
    date: "2013 - 2017",
  },
  {
    title: "Web Developer/Designer at The Fan Club",
    description:
      "Executed web production tasks at The Fan Club, contributing to the creation of compelling online experiences.",
    date: "2012 - 2013",
  },
  {
    title: "Freelance Web Developer",
    description:
      "Pioneered a year-long freelance endeavor focused on assisting local businesses through innovative web solutions.",
    date: "2012",
  },
  {
    title: "Developer/Designer at Next Generation Design",
    description:
      "Managed design and development tasks while overseeing server administration and web hosting operations.",
    date: "2011 - 2010",
  },
];

export default function About() {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-between items-center py-28 px-5">
          <div className="w-1/2">
            <h1 className="text-4xl font-semibold text-gray-800">
              About Ehsan
            </h1>
            <h3 className="text-xl font-semibold text-gray-600 mt-4">
              Welcome to my digital world! I'm Ehsan Pourhadi, a versatile
              Developer, Designer, and Producer with over ten years of
              experience crafting innovative solutions for the digital realm.
            </h3>
            <p className="text-gray-600 mt-4">
              My journey as a self-taught professional has equipped me with a
              profound understanding of software development, design, and
              multimedia. With a relentless drive for excellence, I have honed
              my expertise in delivering robust software architectures, seamless
              user experiences, and visually captivating designs. With a diverse
              skill set, I excel in various web development stacks, anchored by
              a robust command of WordPress and Laravel for backend excellence.
              <br />
              My proficiency extends seamlessly to front-end mastery with
              Javascript and HTML/CSS. Beyond web development, I possess a
              profound comprehension of user interface design, intricacies of
              logo and identity creation, and the intricacies of search engine
              optimization.
              <br />
              My extensive expertise also spans multimedia and mobile
              development, as I consistently seek novel ideas and methodologies
              to elevate my skills and enrich the user experience.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://www.emprenderconactitud.com/img/fidelizamas.png"
              alt="Imagen relacionada con el programa de fidelización"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font bg-base-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
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
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Motivators
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
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
                    Code isn't just functional; it molds digital environments,
                    driving innovation.
                  </p>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <div className="flex w-full">
        <div className="grid h-20 flex-grow card  rounded-box place-items-center">
          Experience
          <ul>
            {experienceData.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-20 flex-grow card  rounded-box place-items-center">
          Education
          <ul>
            {educationData.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Awards />
      <section>Awards</section>
    </>
  );
}
