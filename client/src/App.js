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

let profileData = [];
function App() {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("http://localhost:3000/api").then(
  //   response => response.json
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //       console.log('tried to fetch')
  //     }
  //   )
  // }, [])


  // useEffect()
  // fetch("http://localhost:3000/api").then(
  //   response => console.log(response.body)
  // )
  fetch("http://localhost:3000/api")
  .then((response) => response.body)
  .then((rb) => {
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then(({ done, value }) => {
            // If there is no more data to read
            if (done) {
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value);
            push();
          });
        }

        push();
      },
    });
  })
  .then((stream) =>
    // Respond with our stream
    new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
  )
  .then((result) => {
    // Do things with result
    
    function getProfiles() {
      const dataMap = JSON.parse(result);
      var profileDetails = dataMap["users"]
      return profileDetails
    }

    return getProfiles()
  }).then((profileArray) => {
    
    profileData = profileArray;
    console.log("GOT HERE");
    console.log(profileData);
}
  )




/* <div>

{(typeof backendData.users === 'undefined') ? (
  <p>Loading...</p>
): (
  backendData.user.map((user, i) => (
    <p key={i}> {user}</p>
  ))
)}


</div> */

// return 
//  (
//   <div>

// {(typeof backendData.users === 'undefined') ? (
//   <p>Loading...</p>
// ): (
//   backendData.user.map((user, i) => (
//     <p key={i}> {user}</p>
//   ))
// )}


// </div>
//  )
console.log('Before Return')
console.log(profileData)
return (
  <Router>
  <Fragment>
    <MainNavigation/>
    <Routes>
      <Route exact path='/' element={<Home/>}>
        {/* <Route exact path='/' element={<Home/>}/> */}
      </Route>
      <Route exact path='/search' element={<Search details={profileData}/>}/>
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
