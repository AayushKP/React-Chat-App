// HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToChatsPage = () => {
    navigate("/chats");
  };

  return (
    <div>
      <button onClick={goToChatsPage}>Go to Chats</button>
    </div>
  );
};

export default HomePage;
