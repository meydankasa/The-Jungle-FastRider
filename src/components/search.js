import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { postTickets } from "../service/actions";
import { AppContext } from "../context/context";
import { ToastContainer, toast } from "react-toast";


function Search(props) {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const { selectedRide, setConfirmCode } = useContext(AppContext);
  const display = props.display;

  const submit = async () => {
    const result = await postTickets({
      pin: inputValue,
      ride_id: selectedRide.id,
    });

    if (result.error) {
      toast.error(result.error.message);
    } else {
      setConfirmCode(result);
      history.push("/confirm-order");
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="#PIN"
        name="pin"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button display={display} onClick={submit}>
        SUBMIT
      </Button>
      <ToastContainer delay={3000} position={'top-right'}/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-top: 1px solid grey;
  margin: 1rem 0;
  position: relative;
  @media (max-width: 480px) {
    display: block;
  }
`;

const Input = styled.input`
  text-align: left;
  color: black;
  padding: 10px 10px;
  width: 77%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: #4c4c4b;
  width: 23%;
  color: white;
  border: none;
  &:hover {
    background-color: #606060;
  }
  @media (max-width: 480px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 24px;
    padding: 15px;
  }
`;

export default Search;
