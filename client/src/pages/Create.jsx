import React from "react";

const Create = () => {
  return (
    <div className="flex justify-center w-screen py-5 md:py-10">
      <form className="md:w-[50%] w-[100%] md:rounded-md bg-blue-600 px-5 md:px-20 py-10 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label className="text-white text-lg font-semibold">
            Author name
          </label>
          <input
            className="h-[40px] outline-none pl-2 rounded-md"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white text-lg font-semibold">Title</label>
          <input
            className="h-[40px] outline-none pl-2 rounded-md"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white text-lg font-semibold">Sub Title</label>
          <input
            className="h-[40px] outline-none pl-2 rounded-md"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white text-lg font-semibold">Content</label>
          <textarea
            className="outline-none pl-2 rounded-md"
            type="text"
            rows={10}
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-white text-blue-500 px-3 py-2 w-fit rounded-md font-semibold">
            Upload Image
          </button>
          <button className="bg-green-500 text-white px-3 py-2 w-fit rounded-md font-semibold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
