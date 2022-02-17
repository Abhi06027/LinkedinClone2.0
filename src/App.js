import "./App.css";
import Headername from "./components/Headername";
import Linkdinimg from "./components/Linkdinimg";
import Joinnow from "./components/Joinnow";
import Inputype from "./components/Inputype";
import Button1 from "./components/Button1";
import Buttonapple from "./components/Buttonapple";
import Border from "./components/Border.js";
import Forgetpassword from "./components/Forgetpassword";

function App() {
  return (
    <>
      <Linkdinimg
        imgstyle="w-28 pt-8 ml-16 hidden sm:flex md:flex lg:flex"
        imgsrc="./images/li.png"
      ></Linkdinimg>
      <div className="max-w-[400px] mx-auto bg-white sm:shadow-md md:shadow-md   lg:shadow-md  px-8 lg:mt-36">
        <Headername
          imgstyle="w-28 flex sm:hidden md:hidden lg:hidden"
          name="Sign in"
          namestyle="text-black text-3xl font-semibold "
          namestyle2="text-black text-sm pb-2 pt-1"
          name2="Stay updated on your professional world"
          imgsrc="./images/li.png"
        ></Headername>

        <Inputype type="Email" placeholder="Enter Email"></Inputype>
        <Inputype type="password" placeholder="Enter Password"></Inputype>

        <Forgetpassword
          forgetpassword="Forgot Password?"
          forgetstyle="text-blue-500 font-bold hover:bg-blue-300 hover:underline text-center  text-sm  cursor-pointer py-1  w-36 rounded-full"
        ></Forgetpassword>

        <Button1
          button=" Sign in  "
          buttonstyle=" bg-blue-700 rounded-full text-center w-80  hover:bg-blue-900 text-white py-3 mx-2 "
          link="https://www.linkedin.com/in/abhinav-gupta-03403a184/"
        ></Button1>
        <Border />

        <Buttonapple
          button2="Sign in with Apple"
          applebuttonstyle="flex items-center justify-center w-80 bg-white
          rounded-full cursor-pointer border-gray-400 hover:border-black
          border-2 hover:bg-gray-100 text-black mx-2 py-3"
          imgsrc="./images/apple.png"
          imgstyle="w-6 mx-2"
          link="https://www.instagram.com/abhinavdesigns1/"
        ></Buttonapple>
      </div>

      <Joinnow
        name3="New to LinkedIn?"
        name3style="text-black text-lg"
        name4="Join now "
        name4style2="text-lg px-2 text-blue-500 font-bold hover:bg-blue-300 rounded-full hover:underline"
      ></Joinnow>
    </>
  );
}
export default App;
