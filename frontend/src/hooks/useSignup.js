import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    name,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const validated = handleErrors({
      name,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!validated) return;

    setLoading(true);

    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        "/api/auth/signup",
        { name, username, password, confirmPassword, gender },
        config
      );

      console.log(data);
    } catch (err) {
      toast.error(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleErrors({ name, username, password, confirmPassword, gender }) {
  if (!name || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
