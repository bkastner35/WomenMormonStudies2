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
  // Stores backend data in backen var
  const [backend, setBackendData] = useState([{}])

  useEffect (() => {
    // Fetches the data as an array of bytes and converts to strea
    fetch("http://localhost:3000/api").then((response) => {
      const body = response.body
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
      })
      
    }).then((stream) => {
      // Converts stream into string
      return new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
    }).then((result) => {
      // Parses string and conversts to data map object
      const dataMap = JSON.parse(result);
      setBackendData(dataMap)
    })
  }, [])

  console.log(backend.users)
  return (

    <div>

      {(typeof backend.users === 'undefined') ?
      (
        <p>Loading...</p>
      ):
      (
        <Router>
        <Fragment>
          <MainNavigation/>
          <Routes>
            <Route exact path='/' element={<Home/>}>
              {/* <Route exact path='/' element={<Home/>}/> */}
            </Route>
            <Route exact path='/search' element={<Search details={backend.users}/>}/>
            {/* <Route exact path='/login' element={<Login/>}/> */}
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/vision' element={<Vision/>}/>
    
          </Routes>
        </Fragment>
        <BottomNavigation> 1 2 3 4</BottomNavigation>
      </Router>
      )}
    </div>
  )


}

export default App;
