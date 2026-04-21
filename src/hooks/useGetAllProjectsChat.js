import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { getProjectsChat } from "../api/project.api";
import { setProjectChatError, setProjectChatLoading, setProjectChats } from "../slice/projectChatSlice";
import { setDetail as setProjectDetail, setError as setProjectError, setLoading as setProjectLoading}  from "../slice/chatProjectDetailSlice"

const useGetAllProjectChat = () => {
    const dispatch = useDispatch()

    const fetchAllProjectsChat = async (projectId) => {
        dispatch(setProjectChatLoading(true))
        dispatch(setProjectLoading(true))
        try {
            const chat = await getProjectsChat(projectId) 
            dispatch(setProjectChats(chat.chats))
            dispatch(setProjectDetail(chat.detail))
        } catch (error) {
            dispatch(setProjectChatError(error.message))
            dispatch(setProjectError(error.message))
        } finally {
            dispatch(setProjectChatLoading(false))
            dispatch(setProjectLoading(false))
        }
    }

    return fetchAllProjectsChat
};

export default useGetAllProjectChat