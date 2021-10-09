import { useEffect, useState } from "react";
import { getRides } from "../service/actions";
import styled from "styled-components";

import Tittle from "../components/Tittle";
import Info from '../components/Info'
import Search from "../components/search";
import RidesList from "../components/RidesList";

const HomePage = () => {
  const [ridesList, setRidesList] = useState(null);

  useEffect(() => {
    getRides().then((res) => {
      setRidesList(res);
    });
  }, []);


  return (
    <HomeContainer>
      <Tittle />
      <Info />
      <Search />
      <RidesList ridesList={ridesList} />
    </HomeContainer>
  );
};


const HomeContainer = styled.div``;

export default HomePage;