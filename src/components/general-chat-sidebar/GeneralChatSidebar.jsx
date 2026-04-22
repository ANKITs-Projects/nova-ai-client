import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { LuFolderPen } from "react-icons/lu";
import { LuFolderClosed } from "react-icons/lu";
import useGetAllChat from "../../hooks/useGetAllChat";
import { useSelector } from "react-redux";
import { UseGetMessagesByChatId } from "../../hooks/useGetMessages";
import { useNavigate } from "react-router-dom";

const GeneralChatSidebar = () => {
  const [showGeneratChats, setShowGeneralProject] = useState(true);
  const { loading, error, chats } = useSelector((store) => store.generalChat);
  const navigate = useNavigate();
  const fetchMessages = UseGetMessagesByChatId();

  const handleChatClick = (chatId) => {
    navigate(`/c/${chatId}`);
  };

  return (
    <div className="w-full h-full p-1 rounded-xl flex flex-col items-center">
      <p
        className="w-full p-1 text-xs text-gray-300 tracking-wide flex items-end cursor-pointer "
        onClick={() => setShowGeneralProject((pre) => !pre)}
      >
        General Chat
        <span className="text-[18px]">
          {showGeneratChats ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        </span>
      </p>
      {showGeneratChats && (
        <div className="w-full max-h-full overflow-auto scrollbar-hover">
          {loading && <div className="loader p-1.5"></div>}
          {error && <div className="p-1 text-xs font-extralight text-zinc-300">{error}</div>}
          {chats.length > 0 &&
            chats.map((ele, i) => {
              return (
                <div
                  className="w-full flex justify-between items-center"
                  key={ele._id}
                  onClick={() => handleChatClick(ele._id)}
                >
                  <button className="w-full p-1.5 text-sm font-light capitalize rounded-xl flex items-center gap-1 cursor-pointer hover:bg-(--bgHover) ">
                    <span className="truncate">{ele.title}</span>
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default GeneralChatSidebar;
