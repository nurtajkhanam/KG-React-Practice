import React from "react";

const Dataprops = (props) => {
  let { food } = props;
  return (
    <div>
      <li className="list-group-item">{food}</li>
    </div>
  );
};

export default Dataprops;
