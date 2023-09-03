import React, { useState } from "react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import styles from "./Clients.module.css";
import Heading from "../Heading";

interface ClientsProps {
  clients: string[]; // Assuming clients is an array of strings
}

const Clients: React.FC<ClientsProps> = ({ clients }) => {
  const [showMore, setShowMore] = useState(false);
  const [clientsToShow, setClientsToShow] = useState(5);

  const handleShowMore = () => {
    setShowMore((show) => !show);
  };

  return (
    <Section>
      <div>
        <Heading size="xl" element="h2" padding="xl" center>
          Clients
        </Heading>
        <div
          className={`py-8 flex flex-wrap ${styles.clientsContainer} ${
            showMore ? styles.show : styles.hide
          }`}
        >
          {clients
            .slice(0, showMore ? clients.length : clientsToShow)
            .map((client) => {
              return (
                <div
                  key={client}
                  className="clipPath2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-1 mb-1"
                >
                  <div className="bg-base-200 py-4 text-center rounded-lg">
                    <span className="text-base-content">{client}</span>
                    <div className="corners top"></div>
                    <div className="corners bottom"></div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="mt-4 flex flex-col items-center justify-center">
          <Button onClick={handleShowMore}>
            {showMore ? "Show less" : "Show more"}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
