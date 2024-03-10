import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-xl shadow-md bg-trannsparent bg-clip-padding backdrop-flter backdrop-blur-md">
        <h1 className="text-3xl font-semibold text-center caret-transparent pb-5">
          LOGIN
          <span className="text-orange-300 pl-3 caret-transparent">MyChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              name="username"
              id="username"
              placeholder="Your username..."
              className="w-full input input-bordered h-12"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password..."
              className="w-full input input-bordered h-12"
            />
          </div>
          <a className="text-sm hover:underline hover:text-orange-400 mt-5 inline-block cursor-pointer ml-40 caret-transparent">
            Don't have an account?
          </a>
          <div>
            <button className="btn btn-block btn-md mt-4 bg-orange-400 text-black hover:text-white">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
