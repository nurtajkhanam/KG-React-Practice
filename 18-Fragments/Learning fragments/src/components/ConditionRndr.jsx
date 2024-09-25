import React from "react";

const ConditionRndr = ({ items }) => {
  return <>{items.length == 0 && <h4>i am hungry</h4>}</>;
};

export default ConditionRndr;
