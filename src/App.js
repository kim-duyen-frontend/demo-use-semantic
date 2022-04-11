import React from "react";
import { Route, Switch } from "react-router-dom";
import ButtonPage from "./pages/button/ButtonPage";
import GridPage from "./pages/grid/GridPage";
import NavbarPage from "./pages/navbar/NavbarPage";
import PopUpPage from "./pages/popup/PopUpPage";
import RegisterPage from "./pages/register/RegisterPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/buttons" component={ButtonPage} />
        <Route path="/menu" component={NavbarPage} />
        <Route path="/grid" component={GridPage}/>
        <Route path="/popup" component={PopUpPage}/>
      </Switch>
    </div>
  );
};

export default App;
