import { BottomNavigation } from "@mui/material";
import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainNavigation from "./componenet/MainNav.js";
import Search from "./componenet/Search.js";
import initialDetails from "./data/initialDetails.js";
import Home from "./pages/Home";
import Register from "./pages/Register.js";
import Vision from "./pages/Vision.js";

function App() {
  return (
    <Router>
    <Fragment>
      <MainNavigation/>
      <Routes>
        <Route exact path='/' element={<Home/>}>
          {/* <Route exact path='/' element={<Home/>}/> */}
        </Route>
        <Route exact path='/search' element={<Search details={initialDetails}/>}/>
        {/* <Route exact path='/login' element={<Login/>}/> */}
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/vision' element={<Vision/>}/>

      </Routes>
    </Fragment>
    <BottomNavigation> 1 2 3 4</BottomNavigation>
  </Router>

  
  );
}

export default App;
