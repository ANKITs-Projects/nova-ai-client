import React from "react";
import InputField from "./InputField";
import { formattedDate } from "../../utils/formateDate";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Projects = () => {
  const { loading, error, projectschat } = useSelector(
    (store) => store.projectChats,
  );
  const {
    loading: projectLoading,
    error: projectError,
    detail: projectDetail,
  } = useSelector((state) => state.chatProjectDetail);

  const location = useLocation();
  const navigate = useNavigate();

  const handleChatClick = (chatId) => {
    const path = location.pathname + `/c/${chatId}`
    navigate(path)
  }

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
            <InputField />
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
