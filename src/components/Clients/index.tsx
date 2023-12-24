import React, { useState } from "react";
import Section from "@/components/Section";
import Heading from "../Heading";

interface ClientsProps {
  clients: string[]; // Assuming clients is an array of strings
}

const Clients: React.FC<ClientsProps> = ({ clients }) => {
  return (
    <Section>
      <div>
        <Heading size="l" element="h2" padding="xl" center>
          Clients
        </Heading>

        <div className="relative m-auto  overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-gb4 before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-gaf after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(250px*10)]">
            {clients.map((logo, index) => (
              <div
                className="slide flex  items-center justify-center m-3 whitespace-nowrap "
                key={index}
              >
                {logo}
              </div>
            ))}
            {clients.map((logo, index) => (
              <div
                className="slide flex  items-center justify-center m-3 whitespace-nowrap"
                key={index}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
