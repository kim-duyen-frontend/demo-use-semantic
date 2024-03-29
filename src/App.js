import React from "react";
import { Route, Switch } from "react-router-dom";
import ButtonPage from "./pages/button/ButtonPage";
import GridPage from "./pages/grid/GridPage";
import NavbarPage from "./pages/navbar/NavbarPage";
import PopUpPage from "./pages/popup/PopUpPage";
import RegisterPage from "./pages/register/RegisterPage";
import CalendarPage from "./pages/calendar/CalendarPage";
import TablePage from "./pages/table/TablePage";
import InputPage from "./pages/input/InputPage";
import FormPage from "./pages/form/FormPage";
import HomePage from "./pages/modal/HomePage";
import CheckboxPage from "./pages/checkbox/CheckboxPage";
import Demo from "./pages/checkbox-vs1";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/buttons" component={ButtonPage} />
        <Route path="/menu" component={NavbarPage} />
        <Route path="/grid" component={GridPage} />
        <Route path="/popup" component={PopUpPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/table" component={TablePage} />
        <Route path="/input" component={InputPage} />
        <Route path="/form" component={FormPage} />
        <Route path="/modal" component={HomePage} />
        <Route path="/checkbox" component={CheckboxPage} />
        <Route path="/checkboxs" component={Demo}/>
      </Switch>
    </>
  );
};

export default App;
