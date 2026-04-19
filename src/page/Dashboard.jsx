import React from 'react'
import ChatSidebar from '../components/ChatSidebar'
import ChatArea from '../components/ChatArea'

const Dashboard = () => {
  return (
    <div className='h-screen w-screen bg-[#212121] text-zinc-100 flex overflow-hidden'>
      <div className='w-[17%]'>
        <ChatSidebar />
      </div>
      <div className='flex-1'>
        <ChatArea />
      </div>
    </div>
  )
}

export default Dashboard