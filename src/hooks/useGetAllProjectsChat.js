import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { getProjectsChat } from "../api/project.api";
import { setProjectChatError, setProjectChatLoading, setProjectChats } from "../slice/projectChatSlice";

const useGetAllProjectChat = () => {
    const dispatch = useDispatch()

    const fetchAllProjectsChat = async (projectId) => {
        dispatch(setProjectChatLoading(true))
        try {
            const chat = await getProjectsChat(projectId) 
            dispatch(setProjectChats(chat))
        } catch (error) {
            dispatch(setProjectChatError(error.message))
        } finally {
            dispatch(setProjectChatLoading(false))
        }
    }

    return fetchAllProjectsChat
};

export default useGetAllProjectChat