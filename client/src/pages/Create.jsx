import axios from "axios";
import React, { useState } from "react";
const singleBlock = {
  id: 8,
  author: "Avinash Yede",
  title: "This is the title of blog",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  image:
    "https://images.unsplash.com/photo-1691938670117-5c65ae4c19fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  content:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. In pariatur quis officia iure id esse quidem explicabo eum rerum doloribus aliquidLorem, ipsum dolor sit amet consectetur adipisicing elit. In pariatur quis officia iure id esse quidem explicabo eum rerum doloribus aliquid,Lorem, ipsum dolor sit amet consectetur adipisicing elit. In pariatur quis officia iure id esse quidem explicabo eum rerum doloribus aliquid,Lorem, ipsum dolor sit amet consectetur adipisicing elit. In pariatur quis officia iure id esse quidem explicabo eum rerum doloribus aliquid, consectetur, neque suscipit facere sunt? Porro dolores nisi aliquid. consectetur, neque suscipit facere sunt? Porro dolores nisi aliquid. consectetur, neque suscipit facere sunt? Porro dolores nisi aliquid., consectetur, neque suscipit facere sunt? Porro dolores nisi aliquid. In pariatur quis officia iure id esse quidem explicabo eum rerum doloribus aliquid, consectetur, neque suscipit facere sunt? Porro dolores nisi aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In pariatur quis officia iure id esse quidem explicabo eum rerum doloribus aliquid, consectetur, neque suscipit facere sunt? Porro dolores nisi aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In pariatur quis officia iure id esse quidem explicabo eum rerum doloribus aliquid, consectetur, neque suscipit facere sunt? Porro dolores nisi aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In pariatur quis officia iure id esse quidem explicabo eum rerum doloribus aliquid, consectetur, neque suscipit facere sunt? Porro dolores nisi aliquid.",
};

const Create = () => {
  const [blogDetails, setBlogDetails] = useState({
    author: "",
    title: "",
    subtitle: "",
    image:"https://images.unsplash.com/photo-1691938670117-5c65ae4c19fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    content: "",
  });

  const handleDetails = (e)=>{
    setBlogDetails({...blogDetails, [e.target.name]:e.target.value})
  }

  const postData = async () => {
    try {
      await axios.post("http://localhost:4000/api/blog", blogDetails);
      console.log("Post request successful"); // You can add a success message here
    } catch (error) {
      console.error("Error posting data:", error); // Handle any errors that might occur
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blogDetails);
    postData();
  }



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
            name="author"
            onChange={handleDetails}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white text-lg font-semibold">Title</label>
          <input
            className="h-[40px] outline-none pl-2 rounded-md"
            type="text"
            name="title"
            onChange={handleDetails}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white text-lg font-semibold">Sub Title</label>
          <input
            className="h-[40px] outline-none pl-2 rounded-md"
            type="text"
            name="subtitle"
            onChange={handleDetails}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-white text-lg font-semibold">Content</label>
          <textarea
            className="outline-none pl-2 rounded-md"
            type="text"
            rows={10}
            name="content"
            onChange={handleDetails}
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-white text-blue-500 px-3 py-2 w-fit rounded-md font-semibold">
            Upload Image
          </button>
          <button className="bg-green-500 text-white px-3 py-2 w-fit rounded-md font-semibold" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
