import React, { useEffect } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = React.useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          `/api/messages/${selectedConversation._id}`
        );

        setMessages(data);
      } catch (err) {
        if (err.response.data.erc === "NCF") {
          //   console.log("no conv found");
          setMessages([]);
        } else {
          toast.error(err.response.data.error);
        }
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
