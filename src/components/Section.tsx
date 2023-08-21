



import React from "react";
import Image from "next/image";
import Link from "next/link";



const Section = ({ children }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
     {children}
    </section> 
  );
};

export default Section;
