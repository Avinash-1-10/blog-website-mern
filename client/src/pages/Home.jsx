import React from "react";
import blogs from "../data/blogs";

const Home = () => {
  return (
    <div className="flex justify-center items-center gap-10 flex-wrap px-5 md:px-10 py-5 md:py-10">
      {blogs.map((blog) => (
        <div
          className=" w-[300px] md:w-[400px] h-[400px] border rounded-lg overflow-hidden relative shadow-md"
          key={blog.id}
        >
          <div className="absolute z-50 bottom-0 w-[100%] bg-gradient-to-t from-gray-950 to-transparent flex justify-center items-center h-[30%]">
            <button className="bg-blue-700 text-white px-3 py-2 rounded-md">
              Read More
            </button>
          </div>
          <img
            className="h-[50%] w-[100%] object-cover"
            src="https://images.unsplash.com/photo-1691938670117-5c65ae4c19fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt={blog.title}
          />
          <div className="h-[50%] p-3">
            <h2 className="text-[20px] font-semibold">{blog.title}</h2>
            <span className="text-[14px] text-gray-600">31 Aug 2023</span>
            <p className="text-justify">{blog.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
