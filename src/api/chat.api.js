import axioInstance from "./axios"


export const getAllChat = async () => {
    try {
        const res = await axioInstance.get("/allchat")
        if(!res.data.success)
            throw new Error(res.data.message)

        return res.data.data
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message)
    }
}

export const getMessages = async (chatId) => {
    try {
        const res = await axioInstance.get(`/message/${chatId}`)
        if(!res.data.success)
            throw new Error(res.data.message)
        return res.data.data
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message)
    }
}