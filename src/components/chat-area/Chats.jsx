import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import InputField from "./InputField";
import { toast } from "react-toastify";
import useSendMessage from "../../hooks/useSendMessage";
import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import AIResponse from "../aiResponce/AIResponse";

const Chats = () => {
  const { loading, error, messages } = useSelector((store) => store.message);
  const sendMessage = useSendMessage();
  
  const location = useLocation()

  const [chatMessage, setChatMessage] = useState("")
  const [isSendMessage, setIsSendMessage] = useState(false)
  const bottomRef = useRef(null);

  useEffect(() => {
    const handleSend = async () => {
      if(!isSendMessage) return;

      if(chatMessage.length === 0 ){
        toast.warn("Message must not empty!")
        setIsSendMessage(false)
        return
      }

      try {
        const path = location.pathname.split("/");
        const chatid = path[path.length - 1]
        const res = await sendMessage(chatMessage, chatid)
      } catch (error) {
        console.log(error)
      } finally{
        setIsSendMessage(false)
      }
    }

    handleSend()

  }, [isSendMessage]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full h-full my-5 flex flex-col gap-5 overflow-hidden">
      <div className="w-[65%] h-full mx-auto flex-1  flex flex-col gap-4  overflow-y-auto noscrollbar">
        {messages.length > 0 &&
          messages.map((chat) => {
            return (
              <div className="w-full h-auto flex flex-col gap-2" key={chat._id}>
                <div className="w-full h-auto flex">
                  {chat.sender === "user" ? (
                    <div className="w-full flex justify-end">
                      <p className="max-w-[40%] inline-block p-2 bg-(--bgHover) rounded-r-2xl rounded-b-2xl">
                        {chat.content}
                      </p>
                    </div>
                  ) : (
                    <div className="w-full flex justify-start">
                      {/* <Markdown>{chat.content}</Markdown> */}
                      {/* <p className="">{chat.content}</p> */}
                      <div className="max-w-[90%]">
                      <AIResponse data ={chat.content}/>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {
            loading && (
            <div className="w-full flex justify-start">
            <div className="loader" ></div>
            </div>
            )
          }
          {
            error && (
            <div className="w-full flex justify-start">
            <div className="" >{error}</div>
            </div>
            )
          }
        <div ref={bottomRef}></div>
      </div>
      <div className="w-full">
        <InputField setChatMessage = {setChatMessage} setIsSendMessage = {setIsSendMessage}/>
      </div>
    </div>
  );
};

export default Chats;
