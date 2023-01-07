import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;

  // Here the Card component is just for styles purpose
  // Inside the {props.children} other componenets are passed I guess
  // Which is ExpenseFilter, ExpenseChart, ExpenseList
};

export default Card;
