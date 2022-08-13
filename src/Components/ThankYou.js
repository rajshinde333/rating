import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  Heading,
  Paragraph,
  RatingTitle,
  RatingTitleContainer,
  ThankImg,
} from "../Styles/AllStyles";

function ThankYou() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <Card
      style={{
        textAlign: "center",
      }}
    >
      <ThankImg src="/images/illustration-thank-you.svg" />
      <RatingTitleContainer>
        <RatingTitle>You selected {data.rating} out of 5</RatingTitle>
      </RatingTitleContainer>
      <Heading>Thank you!</Heading>
      <Paragraph>
        We appreciated you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </Paragraph>
    </Card>
  );
}

export default ThankYou;
