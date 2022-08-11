import React from "react";
import { useLocation } from "react-router-dom";

function ThankYou() {
  const location = useLocation();
  const { rating } = location.state;
  return <div>ThankYou {rating}</div>;
}

export default ThankYou;
