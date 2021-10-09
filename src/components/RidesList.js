import Ride from "./Ride";
import styled from "styled-components";

const RidesList = ({ ridesList, update }) => {
  return (
    <RidesListContainer>
      {ridesList !== null &&
        ridesList.length &&
        ridesList.map((ride) => (
          <Ride update={update} key={ride.id} ride={ride} />
        ))}
    </RidesListContainer>
  );
};



const RidesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default RidesList;
