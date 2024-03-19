import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import useMyContacts from "../../hooks/useMyContacts.js";
import useConversation from "../../zustand/useConversation.js";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = React.useState("");
  const { myContacts } = useMyContacts();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) return;

    const result = myContacts.find((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );

    if (result) {
      setSelectedConversation(result);
    } else {
      toast.error("No such contact exists!");
    }

    setSearch("");
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-orange-400 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default Search;
