import React, {useContext} from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import "./App.css";
import AuthContext from "./store/auth-context.jsx";


function App() {
  const context = useContext(AuthContext);

  return (
      <>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login  />}
        {context.isLoggedIn && <Home  />}
      </main>
      </>
  );
}

export default App;
