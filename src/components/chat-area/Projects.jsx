import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { formattedDate } from "../../utils/formateDate";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useSendMessage from "../../hooks/useSendMessage";
import { setMessages } from "../../slice/messageSlice";
import { pushChats } from "../../slice/generalChatSlice";

const Projects = ({setIsSendProjectMessage}) => {
  const { loading, error, projectschat } = useSelector(
    (store) => store.projectChats,
  );
  const {
    loading: projectLoading,
    error: projectError,
    detail: projectDetail,
  } = useSelector((state) => state.chatProjectDetail);

  const [chatMessage, setChatMessage] = useState("")
  const [isSendMessage, setIsSendMessage] = useState(false)

  const sendMessage = useSendMessage();
  
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChatClick = (chatId) => {
    const path = location.pathname + `/c/${chatId}`
    navigate(path)
  }


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
          setIsSendProjectMessage(true)
          const path = location.pathname.split("/");
          const projectId = path[path.length - 1]
          const chatDetail = await sendMessage(chatMessage, null, projectId);
          if (chatDetail) {
            dispatch(pushChats(chatDetail));
            navigate(`/p/${projectId}/c/${chatDetail._id}`);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsSendMessage(false);
          setIsSendProjectMessage(false)
        }
      };
    
      handleSend();
  }, [isSendMessage])

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-[65%] h-full mx-auto flex flex-col gap-5">

        <div className="w-full h-[50%] flex flex-col gap-3 justify-evenly relative">
          <div>
            {projectLoading && <div className="loader p-1.5"></div>}
            {error && <div>{error}</div>}
            {projectDetail && (
              <div className="w-full flex justify-between">
                <div className="flex-1">
                  <h1 className="text-xl font-bold">{projectDetail.name}</h1>
                  <p className="text-sm font-light text-zinc-300">{projectDetail.description}</p>
                </div>
                <div className="self-end text-sm font-extralight text-zinc-300">
                    {formattedDate(projectDetail.createdAt)}
                </div>
              </div>
            )}
          </div>
          <div className="w-full absolute bottom-0">
            <InputField setChatMessage = {setChatMessage} setIsSendMessage = {setIsSendMessage} />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-2 overflow-auto noscrollbar">
          {projectschat.length > 0 &&
            projectschat.map((chat) => {
              return (
                <div
                  className="w-full min-h-6 p-2 border-b border-zinc-600 flex justify-between items-center cursor-pointer hover:bg-(--bgHover)"
                  key={chat._id}
                  onClick={()=> handleChatClick(chat._id)}
                >
                  <div className="text-lg font-light">{chat.title}</div>
                  <div>{formattedDate(chat.updatedAt)}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
