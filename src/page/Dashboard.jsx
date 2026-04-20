import React, { useEffect } from 'react'
import ChatSidebar from '../components/ChatSidebar'
import ChatArea from '../components/ChatArea'
import useGetAllChat from '../hooks/useGetAllChat';
import useGetAllProjects from '../hooks/useGetAllProjects';

const Dashboard = () => {
  const fetchAllChat = useGetAllChat();
  const fetchAllProjects = useGetAllProjects()


  useEffect(() => {
    fetchAllChat()
    fetchAllProjects()
  }, [])

  
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