import React from "react";

function DateTime() {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h3 className="heading">date</h3>
        <p className="paragraph">24th May, 2023</p>
      </div>
      <div>
        <h3 className="heading">TIME</h3>
        <p className="paragraph">5:00 PM to 8:00 PM</p>
      </div>
      <div>
        <h3 className="heading">LOCATION</h3>
        <p className="paragraph">Dhaka, Bangladesh</p>
      </div>
    </div>
  );
}

export default DateTime;
