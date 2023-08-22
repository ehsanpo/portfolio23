import { useState } from "react";
import Section from "@/components/Section";
import Button from "@/components//Button";
import styles from "./Clients.module.css"; // Import your CSS module

export default function Clients({ clients }: HomeProps) {
  const [showMore, setShowMore] = useState(false);
  const [clientsToShow, setClientsToShow] = useState(6);

  const handleShowMore = () => {
    console.log(showMore);
    setShowMore((show) => !show);
  };

  return (
    <Section>
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
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 mb-4"
              >
                <div className="bg-gray-200 p-4 rounded-lg">
                  <span className="text-gray-800">{client}</span>
                  <div class="corners top"></div>
                  <div class="corners bottom"></div>
                </div>
              </div>
            );
          })}
      </div>
      <Button onClick={handleShowMore}>
        {showMore ? "Show less" : "Show more"}
      </Button>
    </Section>
  );
}
