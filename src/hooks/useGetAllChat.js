import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { setChatError, setChatLoading, setChats } from "../slice/generalChatSlice"
import { setDetail as setProjectDetail, setError as setProjectError, setLoading as setProjectLoading}  from "../slice/chatProjectDetailSlice"

import { getAllChat } from "../api/chat.api"

const useGetAllChat = () => {
    const dispatch = useDispatch()

    const fetchAllChat = async () => {
        dispatch(setChatLoading(true))
        dispatch(setProjectLoading(true))
        try {
            const chat = await getAllChat() 
            dispatch(setChats(chat.chats))
            dispatch(setProjectDetail(chat.detail))
        } catch (error) {
            dispatch(setChatError(error.message))
            dispatch(setProjectError(error.message))
        } finally {
            dispatch(setChatLoading(false))
            dispatch(setProjectLoading(false))
        }
    }

    return fetchAllChat
};

export default useGetAllChat