import Image from "next/image";
import React from "react";
import food_safety_authority from "../../assets/img/food_safety_authority.png";
import tourism_board from "../../assets/img/tourism_board.png";

function Sponsors() {
  return (
    <div className="container">
      <div className="mt-24">
        <h3 className="heading mb-2.5">SPONSORS</h3>
        <p className="paragraph">Bangladesh Tourism Board</p>
        <p className="paragraph">Bangladesh Food Safety Authority</p>
        <div className="flex justify-start items-center gap-5 mt-2.5">
          <Image
            src={food_safety_authority}
            alt="img"
            width={150}
            height={200}
            className="object-contain"
          />
          <Image
            src={tourism_board}
            alt="img"
            width={150}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
