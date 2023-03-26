import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Registration from './Components/Registration';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Modifier from './Components/Modifier';


const router = createBrowserRouter([
  {
    path: "/Registration",
    element: 
    
        <div className="App">
         <div className="container">
          <Sidebar/> 
          <div className="margin">
          <Registration/>
          </div>
         </div>
        </div>
 },
 
 {
 path: "/Modifier_employee",
 element: 
 
     <div className="App">
      <div className="container">
       <Sidebar/> 
       <div className="margin">
       <Modifier/>
       </div>
      </div>
     </div>

},


]);



function App() {

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

// return (
  //  <div className="App">
    //  <div className="container">
      //    <Sidebar/> 
        //  <div className="margin">
          //<FormInput/>
       //   </div>
     //  </div>
   // </div>
 // ); 
}

export default App;
