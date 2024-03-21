import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(AuthContext);

  const logout = async () => {
    setLoading(true);

    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post("/api/auth/logout", {}, config);

      //delete info from local storage
      localStorage.removeItem("loggedInUser");

      //set context
      setAuthUser(null);
    } catch (err) {
      toast.error(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
