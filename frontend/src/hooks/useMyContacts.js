import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useMyContacts = () => {
  const [loading, setLoading] = useState(false);
  const [myContacts, setMyContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/users/");

        setMyContacts(data);
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    getContacts();
  }, []);

  return { loading, myContacts };
};

export default useMyContacts;
