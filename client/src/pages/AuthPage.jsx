// AuthPage.jsx
import React from "react";
import Logo from "../components/Logo";
import Forms from "../components/Forms";
import SignUpForms from "../components/SignUpForms";

const AuthPage = () => {
  const [render, setRender] = React.useState(true);
  return (
    <div>
      {render ? (
        <SignIn setRender={setRender} />
      ) : (
        <Signup setRender={setRender} />
      )}
    </div>
  );
};

const SignIn = ({ setRender }) => {
  return (
    <div className="h-screen flex flex-col gap-7 bg-stone-800 ">
      <Logo />
      <Forms setRender={setRender} />
    </div>
  );
};

const Signup = ({ setRender }) => {
  return (
    <div className="h-screen flex flex-col gap-7 bg-stone-800 ">
      <Logo />
      <SignUpForms setRender={setRender} />
    </div>
  );
};

export default AuthPage;
