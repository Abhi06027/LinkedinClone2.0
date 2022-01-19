import "./App.css";

import Textfield from "./components/Textfield";
import Headingtext from "./components/Headingtext";


function App() {
  return (
    <>
      <Headingtext heading="  Sign in  " />
      
      <Headingtext heading="  Stay updated on your professional world  " /> 
      <Textfield />
       <div>
        <input className=" btn mx-4 my-2  " type="Name" placeholder=" ABHINAV" /></div>
        <div>
        <input className=" btn  mx-4 my-2 " type="Email" placeholder=" EMAIL  " /></div>
        <div>
        <input className=" btn  mx-4 my-2  " type="Password" placeholder=" Password  " />
        </div>
      

      
    </>
  );
}

export default App;
