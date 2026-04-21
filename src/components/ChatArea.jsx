import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputField from "./chat-area/InputField";
import { UseGetMessagesByChatId } from "../hooks/useGetMessages";
import useGetAllProjects from "../hooks/useGetAllProjects";
import useGetAllProjectChat from "../hooks/useGetAllProjectsChat";
import Chats from "./chat-area/chats";
import Projects from "./chat-area/Projects";

const ChatArea = () => {
  const fetchMessages = UseGetMessagesByChatId();
  const fetchAllProjectsChat = useGetAllProjectChat();
  const location = useLocation();

  const navigate = useNavigate();

  const path = location.pathname.split("/");
  
  const isProject = path[1] === "p";
  const projectId = isProject ? path[2] : null;

  const isProjectChat = isProject && path[3] === "c";
  const chatId = isProjectChat ? path[4] : null;

  const isChat = path[1] === "c";
  const soloChatId = isChat ? path[2] : null;

  useEffect(() => {
    if (isChat) {
      if (soloChatId) {
        fetchMessages(soloChatId);
      } else {
        navigate("/");
      }
    } else if (isProjectChat) {
      if (chatId) {
        fetchMessages(chatId);
      } else {
        navigate("/");
      }
    } 
    else if (isProject) {
      if (projectId) {
        fetchAllProjectsChat(projectId);
      } else {
        navigate("/");
      }
    }
    
  }, [path]);


  if (isChat) {
    return (
      <div className="w-full h-screen flex flex-col gap-4 overflow-hidden">
        <Chats />
      </div>
    );
  }

  if(isProjectChat){
    return (
      <div className="w-full h-screen flex flex-col gap-4 overflow-hidden">
        <Chats />
      </div>
    );
  }

  if (isProject) {
    return (
      <div className="w-full h-screen flex flex-col gap-4 overflow-hidden">
        <Projects />
      </div>
    );
  }

  

  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center">
      <div className="text-3xl ">
        <h1>What are you working on?</h1>
      </div>
      <InputField />
    </div>
  );
};

export default ChatArea;
