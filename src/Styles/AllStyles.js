import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  background-color: #1e252f;
  width: 28%;
  padding: 30px;
`;

export const StarImg = styled.img`
  background-color: #262f38;
  height: 1.4em;
  width: 1.4em;
  padding: 15px;
  border-radius: 50%;
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
`;

export const Span = styled.span`
  background-color: #262f38;
  padding: 17px 22px;
  border-radius: 50%;
  color: hsl(217, 12%, 63%);
  cursor: pointer;
`;

export const ButtonStyle = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: ".7em 0",
  width: "100%",
  backgroundColor: "hsl(25, 97%, 53%)",
  color: "#fff",
  fontSize: "1.1em",
  letterSpacing: "2px",
  marginTop: "25px",
  borderRadius: "25px",
  fontWeight: "500",
  "&:hover": {
    backgroundColor: "#fff",
    color: "hsl(25, 97%, 53%)",
  },
};

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
