import axioInstance from "./axios"


export const getAllProjects = async () => {
    try {
        const res = await axioInstance("/project")
        
        if(!res.data.success)
            throw new Error(res.data.message)

        return res.data.data
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message)
    }

}
export const getProjectsChat = async (projectId) => {
    try {
        const res = await axioInstance(`/project/${projectId}`)
        
        if(!res.data.success)
            throw new Error(res.data.message)

        return res.data.data
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message)
    }
}

export const postCreateProject = async (name, description) => {
    try {
        const res = await axioInstance.post("/project", {name, description})

        if(!res.data.success)
            throw new Error(res.data.message)

        return res.data.data
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message)
    }
}