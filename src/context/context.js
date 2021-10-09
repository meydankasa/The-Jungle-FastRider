import React, { createContext, useState } from "react";
export const AppContext = createContext();

const { Provider } = AppContext;

export const AppProvider = (props) => {
  const [selectedRide, setSelectedRide] = useState({});
  const [confirmCode, setConfirmCode] = useState(null);

  return (
    <Provider value={{ selectedRide, setSelectedRide, confirmCode, setConfirmCode }}>
      {props.children}
    </Provider>
  );
};
