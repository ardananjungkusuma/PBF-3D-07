import React from "react";
import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import configureStore from "./redux/configureStore";
import Root from "./Root";
import "./App.css";

export const AuthContext = React.createContext(null);

const store = configureStore();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <Provider store={store}>
        <Router>
          <Root />
        </Router>
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
