import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputField from "./chat-area/InputField";
import { UseGetMessagesByChatId } from "../hooks/useGetMessages";
import useGetAllProjects from "../hooks/useGetAllProjects";
import useGetAllProjectChat from "../hooks/useGetAllProjectsChat";
import Chats from "./chat-area/Chats";
import Projects from "./chat-area/Projects";
import useSendMessage from "../hooks/useSendMessage";
import { useDispatch } from "react-redux";
import { pushChats } from "../slice/generalChatSlice";
import { toast } from "react-toastify";
import { setMessages } from "../slice/messageSlice";

const ChatArea = () => {
  const fetchMessages = UseGetMessagesByChatId();
  const fetchAllProjectsChat = useGetAllProjectChat();
  const sendMessage = useSendMessage();

  const [chatMessage, setChatMessage] = useState("")
  const [isSendMessage, setIsSendMessage] = useState(false)
  const [isSendProjectMessage, setIsSendProjectMessage] = useState(false)
  

  const dispatch = useDispatch();
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


  useEffect(() => {
  const handleSend = async () => {
    if (!isSendMessage) return;

    if (chatMessage.length === 0) {
      toast.warn("Message must not empty!");
      setIsSendMessage(false);
      return;
    }

    try {
      dispatch(setMessages([]))
      const chatDetail = await sendMessage(chatMessage);
      if (chatDetail) {
        dispatch(pushChats(chatDetail));
        navigate(`/c/${chatDetail._id}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSendMessage(false);
    }
  };

  handleSend();
}, [isSendMessage]);

  if (isChat || isProjectChat || isSendMessage || isSendProjectMessage) {
    
    return (
      <div className="w-full h-screen flex flex-col gap-4 overflow-hidden">
        <Chats />
      </div>
    );
  }

  // if(isProjectChat){
  //   return (
  //     <div className="w-full h-screen flex flex-col gap-4 overflow-hidden">
  //       <Chats />
  //     </div>
  //   );
  // }

  if (isProject) {
    return (
      <div className="w-full h-screen flex flex-col gap-4 overflow-hidden">
        <Projects setIsSendProjectMessage={setIsSendProjectMessage}/>
      </div>
    );
  }


  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center">
      <div className="text-3xl ">
        <h1>What are you working on?</h1>
      </div>
      <InputField setChatMessage = {setChatMessage} setIsSendMessage = {setIsSendMessage}/>
    </div>
  );
};

export default ChatArea;
