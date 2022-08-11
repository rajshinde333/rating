import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  Heading,
  Paragraph,
  RatingDiv,
  Span,
  StarImg,
  Linke,
} from "../Styles/AllStyles";

function Rating() {
  const arr = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState();
  console.log(rating);
  return (
    <Card>
      <StarImg src="/images/icon-star.svg" />
      <Heading>How did we do?</Heading>
      <Paragraph>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Paragraph>
      <RatingDiv>
        {arr.map((e) => (
          <Span key={e} onClick={() => setRating(e)}>
            {e}
          </Span>
        ))}
        {/* <Span>1</Span>
        <Span>2</Span>
        <Span>3</Span>
        <Span>4</Span>
        <Span>5</Span> */}
      </RatingDiv>
      <Linke
        to={{
          pathname: `thankyou/${rating}`,
        }}
        state={{
          index: { rrate: rating },
        }}
      >
        {/* <Linke
        to={{
          pathname: "/thankyou",
          state: { rating: rating },
        }}
      > */}
        <span>SUBMIT</span>
      </Linke>
    </Card>
  );
}

export default Rating;
