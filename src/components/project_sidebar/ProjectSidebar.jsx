import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { LuFolderPen } from "react-icons/lu";
import { LuFolderClosed } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddProjectForm } from "../AddProjectForm";
import { toast } from "react-toastify";
import useCreateProject from "../../hooks/useCreateProject";


const ProjectSidebar = () => {

  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [showProject, setShowProject] = useState(true);
  const [isProcessing, setisProcessing] = useState(false);
  const { loading, error, projects } = useSelector((store) => store.project);

  const createProject = useCreateProject()
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/p/${projectId}`);
  };

  const handlecreateProject = async (name,description) => {
    setisProcessing(true)
    if(!name) {
      toast.warn("Project name is require")
      setisProcessing(false)
      return
    }

    try {
      const projectId = await createProject(name, description)
      toast.success("Project created successfully!")
      navigate(`/p/${projectId}`)
    } catch (error) {
      toast.error(error.message)
    }finally{
      setisProcessing(false)
      setShowAddProjectForm(false)
    }
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
          <div className="w-full flex justify-between items-center" onClick= {() => setShowAddProjectForm(true)}>
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
                  <div
                    className="w-full flex justify-between items-center"
                    key={ele._id}
                    onClick={() => handleProjectClick(ele._id)}
                  >
                    <button className="w-full p-1.5 text-sm font-light rounded-xl flex items-center gap-1 cursor-pointer hover:bg-(--bgHover)">
                      <span className="text-lg font-bold mr-1">
                        <LuFolderClosed />
                      </span>
                      <span className="truncate">{ele.name}</span>
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      {
  showAddProjectForm && (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-100">
      <AddProjectForm setShowAddProjectForm={setShowAddProjectForm} handlecreateProject={handlecreateProject} isProcessing={isProcessing}/>
    </div>
  )
}
    </div>
  );
};

export default ProjectSidebar;
