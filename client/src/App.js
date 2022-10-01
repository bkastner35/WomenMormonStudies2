import { BottomNavigation } from "@mui/material";
import React, {useEffect, useState, Fragment} from "react";
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

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:3000/api").then(
    response => response.json
    ).then(
      data => {
        setBackendData(data)
        console.log('tried to fetch')
      }
    )
  }, [])


  // useEffect()
  // fetch("http://localhost:3000/api").then(
  //   response => console.log(response)
  // )



/* <div>

{(typeof backendData.users === 'undefined') ? (
  <p>Loading...</p>
): (
  backendData.user.map((user, i) => (
    <p key={i}> {user}</p>
  ))
)}


</div> */

return 
 (
  <div>

{(typeof backendData.users === 'undefined') ? (
  <p>Loading...</p>
): (
  backendData.user.map((user, i) => (
    <p key={i}> {user}</p>
  ))
)}


</div>
 )



  // return (
    
  //   <Router>
  //   <Fragment>
  //     <MainNavigation/>
  //     <Routes>
  //       <Route exact path='/' element={<Home/>}>
  //         {/* <Route exact path='/' element={<Home/>}/> */}
  //       </Route>
  //       <Route exact path='/search' element={<Search details={initialDetails}/>}/>
  //       {/* <Route exact path='/login' element={<Login/>}/> */}
  //       <Route exact path='/register' element={<Register/>}/>
  //       <Route exact path='/vision' element={<Vision/>}/>

  //     </Routes>
  //   </Fragment>
  //   <BottomNavigation> 1 2 3 4</BottomNavigation>
  // </Router>

  
  // );
}

export default App;
