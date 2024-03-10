import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-xl shadow-md bg-trannsparent bg-clip-padding backdrop-flter backdrop-blur-md">
        <h1 className="text-3xl font-semibold text-center caret-transparent pb-5">
          SIGNUP
          <span className="text-orange-300 pl-3 caret-transparent">MyChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Name</span>
            </label>

            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Fullname"
              className="w-full input input-bordered h-12"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>

            <input
              type="text"
              name="username"
              id="username"
              placeholder="Your Username"
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
              placeholder="Your Password"
              className="w-full input input-bordered h-12"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>

            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Your Password"
              className="w-full input input-bordered h-12"
            />
          </div>
          <GenderCheckBox />
          <a className="text-sm hover:underline hover:text-orange-400 mt-5 inline-block cursor-pointer ml-40 caret-transparent">
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-md mt-4 bg-orange-400 text-black hover:text-white">
              SIGNUP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
