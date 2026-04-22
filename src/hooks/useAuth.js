import { useEffect } from "react";
import { setError, setLoading, setUser } from "../slice/userSlice";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../api/auth.api";

const useAuth = () => {
    const dispatch = useDispatch();

    const fetchUserProfile = async () => {
      dispatch(setLoading(true));
      try {
        const res = await getUserProfile();
        dispatch(setUser(res.data.user));
        dispatch(setError(null));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    }

  return fetchUserProfile
};

export default useAuth
