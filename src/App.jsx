import List from "./components/List.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Appoiment from "./components/Appoiment.jsx";
import Contactlist from "./components/Contacrlist.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Doctors from "./Component2/Doctors.jsx";
 
import PatientlistProvider from "./Store/Patientlist.jsx";
 
import { useState } from "react";

function App() {
  const [select, setselect] = useState("Home");
  const [Took,setTook]=useState(false)

  return (
    <div class= "main1">
    <PatientlistProvider >
      <div className="App-container">
        <Sidebar select={select} setselect={setselect} />

        <div className="main-content">
          <Header Took={Took} setTook={setTook} setselect={setselect}/>
            {Took=== true ? <Doctors/>:null }
      {select === "Home" ? <List /> : <Appoiment select={select} setselect={setselect}/>}
     
        
        </div>
       
      </div>
    </PatientlistProvider>
    </div>
  );
}

export default App;
