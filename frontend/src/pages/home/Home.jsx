import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messageContainer/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[650px] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-transparent overflow-hidden">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
