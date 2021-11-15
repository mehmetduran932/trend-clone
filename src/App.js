import "./App.css";
import ProductBox from "./components/ProductBox";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import MainBox from "./components/MainBox";
import CartDetail from "./components/CartDetail";
import Header from "./components/Header";
import { Flex, Box } from "@chakra-ui/react";
import NaviBox from "./components/NaviBox";

function App() {
  return (
    <div>
      <Header />
      <NaviBox/>
      <Flex color="white">
        <Box flex="1">
          
        </Box>
        <Box flex="1">
          <Switch>
            <Route path="/" exact component={ProductBox}></Route>
            <Route path="/productdetail/:id" exact component={MainBox}></Route>
            <Route path="/cartdetail" exact component={CartDetail}></Route>
            <Route exact component={NotFound}></Route>
          </Switch>
        </Box>

        <Box flex="1"></Box>
      </Flex>
    </div>
  );
}

export default App;
