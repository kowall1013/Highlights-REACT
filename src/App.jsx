import { Provider } from "react-redux";

import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <h1>Mateusz</h1>
    </Provider>
  );
}

export default App;
