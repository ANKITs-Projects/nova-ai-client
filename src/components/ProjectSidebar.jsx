import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
const ProjectSidebar = () => {
    const [showProject, setShowProject] = useState(false)
  return (
    <div className="w-full p-1 rounded-xl flex items-center">
          <p className="w-full p-1 text-sm flex items-end cursor-pointer " onClick={() => setShowProject((pre) => !pre)}>
            Projects
            <span className="text-[18px]">
                {
                   showProject ? <IoMdArrowDropdown /> : <IoMdArrowDropright />
                }
            </span>
          </p>
    </div>
  )
}

export default ProjectSidebar