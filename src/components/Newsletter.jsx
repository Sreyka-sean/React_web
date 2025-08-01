import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 text-white bg-black">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips and tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        {/* Right Section (Input + Button) */}
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="h-12 px-4 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button
              className="h-12 px-4 bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 sm:my-0 sm:ml-4"
            >
              Notify Me
            </button>
          </div>

          <p className="text-sm mt-2">
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] underline cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
