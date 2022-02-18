import InputField from "../widgets/InputField";
import Divider from "../widgets/Divider";
import ButtonRaised from "../widgets/ButtonRaised";
import TextLink from "../widgets/TextLink";

function Login() {
  return (
    <>
      <div className="w-full mx-auto bg-white px-4 py-4 flex flex-col space-y-5 sm:w-96 sm:shadow-md lg:w-[512px]">
        <InputField placeholder="Enter Email" />
        <InputField type="password" placeholder="Enter Password" />
        <div className="inline-block">
          <TextLink>{"Forgot Password?"}</TextLink>
        </div>
        <div className="w-full mx-auto">
          <ButtonRaised type="submit">{"Submit"}</ButtonRaised>
        </div>

        <div className="h-2 flex flow-row items-center">
          <Divider />
          <div className="px-3">{"or"}</div>
          <Divider />
        </div>
        <div className="mx-auto">
          <TextLink>{"Join now"}</TextLink>
        </div>
      </div>
    </>
  );
}
export default Login;
