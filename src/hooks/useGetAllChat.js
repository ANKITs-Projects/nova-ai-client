import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { setChatError, setChatLoading, setChats } from "../slice/generalChatSlice"
import { getAllChat } from "../api/chat.api"

const useGetAllChat = () => {
    const dispatch = useDispatch()

    const fetchAllChat = async () => {
        dispatch(setChatLoading(true))
        try {
            const chat = await getAllChat() 
            dispatch(setChats(chat))
        } catch (error) {
            dispatch(setChatError(error.message))
        } finally {
            dispatch(setChatLoading(false))
        }
    }

    return fetchAllChat
};

export default useGetAllChat