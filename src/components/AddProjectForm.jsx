import React, { useState } from "react";

export const AddProjectForm = ({setShowAddProjectForm, handlecreateProject, isProcessing}) => {
  const [projectName, setProjectName] = useState("")
  const [projectDesc, setProjectDesc] = useState("")
  


  return (
    <div className="w-[40%] flex items-center justify-center backdrop-blur-sm">
  
  <div className="w-[90%] max-w-md rounded-2xl bg-white shadow-2xl p-6">
    
    {/* Title */}
    <h2 className="text-lg font-semibold text-gray-800 mb-4">
      Create Project
    </h2>

    {/* Inputs */}
    <div className="flex flex-col gap-3 text-zinc-800">
      <input
        type="text"
        value={projectName}
        onChange={(e)=> setProjectName(e.target.value)}
        placeholder="Enter project name"
        className="w-full px-3 py-2 rounded-lg border border-gray-300 
                   outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        type="text"
        value={projectDesc}
        onChange={(e) => setProjectDesc(e.target.value)}
        placeholder="Enter description"
        className="w-full px-3 py-2 rounded-lg border border-gray-300 
                   outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-3 mt-5">
      <button
        className="px-4 py-2 text-sm font-medium rounded-lg 
                   bg-white border border-gray-300 text-gray-700
                   transition-all duration-300 ease-out
                   hover:bg-gray-100 active:scale-95"
        onClick={() => setShowAddProjectForm(false)}
      >
        Cancel
      </button>

      <button
        className="px-4 py-2 text-sm font-medium rounded-lg 
                   bg-blue-600 text-white shadow-sm
                   transition-all duration-300 ease-out
                   hover:bg-blue-700 active:scale-95"
        onClick={()=> handlecreateProject(projectName,projectDesc)}
      >
        {isProcessing ? "Creating.." : "Create"}
      </button>
    </div>

  </div>
</div>
  );
};

