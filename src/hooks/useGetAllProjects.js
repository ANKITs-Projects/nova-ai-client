import { useDispatch } from "react-redux"
import { setProjectError, setProjectLoading, setProjects } from "../slice/projectSlice"
import { getAllProjects } from "../api/project.api"


const useGetAllProjects = () => {
    const dispatch = useDispatch()

    const fetchAllProjects = async () => {
        dispatch(setProjectLoading(true))
        try {
            const res = await getAllProjects()
            dispatch(setProjects(res))
        } catch (error) {
            dispatch(setProjectError(error.message))
        } finally {
            dispatch(setProjectLoading(false))
        }
    }

    return fetchAllProjects
}

export default useGetAllProjects