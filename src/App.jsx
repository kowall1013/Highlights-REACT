//extrenal
import { Switch, Route } from "react-router-dom";

//internal
import "./normalize.css";
import { Header } from "./components";
import { Home, Spanish } from "./pages";

//styles
import { Wrapper } from "./App.styles";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <>
          <Wrapper>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/spanish">
              <Spanish />
            </Route>
          </Wrapper>
        </>
      </Switch>
    </>
  );
}

export default App;
