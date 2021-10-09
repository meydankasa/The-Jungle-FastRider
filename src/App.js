import styled from "styled-components";
import HomePage from "./pages/HomePage";
import ConfirmOrder from "./pages/ConfirmOrder";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./pages/protectedRoute";


const App = () => {
    return (
    <Container>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <ProtectedRoute exact path={"/confirm-order"} Component={ConfirmOrder}/>
      </Switch>
    </Container>
  );
}

const Container = styled.div`
  width: 640px;
  margin: 0 auto;
  padding-bottom: 10px;
  @media (max-width: 720px) {
   width: 95%;
   padding-bottom: 30px;

  }
`;
  
 export default App;