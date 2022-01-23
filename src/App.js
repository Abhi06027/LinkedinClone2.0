import "./App.css";
import Header from "./components/Header";
import Inputfield from "./components/Inputfield";
import Forgetpassword from "./components/Forgetpassword";
import Button from "./components/Button";
import Buttonapple from "./components/Buttonapple";
import Border from "./components/Border";

function App() {
  return (
    <>
      <Header
        name="Sign in"
        name2="Stay updated on your professional world"
      ></Header>
      <Inputfield type="email" placeholder="Email"></Inputfield>
      <Inputfield type="password" placeholder="Enter Password"></Inputfield>
      <Forgetpassword forgetpassword="Forgot Password?"></Forgetpassword>
      <Button button=" Sign in "></Button>
      <Border />
      <Buttonapple button2="Sign in with Apple"></Buttonapple>
    </>
  );
}

export default App;
