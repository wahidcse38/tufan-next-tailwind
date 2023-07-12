import React from "react";
import SectionTitleAndHeading from "../common/SectionTitleAndHeading";
import Partner from "../common/Partner";

import p1 from "../../assets/img/p1.svg";
import p2 from "../../assets/img/p2.svg";
import p3 from "../../assets/img/p3.svg";
import p4 from "../../assets/img/p4.svg";
import p5 from "../../assets/img/p5.svg";

function Partners() {
  return (
    <div className="container ">
      <div className="mt-24">
        <SectionTitleAndHeading
          title="Our Partners"
          heading="These partnerships allow us to leverage our strengths, resources, and expertise to achieve our shared goals and create a greater impact."
        />
        <div className="flex flex-col gap-14 mt-28">
          <Partner
            img={p1}
            title="UNICEF"
            description="We are honored to partner with UNICEF, a leading organization dedicated to promoting the rights and well-being of children around the world. Together, we work to provide lifesaving assistance and support to vulnerable children and families in crisis. "
          />
          <Partner
            img={p2}
            title="SAVE THE CHILDREN"
            description="Addressing the unique needs of children in crisis situations, including providing life-saving support during emergencies and creating sustainable solutions for long-term development."
          />
          <Partner
            img={p3}
            title="GOVERNMENT OF THE PEOPLE’S REPUBLIC OF BANGLADESH"
            description="We are grateful for the government's collaboration and support in our shared mission to improve the lives of all Bangladeshis as an essential ally in our efforts to address the challenges facing the country."
          />
          <Partner
            img={p4}
            title="CARE BANGLADESH"
            description="Together, we focus on providing emergency response and long-term development programs that address the root causes of poverty and promote sustainable solutions."
          />
          <Partner
            img={p5}
            title="BRAC BANGLADESH"
            description="A global leader in creating opportunities for the most marginalized communities,  we work together to provide essential services and support to those in need, including education, healthcare, and economic empowerment."
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
