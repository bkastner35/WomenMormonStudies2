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


async function App() {

  // Want to wait for fetch request
  const response = await fetch("http://localhost:3000/api")
  async function getStreamFromBody(body) {
    const reader = body.getReader();

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
  async function getProfiles() {
    const dataMap = JSON.parse(result);
    var profileDetails = dataMap["users"]
    return profileDetails
  }
  // Profile data hold array of profile JSON objects
  let profileData = await getProfiles();

  console.log('ProfileData:')
  console.log(profileData)
  console.log(typeof(profileData))
  console.log('InitialDetails')
  console.log(initialDetails)

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
