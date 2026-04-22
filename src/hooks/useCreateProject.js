import { useDispatch } from "react-redux"
import { postCreateProject } from "../api/project.api"
import { pushProjects } from "../slice/projectSlice"

const useCreateProject = () => {
    const dispatch = useDispatch()

    const createProject = async (name, description)=>{
        try {
            const res = await postCreateProject(name, description)
            dispatch(pushProjects(res))
            return res._id
        } catch (error) {
            throw new Error(error.message)
        }
    }
    return createProject
}

export default useCreateProject