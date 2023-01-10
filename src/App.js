import { Router } from "./Components/App/Router/Router";
import NavBar from "./Components/Partials/NavBar";
import { Main } from './Components/Partials/Main';

import "./Assets/app.scss"
import FlashMessages from "./Components/FlashMessages/FlashMessages";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/Global";
const theme = {
  background: "beige",
  onBackground: "brown",
  devMode: true 
}
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <Main>
          <FlashMessages />
          <Router />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default App;
