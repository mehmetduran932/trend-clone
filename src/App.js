import "./App.css";
import ProductBox from "./components/ProductBox";
import {Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import MainBox from "./components/MainBox";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ProductBox}></Route>
      <Route path="/productdetail/:id" exact component={MainBox}></Route>
      <Route exact component={NotFound}></Route>
    </Switch>
  );
}

export default App;
