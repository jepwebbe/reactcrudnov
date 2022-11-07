import React from "react";
import { NavLink } from "react-router-dom";
import { Page } from "../App/Layout/Page";
import { useFlashMessageStore2 } from "../FlashMessages/Flash2/useFlashMessageStore2";
import { useModalStore } from "../Modal/useModalStore";
import "./hjem.scss";
import Login from "./Login/Login";

export const Hjem = () => {
  const { setModalPayload } = useModalStore();
  const  {setFlashMessage } = useFlashMessageStore2();
  return (
    <Page title="Big web">
      <h1>A page full of web</h1>
      <NavLink to="goals">Verdensmåls-API</NavLink>
      <button onClick={() => setModalPayload("jeg er en tekstmodal")}>
        Modal med tekst
      </button>
      <button onClick={() => setModalPayload(<Login />)}>Login</button>
      <button onClick={() => setFlashMessage("Ild i piben")}>Flash me mofo</button>
    </Page>
  );
};
