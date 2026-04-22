import axioInstance from "./axios";

export const getUserProfile = async () => {
    return await axioInstance.get("/profile")
}

export const signUpUser = async (body) => {
    return await axioInstance.post("/auth/signup", body)
}

export const loginUser = async (body) => {
    return await axioInstance.post("/auth/login", body)
}

export const logoutUser = async () => {
    return await axioInstance.get("/auth/logout")
}