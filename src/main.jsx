/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

export const AppContext = createContext(null);

const Provider = ({ children }) => {
  const [direction, setDirection] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(56);
  const [indicatorWidth, setIndicatorWidth] = useState(114.662);

  const value = {
    direction: { direction, setDirection },
    indicator: {
      width: { indicatorWidth, setIndicatorWidth },
      position: { indicatorPosition, setIndicatorPosition },
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
