import { Switch, Route } from "react-router-dom";

import "./normalize.css";
import { Header } from "./components";
import { Home, Spanish } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/spanish">
          <Spanish />
        </Route>
      </Switch>
    </>
  );
}

export default App;
