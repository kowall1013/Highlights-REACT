import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Spanish } from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/spanish">
          <Spanish />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
