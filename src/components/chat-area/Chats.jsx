import React from 'react'
import { useSelector } from 'react-redux'
import InputField from './InputField'

const Chats = () => {
    const {loading, error, messages} = useSelector((store) => store.message)

    
  return (
    <div className='w-full h-full my-5 flex flex-col gap-5 overflow-hidden'>
        <div className='w-[65%] h-full mx-auto flex-1  flex flex-col gap-4  overflow-y-auto noscrollbar'>
            {
                messages.length && messages.map((chat) => {
                    return (
                        <div className='w-full h-auto flex flex-col gap-2' key={chat._id}>
                            <div className='w-full h-auto flex'>
                                {
                                chat.sender === "user" ? (
                                    <div className='w-full flex justify-end'>
                                        <p className='inline-block p-2 bg-(--bgHover) rounded-r-2xl rounded-b-2xl'>
                                            {chat.content}
                                        </p>
                                    </div>
                                ) : (
                                    <div className='w-full flex justify-start'>
                                        <p className=''>
                                            {chat.content}
                                        </p>
                                    </div>
                                )
                            }
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="w-full">
          <InputField />
        </div>
    </div>
  )
}

export default Chats