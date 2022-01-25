import "./App.css";
import Header from "./components/Header";
import Inputfield from "./components/Inputfield";
import Forgetpassword from "./components/Forgetpassword";
import Button from "./components/Button";
import Buttonapple from "./components/Buttonapple";
import Border from "./components/Border";

import Lasttext from "./components/Lasttext";
function App() {
  return (
    <>
      <Header
        name="Sign in"
        name2="Stay updated on your professional world"
      ></Header>
      <Inputfield
        type="email"
        placeholder="Email"
        styledin=" flex justify-center bg-white sm:shadow-xl  md:shadow-xl lg:shadow-xl  pb-4 w-96 max-w-lg mx-auto"
        styled="border-blue-500 border w-80 h-12 px-3 rounded-md text-black"
      ></Inputfield>
      <Inputfield
        type="password"
        placeholder="Enter Password"
        styledin=" flex justify-center  bg-white sm:shadow-xl  md:shadow-xl lg:shadow-xl   pb-2 w-96 max-w-lg mx-auto"
        styled="border-blue-500 border w-80  h-12 px-3 rounded-md text-black"
      ></Inputfield>
      <Forgetpassword forgetpassword="Forgot Password?"></Forgetpassword>
      <Button button=" Sign in "></Button>
      <Border />
      <Buttonapple button2="Sign in with Apple"></Buttonapple>
      <Lasttext name3=" New to LinkedIn?" name4=" Join now "></Lasttext>
    </>
  );
}

export default App;
