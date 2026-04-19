import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

const GeneralChatSidebar = () => {
    const [showGeneratChats, setShowGeneralProject] = useState(false)
  return (
    <div className="w-full p-1 rounded-xl flex items-center">
          <p className="w-full p-1 text-sm flex items-end cursor-pointer "  onClick={() => setShowGeneralProject((pre) => !pre)}>
            General Chats
            <span className="text-[18px]">
                {
                   showGeneratChats ? <IoMdArrowDropdown /> : <IoMdArrowDropright />
                }
            </span>
          </p>
    </div>
  )
}

export default GeneralChatSidebar