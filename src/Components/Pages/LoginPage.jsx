import React from "react";

import { Page } from "../App/Layout/Page";
import Login from "../Login/Login";

const LoginPage = () => {
  return (
    <Page title="Login" description="The login page">
      <Login />
    </Page>
  );
};

export default LoginPage;
