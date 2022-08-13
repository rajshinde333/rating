import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  background-color: #1e252f;
  width: 28%;
  border-radius: 30px;
  padding: 30px;
  @media (max-width: 480px) {
    width: 70%;
    font-size: 15px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 45%;
    font-size: 15px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 35%;
    font-size: 15px;
  }
`;

export const StarImg = styled.img`
  background-color: #262f38;
  height: 1.4em;
  width: 1.4em;
  padding: 15px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const ThankImg = styled.img`
  height: 7em;
  width: 10.5em;
  padding: 15px;
  margin-bottom: 10px;
`;

export const Heading = styled.h2`
  font-color: #fff;
  font-size: 2em;
  letter-spacing: 2px;
  margin-bottom: -6px;
`;

export const Paragraph = styled.p`
  color: hsl(217, 12%, 63%);
  line-height: 27px;
  font-weight: 500;
`;

export const RatingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`;

export const Span = styled.button`
  background-color: #262f38;
  // padding: 17px 22px;
  padding: 1.1em 1.5em;
  border-radius: 50%;
  border: none;
  color: hsl(217, 12%, 63%);
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 0.8em 1.2em;
  }

  &:nth-child(1) {
    &:hover,
    &:focus {
      color: #000;
      background-color: hsl(217, 12%, 63%);
    }
  }

  &:nth-child(2) {
    &:hover,
    &:focus {
      color: #000;
      background-color: hsl(218, 19%, 75%);
    }
  }

  &:nth-child(3) {
    &:hover,
    &:focus {
      color: #000;
      background-color: hsl(214, 21%, 87%);
    }
  }

  &:nth-child(4) {
    &:hover,
    &:focus {
      color: #000;
      background-color: #fff;
    }
  }

  &:hover,
  &:focus {
    color: #fff;
    background-color: hsl(25, 97%, 53%);
  }
`;

export const Linke = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(25, 97%, 53%);
  color: #fff;
  padding: 0.7em 0;
  border-radius: 25px;
  font-size: 1.1em;
  letter-spacing: 2px;
  margin-top: 25px;
  &:hover {
    color: hsl(25, 97%, 53%);
    background-color: #fff;
  }
`;

export const RatingTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -10px;
`;

export const RatingTitle = styled.p`
  color: hsl(25, 97%, 53%);
  background-color: #262f38;
  font-size: 0.9em;
  width: 50%;
  padding: 5px;
  border-radius: 30px;
  @media (max-width: 480px) {
    width: 70%;
  }
`;
