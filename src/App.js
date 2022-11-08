import { Router } from "./Components/App/Router/Router";
import NavBar from "./Components/Partials/NavBar";
import { Main } from './Components/Partials/Main';

import "./Assets/app.scss"
import FlashMessages from "./Components/FlashMessages/FlashMessages";

const App = () => {
  return (
    <>
      <NavBar />
      <Main>
        <FlashMessages />
        <Router />
      </Main>
    </>
  )
}

export default App;
