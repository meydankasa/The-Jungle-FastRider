import React from "react";
import styled from "styled-components";

class Tittle extends React.Component {
  render() {
    return (
      <TitleContentContainer>
        The Jungle&trade; FastRider Service
      </TitleContentContainer>
    );
  }
}

const TitleContentContainer = styled.div`
  display: flex;
  color: white;
  margin: 50px auto;
  font-size: 28px;
  flex-basis: 100px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: bold;
    margin: 30px auto;
  }
`;

export default Tittle;
