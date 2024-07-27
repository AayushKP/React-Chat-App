import HomePage from "../pages/HomePage";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center pt-44 ">
      <div
        onClick={goToHomePage}
        className="cursor-pointer bg-custom-gradient-1 flex justify-center items-center font-jolly text-white text-3xl rounded-full w-64 h-14 "
      >
        <h1>CHIT-CHAT</h1>
      </div>
    </div>
  );
}
