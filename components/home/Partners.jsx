import Image from "next/image";
import React from "react";
import p1 from "../../assets/img/p1.svg";
import p2 from "../../assets/img/p2.svg";
import p3 from "../../assets/img/p3.svg";
import p4 from "../../assets/img/p4.svg";
import p5 from "../../assets/img/p5.svg";

const Partners = () => {
  return (
    <section className="container">
      <div className="mt-24">
        <div className="flex flex-wrap gap-12 py-11 justify-center bg-brightGray">
          <Image src={p1} alt="partners" />
          <Image src={p2} alt="partners" />
          <Image src={p3} alt="partners" />
          <Image src={p4} alt="partners" />
          <Image src={p5} alt="partners" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
