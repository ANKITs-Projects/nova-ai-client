import React, { useState } from "react";
import { GoSidebarExpand } from "react-icons/go";
import { BsChatDotsFill } from "react-icons/bs";
import logo from "../assets/novaAi.ico";
import ProjectSidebar from "./project_sidebar/ProjectSidebar";
import GeneralChatSidebar from "./general-chat-sidebar/GeneralChatSidebar";
import UserProfile from "./UserProfile";

const ChatSidebar = () => {

  return (
    <div className="w-full h-screen p-1 bg-[#171717] flex flex-col gap-2 overflow-hidden ">
      <div className="w-full max-h-10  flex justify-between items-center">
        <div className="w-10 h-10 p-2 flex justify-center items-center rounded-xl cursor-pointer hover:bg-(--bgHover)">
          <img src={logo} alt="" />
        </div>
        <div className="w-10 h-10 p-2 font-bold text-xl flex justify-center items-center rounded-xl cursor-pointer hover:bg-[#3d3a3aec]">
          <GoSidebarExpand />
        </div>
      </div>

      <div className="w-full max-h-10 pl-3 flex justify-between items-center">
        <button className="w-full max-h-10 p-3 rounded-xl flex items-center gap-1.5 cursor-pointer hover:bg-(--bgHover)">
          <BsChatDotsFill /> New chat
        </button>
      </div>

      <div className="w-full max-h-[35%] pl-3 overflow-hidden">
        <ProjectSidebar />
      </div>

      <div className="w-full flex-1 pl-3 overflow-hidden">
        <GeneralChatSidebar />
      </div>

      <div className="w-full max-h-25">
        <UserProfile />
      </div>
    </div>
  );
};

export default ChatSidebar;
