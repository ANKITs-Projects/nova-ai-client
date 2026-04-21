import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Textarea from "./chat-area/InputField";
import { UseGetMessagesByChatId } from "../hooks/useGetMessages";
import useGetAllProjects from "../hooks/useGetAllProjects";
import useGetAllProjectChat from "../hooks/useGetAllProjectsChat";

const ChatArea = () => {
  const fetchMessages = UseGetMessagesByChatId();
  const fetchAllProjectsChat = useGetAllProjectChat()
  const location = useLocation();

  const navigate = useNavigate();
  const path = location.pathname;
  console.log("path for chat:- ", path.split("/"));
  const isChat = path.startsWith("/c/");
  const isProject = path.startsWith("/p/");

  useEffect(() => {
    if (isChat) {
      const chatId = path.split("/")[2];
      console.log(chatId);
      if (chatId) {
        fetchMessages(chatId);
      } else {
        navigate("/");
      }
    } else if (isProject) {
      const projectId = path.split("/")[2];
      console.log(projectId);
      if (projectId) {
        fetchAllProjectsChat(projectId);
      } else {
        navigate("/");
      }
    }
  }, [path]);

  if (!isChat && !isProject) {
    return (
      <div className="w-full h-screen flex flex-col gap-10 items-center justify-center">
        <div className="text-3xl ">
          <h1>What are you working on?</h1>
        </div>
        <Textarea />
      </div>
    );
  }

  if (isChat) {
    return <h1>Hello</h1>;
  }
};

export default ChatArea;
