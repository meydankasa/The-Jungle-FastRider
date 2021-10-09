import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/context";
import { ReactComponent as ArrowIcon } from "../assets/svg/small-arrow-white.svg";
import Tittle from "../components/Tittle";
import moment from "moment";
import { IconStyles } from './../components/Info';

const ConfirmOrder = () => {
  const { confirmCode } = useContext(AppContext);
  const { ride, access_code } = confirmCode;
  const time = moment(ride.return_time).format("HH:mm");
  
  return (
    <ConformationContainer>
      <Tittle />
      <ConformationMessage />
      <div style={{ margin: "auto", maxWidth: 280 }}>
        <ArrowIcon style={IconStyles}/>
        <SuccessMessage>
          Thank you for using The Jungle FastRider ticket system - your access
          code is now ready!
        </SuccessMessage>

        <TicketDetailsContainer
          zoneColor={ride.zone.color}
        >
          <NameContinuer>
            <ZoneNameContainer>{ride.zone.name}</ZoneNameContainer>
            <RideNameContainer>{ride.name}</RideNameContainer>
          </NameContinuer>

          <FlexContainer>
            <h1>Return At</h1>
            <span>{time}</span>
          </FlexContainer>
          <FlexContainer>
            <h1>Use Accuses Code</h1>
            <span>{access_code}</span>
          </FlexContainer>
        </TicketDetailsContainer>
      </div>
      <ConformationMessage />
    </ConformationContainer>

  );
};

const ConformationContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const ConformationMessage = styled.div`
  display: flex;
  max-width: 280px;
  background-color: green;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  display: flex;
  max-width: 280px;
  align-self: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 345px;
  }
`;

const SuccessMessage = styled.div`
  @media (max-width: 768px) {
   padding:  0 30px;
  }
`;

const TicketDetailsContainer = styled.div`
  padding: 5px;
  display: flex;
  border-top: ${({ zoneColor }) =>
  zoneColor ? `5px solid ${zoneColor}` : "initial"};
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(101, 101, 101);
  cursor: pointer;
  margin: 20px;
  background: rgb(55, 55, 55);
`;

const NameContinuer = styled.span`
  display: flex;
  font-size: 12px;

`;

const RideNameContainer = styled.span`
  width: 100%;
  text-align: end;
  color: rgb(101, 101, 101);
  margin-right: 8px;
`;

const ZoneNameContainer = styled.span`
  color: white;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;

const FlexContainer = styled.div`
  h1 {
    font-size: 14px;
  }
  span {
    color: white;
    font-size: 25px;
    font-weight: bold;
  }
`;

export default ConfirmOrder;
