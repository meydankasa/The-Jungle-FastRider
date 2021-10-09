import React from "react";
import styled from "styled-components";

import { ReactComponent as ClockIcon } from "../assets/svg/clock.svg";
import { ReactComponent as TicketIcon } from "../assets/svg/ticket.svg";
import { ReactComponent as ArrowIcon } from "../assets/svg/big-arrow.svg";

class Info extends React.Component {
  render() {
    return (
      <Container>
        <CardInfoContainer>
          <CardInfo>
            <TicketIcon style={IconStyles}/>
            <div>
              Enter your park ticket #PIN number, then select the desired ride
              while noting the stated return time
            </div>
          </CardInfo>

          <CardInfo>
            <ArrowIcon style={IconStyles}/>
            <div>Press 'submit' to confirm and retrieve your access</div>
          </CardInfo>

          <CardInfo>
            <ClockIcon style={IconStyles}/>
            <div>
              When the time comes, use the special FastRider Line to cut out a
              considerable wait time
            </div>
          </CardInfo>
        </CardInfoContainer>
      </Container>
    );
  }
}

const Container = styled.div``;
const CardInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  text-align: center;
`;

const CardInfo = styled.div`
  width: 30%;
  margin: 10px 0;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 33px;
  }
`;

export const IconStyles = {
    backgroundColor: '#373737',
    borderRadius: '50%',
    marginBottom: '15px',
    height: '45px',
    width: '45px',
  }

export default Info;