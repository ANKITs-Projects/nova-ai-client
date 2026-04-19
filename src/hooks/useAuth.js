import { useEffect } from "react";
import { setError, setLoading, setUser } from "../slice/userSlice";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../api/auth.api";

const useAuth = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    const initAuth = async () => {
      dispatch(setLoading(true));
      try {
        const res = await getUserProfile();
        dispatch(setUser(res.data.user));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    initAuth();
  }, []);
};

export default useAuth
