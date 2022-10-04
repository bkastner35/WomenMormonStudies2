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

  async function getDataPromise() {
    // Want to wait for fetch request
  const response = await fetch("http://localhost:3000/api")
  async function getStreamFromBody(body) {
    const reader = await body.getReader();

    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        async function push() {
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
  }
    // Ready in request as a strea
    const stream = await (response.body);
    // Translate stream -> string -> map
    const result = await new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
    function getProfiles() {
      const dataMap = JSON.parse(result);
      // var profileDetails = dataMap["users"]
      // return profileDetails
      // Try to return as array instead
      return Object.values(dataMap);
    }
    return getProfiles()
  }
  // Get Map from promise
  function getValueFromPromise() {
    const dataPromise = Promise.resolve(getDataPromise())
    return dataPromise.then((data) => {
      return data[0]
    })
  }
  const valuesPromise = getValueFromPromise();
  valuesPromise.then((data) => {
    console.log(data)
        return (
      <Router>
      <Fragment>
        <MainNavigation/>
        <Routes>
          <Route exact path='/' element={<Home/>}>
            {/* <Route exact path='/' element={<Home/>}/> */}
          </Route>
          <Route exact path='/search' element={<Search details={data}/>}/>
          {/* <Route exact path='/login' element={<Login/>}/> */}
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/vision' element={<Vision/>}/>
  
        </Routes>
      </Fragment>
      <BottomNavigation> 1 2 3 4</BottomNavigation>
    </Router>
    );

  })

  




  // console.log('ProfileData:')
  // console.log(profileData[0]) // write a non retarded way of getting this
  // console.log(typeof(profileData))
  // console.log('InitialDetails')
  // console.log(initialDetails)
  // console.log(typeof(initialDetails))

  // Waitiing to fetch profile data
  // if (typeof(profileDetails) == 'undefined' || typeof(profileDetails) == 'object Promise' || typeof(profileDetails) == 'Promise') {
  //   return (

  //     <div>
  //       <p>Loading...</p>
  //     </div>
  //   )
  // }
  // Content had loaded
  // else {
  //   return (
  //     <Router>
  //     <Fragment>
  //       <MainNavigation/>
  //       <Routes>
  //         <Route exact path='/' element={<Home/>}>
  //           {/* <Route exact path='/' element={<Home/>}/> */}
  //         </Route>
  //         <Route exact path='/search' element={<Search details={initialDetails}/>}/>
  //         {/* <Route exact path='/login' element={<Login/>}/> */}
  //         <Route exact path='/register' element={<Register/>}/>
  //         <Route exact path='/vision' element={<Vision/>}/>
  
  //       </Routes>
  //     </Fragment>
  //     <BottomNavigation> 1 2 3 4</BottomNavigation>
  //   </Router>
  //   );
  // }

}

export default App;
