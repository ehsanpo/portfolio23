import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Heading from "./Heading";
import Grid from "./Grid";
interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  img: string;
  short: string;
  desc: React.ReactNode;
}

const testimonial_data: TestimonialItem[] = [
  {
    id: 1,
    name: "Asger Bjerre-Nielsen",
    title: "Developer At Bredeband2",
    img: "/img/testimonial/asger.jpg",
    short:
      "Ehsan and I have worked closely together on a variety of projects, each differing in size and complexity. Besides his excellent ability to break down tasks and problems and provide high quality code to efficiently solve even the most demanding task we have had.",
    desc: (
      <>
        Having worked in the industry for only a handful of years, I consider
        the opportunity to have worked with Ehsan as extremely rewarding. <br />
        Even though we started out in different teams, Ehsan has always been
        open to discussing both problems and solutions.
        <br />
        <br />
        Over the past two years, Ehsan and I have worked closely together on a
        variety of projects, each differing in size and complexity. Besides his
        excellent ability to break down tasks and problems and provide high
        quality code to efficiently solve even the most demanding task we have
        had, Ehsan also has the ability to convey the essence of a problem and
        explain both the ‘how’ and the ‘why’ it should be solved to junior devs
        as well as customers alike.
        <br />
        <br />
        But working with Ehsan is also challenging in the best possible way. He
        is always on the lookout for new tech and ideas, on how to do things
        better. This is something from which everyone in our team has benefitted
        from. Over a great many cups of tea, we have discussed how to approach
        problems, potential pitfalls and best practices.
        <br />
        <br /> I’m sure that Ehsan’s knowledge, curiosity and sense of team work
        will be a great asset to any organisation and I envy the next developer
        who gets to pick his brain.
        <br />
        <br />- It’s always time for tea…
      </>
    ),
  },
  {
    id: 2,
    name: "Rebecca Löfgren",
    title: "Senior UX Designer at Bredband2",
    img: "/img/testimonial/rebecca.jpg",
    short:
      "Ehsan possesses the ability to see the whole picture, which enables him to produce quality products – even if the brief is a bit fuzzy.",
    desc: (
      <>
        I had the pleasure of working with Ehsan during my first couple of years
        at Bredband2 (before he unfortunately moved on to take on new
        adventures). And let me tell you – I don’t think I’ve ever met someone
        as passionate and knowledgeable about “everything code” as him!
        <br />
        <br />
        Working with Ehsan means constantly being introduced to new ideas and
        interesting innovations. It’s about being challenged (in a good way!) in
        your ways of thinking, to find creative and efficient solutions to
        complex problems, and being confident that the code your team produces
        will adhere to best practices. But above all, it’s an absolute blast.
        <br />
        <br />
        Ehsan possesses the ability to see the whole picture, which enables him
        to produce quality products – even if the brief is a bit fuzzy. He has
        an eagerness to share his expertise and has, on countless occasions,
        made both our team and our department better by doing so. He also has a
        keen eye for design, which has made my job as a designer so much easier.
        <br />
        <br />
        Replacing him in our team will be a struggle, and I do hope our
        professional paths cross again in the future.
        <br />
        To anyone who has the opportunity to work with him: I’m jealous,
      </>
    ),
  },
  {
    id: 3,
    name: "Timothy Alexis Vass",
    title: "System Developer at Bredband2",
    img: "/img/testimonial/timmy.jpg",
    short:
      "Ehsan is a good influence and will contribute. Since he is helpful, curious and kind, he will make an extra effort to participate and investigate an issue even if it isn't his primary responsibility.",
    desc: (
      <>
        Ehsan is intelligent, sociable, helpful and really good at what he does.
        We worked together in the front-end team when I started at Bredband2,
        before I changed to backend.
        <br />
        <br />
        Ehsan is a good influence and will contribute. Since he is helpful,
        curious and kind, he will make an extra effort to participate and
        investigate an issue even if it is not his primary responsibility.
        <br />
        <br />
        His cheerful attitude is very valuable since he will uplift others,
        which in combination with his professional qualities makes him a really
        great and dedicated colleague. We shared many lunches, laughs and
        interesting conversations together.
        <br />I definitely recommend Ehsan for these reasons!
      </>
    ),
  },
  {
    id: 4,
    name: "Fredrik Månsson",
    title: "System Developer at Bredband2",
    img: "/img/testimonial/fredrik.jpg",
    short:
      "He has a strong ability to quickly grasp the problems that need to be solved and utilize existing knowledge or gather new information to solve them. We've had many great moments discussing programming and problem-solving, most recently in a project involving React and NextJS.",
    desc: (
      <>
        Under vår tid som kolleger på Bredband2 har jag fått uppleva Ehsans
        kunskap i programmering och vilja att ligga i framkanten med ny teknik.
        <br />
        Jag har haft äran att jobba tillsammans med Ehsan i båda stora och små
        team och projekt. <br />
        Han har en bra förmåga att snabbt sätta sig in i problemen som skall
        lösas och använda befintlig eller samla nya kunskaper för att lösa
        dessa. Vi har haft många bra stunder där vi har diskuterat programmering
        och problemlösning, nu senast i ett projekt involverat React och NextJS.
        <br />
        <br />
        Sammanfattningsvis anser jag Ehsan som en mycket skicklig och motiverad
        programmerare. Hans tekniska expertis, engagemang för självförbättring
        och anmärkningsvärda lagarbete gör dem till en oumbärlig medlem i alla
        organisationer. Jag tvivlar inte på att Ehsan kommer att fortsätta att
        ge betydande bidrag och nå stora framgångar i sina framtida
        ansträngningar.
        <br />
        <br />
        Skulle inte tveka att ha Ehsan som kollega igen i framtiden
      </>
    ),
  },
  {
    id: 5,
    name: "Erfan Shirazi",
    title: "CIO at Bredband2",
    img: "/img/testimonial/erfan.jpg",
    short:
      "He is incredibly competent, knowledgeable, and learns quickly. He is highly regarded by his colleagues and contributes a lot when it comes to various issues related to web development and software engineering in general.",
    desc: (
      <>
        Ehsan jobbade som systemutvecklare hos oss på Bredband2 i 3 år, hos oss
        jobbade han mest med frontend utveckling inom React. Han är otrolig
        kompetent, kan mycket och lär sig snabbt. Väldigt omtyckt av sina
        kollegor och har mycket input att komma med när det gäller olika frågor
        runt webbutveckling och systemutveckling överlag.
        <br />
        <br />
        Jag kan rekommendera Ehsan till det mesta när det kommer till
        systemutveckling, både backend och frontend. Skulle det vara något han
        inte kan så kommer han lära sig snabbt.
        <br />
        <br />
        Och han är alltid välkommen tillbaka till oss på Bredband2 i framtiden!
      </>
    ),
  },
  {
    id: 6,
    name: "David Szmak",
    title: "Front End Developer at Guts & Glory",
    img: "/img/testimonial/david.jpg",
    short:
      "Few people have the opportunity to code to a Tech Lead Developer who is also a good coach and a great mentor—but I did when I worked with Ehsan.",
    desc: (
      <>
        Few people have the opportunity to code to a Tech Lead Developer who is
        also a good coach and a great mentor—but I did when I worked with Ehsan.
        <br />
        <br />
        I had the pleasure of working with Ehsan in my two interships at the
        Guts & Glory, we collaborated on many projects.
        <br />
        <br />
        I was particularly impressed by Ehsan´s ability to handle even the
        toughest projects effortlessly. That skill often takes years to develop
        among developers professionals, but it seemed to come perfectly
        naturally to him.
        <br />
        <br />
        And I still miss working with him!
        <br />
        <br />
        As a team member or a leader, Ehsan earns my highest recommendation.
      </>
    ),
  },
  {
    id: 6,
    name: "Klas Oskarsson",
    title: "Account Director",
    img: "/img/testimonial/klas.jpg",
    short:
      "As the project manager for the award-winning project TOOLPOOL, I have Ehsan to thank for its significant success.",
    desc: `Som projektledare för det Guldäggsbelönade projektet TOOLPOOL har jag Ehsan att tacka för att detta blev så pass framgångsrikt. Hela projektet baserades på en (vid det tillfället) ej tillgänglig funktion på Facebook. Ehsan lyckades inte bara skapa denna funktion och därmed säkra hela leveransen, utan var även högst delaktig i att utforma hela den tekniska aspekten av projektet. Hårt slit under stor tidspress och obefintlig budget var inget hinder för Ehsan. Tack!`,
  },
];

const TestimonialSingle: React.FC<{ item: TestimonialItem }> = ({ item }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <blockquote
      className={`shadow-lg hover:shadow-2xl w-full mx-auto rounded-lg hover:border-accent bg-base-200 transition text-base-content border border-base-300 p-3 font-light mb-2
    ${readMore ? " col-span-3 " : ""} `}
    >
      <div className="w-full flex mb-4 items-center">
        <div className="overflow-hidden rounded-full w-6 h-6 bg-base-200 border border-accent">
          <Image src={item.img} alt="" width={200} height={200} />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-sm uppercase ">{item.name}</h6>
        </div>
      </div>
      <div className="w-full">
        <p
          className={` mb-2 ${readMore ? "text-md" : "text-sm"}  leading-tight`}
        >
          <span className="text-lg leading-none italic font-bold mr-1">“</span>
          {readMore ? item.desc : item.short}

          <span className="text-lg leading-none italic font-bold ml-1">“</span>
        </p>
        <Button onClick={() => setReadMore((prev) => !prev)}>Read More</Button>
      </div>
    </blockquote>
  );
};

const Testimonial = () => {
  return (
    <div className="in-w-screen min-h-screen flex items-center justify-center py-5">
      <div className="w-full px-2 py-16 md:py-24">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <Heading size="xl" element="h2" padding="xl" center>
              What people <br />
              are saying.
            </Heading>
            <div className="text-center mb-4">
              <span className="inline-block w-1 h-1 rounded-full bg-accent ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-accent ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-accent"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-accent ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-accent ml-1"></span>
            </div>
          </div>

          <div className="">
            <Grid columns={3}>
              {testimonial_data.slice(0, 6).map((item) => (
                <TestimonialSingle item={item} key={item.id} />
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
