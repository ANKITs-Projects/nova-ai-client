import axioInstance from "./axios"


export const getAllProjects = async () => {
    try {
        const res = await axioInstance("/project")
        // console.log("project api :- ", res)
        if(!res.data.success)
            throw new Error(res.data.message)

        return res.data.data
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message)
    }
}