import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { LuFolderPen } from "react-icons/lu";
import { LuFolderClosed } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProjectSidebar = () => {
  const [showProject, setShowProject] = useState(true);
  const { loading, error, projects } = useSelector((store) => store.project);
  const navigate = useNavigate()

  const handleProjectClick =  (projectId) => {
    navigate(`/p/${projectId}`);
  }

  return (
    <div className="w-full h-full p-1 rounded-xl flex flex-col items-center overflow-hidden">
      <p
        className="w-full p-1 text-xs text-gray-300 tracking-wide flex items-end cursor-pointer "
        onClick={() => setShowProject((pre) => !pre)}
      >
        Projects
        <span className="text-[18px]">
          {showProject ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        </span>
      </p>
      {showProject && (
        <div className="w-full max-h-[90%] flex flex-col">
          {/* New Project Button */}
          <div className="w-full flex justify-between items-center">
            <button className="w-full p-1.5 text-sm font-light rounded-xl flex items-center gap-1 cursor-pointer hover:bg-(--bgHover)">
              <span className="text-lg font-bold mr-1">
                <LuFolderPen />
              </span>
              New project
            </button>
          </div>
          <div className="w-full max-h-full overflow-auto scrollbar-hover">
            {loading && <div className="loader"></div>}
            {error && <div>{error}</div>}
            {projects.length > 0 &&
              projects.map((ele) => {
                return (
                  <div className="w-full flex justify-between items-center" key={ele._id} onClick={() => handleProjectClick(ele._id)}>
                    <button className="w-full p-1.5 text-sm font-light rounded-xl flex items-center gap-1 cursor-pointer hover:bg-(--bgHover)">
                      <span className="text-lg font-bold mr-1">
                        <LuFolderClosed />
                      </span>
                      {ele.name}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSidebar;
