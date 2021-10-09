import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/context";
import { ReactComponent as ClockIcon } from "../assets/svg/clock.svg";
import { ReactComponent as TicketIcon } from "../assets/svg/ticket.svg";
import moment from "moment";


const Ride = ({ ride }) => {
  const { selectedRide, setSelectedRide } = useContext(AppContext);
  const { name, remaining_tickets, zone } = ride;
  const time = moment(ride.return_time).format("HH:mm");

  const onClickHandler = () => {
    setSelectedRide(ride);
  };

  return (
    <RideContentContainer
      onClick={onClickHandler}
      zoneColor={zone.color}
      background={selectedRide.id === ride.id ? zone.color : " rgb(55, 55, 55)"}
    >
      <RideNameContainer>{name}</RideNameContainer>
      <ZoneNameContainer>{zone.name}</ZoneNameContainer>
      <TicketAndClockFlex>
        <Flex>
          <ClockIcon width="20px" height="20px" />
          <span>{time}</span>
        </Flex>
        <Flex>
          <TicketIcon width="20px" height="20px" />
          <span>{remaining_tickets}</span>
        </Flex>
      </TicketAndClockFlex>
    </RideContentContainer>
  );
};

const RideContentContainer = styled.div`
  aspect-ratio: 1;
  padding: 5px;
  color: white;
  display: flex;
  border-top: ${({ zoneColor }) =>
  zoneColor ? `5px solid ${zoneColor}` : "initial"};
  background: ${({ background }) => background};
  transition: background 0.5s ease;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
`;

const RideNameContainer = styled.span`
  font-size: 16px;
  color: rgb(101, 101, 101);
  text-align: right;
  font-weight: bold;
`;

const ZoneNameContainer = styled.span`
  color: white;
  font-size: 25px;
  text-align: center;
  flex-direction: column;
`;

const TicketAndClockFlex = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  flex-direction: row;
  /* &:first-child {
    display: flex !important;
  }
  :first-child {
    display: flex !important;
    background-color: yellow;
  } */
`;

const Flex = styled.div`
  display: flex;
`;

export default Ride;
