import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Read = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state.blog;
  console.log(location);
  let date = new Date();


  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/delete/${id}`);
      console.log("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
      // You can provide user-friendly error messages here or take other actions as needed.
    }
  };
  
  const handleDelete = (id) => {
    deleteBlog(id);
    setTimeout(() => {
        navigate("/")
    }, 1000);
  };

  const handleEdit = (id)=>{
    navigate("/create", {state:"hi"})
  }
  

  return (
    <div className="md:px-20 px-3 py-5 w-screen">
      <div className="flex justify-between">
      <h1 className="md:text-[40px] text-[30px] font-bold">{blog.title}</h1>
      <div className="md:flex gap-5 hidden">
        <button className="bg-red-500 text-white h-fit px-3 py-2 rounded-md">Edit</button>
        <button className="bg-green-500 text-white h-fit px-3 py-2 rounded-md" onClick={()=>handleDelete(blog.id)}>Delete</button>
      </div>
      </div>
      <h2 className="md:text-[25px] text-[22px] text-gray-600 md:text-left text-justify">{blog.subtitle}</h2>
      <div className="flex justify-between items-center my-5">
        <span>{date.toDateString()}</span>
        <span>{blog.author}</span>
      </div>
      <img
        className="w-full h-[300px] object-cover"
        src={blog.image}
        alt={blog.title}
      />
      <p className="text-[18px] text-justify mt-10">
        <b className="md:text-[50px] text-[40px]">{blog.content.charAt(0).toUpperCase()}</b>
        {blog.content.slice(1)}
      </p>
    </div>
  );
};

export default Read;
