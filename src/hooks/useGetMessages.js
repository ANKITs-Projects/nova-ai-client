import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setMessageError, setMessageLoading, setMessages } from "../slice/messageSlice"
import { getMessages } from "../api/chat.api"

export const UseGetMessagesByChatId = () => {
    const dispatch = useDispatch()
    const fetchMessages = async (chatId) => {
        dispatch(setMessageLoading(true))
        try {
            const res = await getMessages(chatId)
            
            dispatch(setMessages(res.messages))
        } catch (error) {
            dispatch(setMessageError(error.message))
            
        } finally{
            dispatch(setMessageLoading(false))
        }
    }

    return fetchMessages
}