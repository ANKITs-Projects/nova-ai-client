import React from 'react'
import InputField from './InputField'
import { formattedDate } from '../../utils/formateDate'
import { useSelector } from 'react-redux'

const Projects = () => {
    const {loading, error, projectschat} = useSelector((store) => store.projectChats)
    console.log("Projects:- ", loading, error, projectschat)

  return (
    <div className='w-full h-screen overflow-hidden'>
        <div className='w-[65%] h-full mx-auto flex flex-col gap-5'>
            <div className='w-full h-[40%] flex items-end'>
                <InputField />
            </div>
            <div className='w-full h-auto flex flex-col gap-2 overflow-auto noscrollbar'>
                {
                    projectschat.length && projectschat.map((chat) => {
                        return (
                            <div className='w-full min-h-6 p-2 border-b border-zinc-600 flex justify-between items-center cursor-pointer hover:bg-(--bgHover)' key={chat._id}>
                                <div className='text-lg font-light'>
                                    {chat.title}
                                </div>
                                <div>
                                    {formattedDate(chat.updatedAt)}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Projects