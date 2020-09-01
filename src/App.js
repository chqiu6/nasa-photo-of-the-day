import React from "react";
import "./App.css";
import NasaData from "./Components/NasaData";
import {Card, Nav, Navbar, NavItem, NavLink, Alert} from "reactstrap";

function App() {
  // useEffect(() => {
  //   axios
  //   .get("https://api.nasa.gov/planetary/apod?api_key=rDLuS1OxbD26VJPygpmoRhTKPA0l6bb4sIHGGQJi&date=2020-08-08")
  //   //api data : date,explanation,hdurl,media_type,service_verison,title,url
  //   .then(res =>{ 
  //     console.log("res data :", res);
  //   })
  //   .catch(err => { 
  //     console.log("err msg : ", err);
  //   });
  // })
  return (
    <div className="App">
      {/* <div className = "nav"> */}
        <Navbar color = "dark" >
        <Nav>
        <NavLink href = "https://api.nasa.gov/">Nasa API</NavLink>
        </Nav>
        </Navbar>
        {/* </div> */}
      <NasaData />
    </div>
  );
}

export default App;
