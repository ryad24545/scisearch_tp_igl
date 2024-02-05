import React, { useState } from "react";
import { IoReaderOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

const BlogList = ({ blogs, title, handleSave }) => {
  return (
    <div className="flex flex-col w-[70%]">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <p className="text-[#204C78] font-[PlusJakatraMedium]">
            {blog.title}
          </p>
          <div className="flex flex-row text-[#577BBC] gap-x-10">
            <p>{blog.author}</p>
            <p>{blog.year}</p>
            <p>{blog.edition}</p>
          </div>

          <div className="flex flex-row gap-x-10 mt-2 mb-2">
            <div className="flex flex-row gap-x-2 items-center">
              <IoReaderOutline />
              <a className="font-[PlusJakatraMedium]" href="#">
                Consulter
              </a>
            </div>
            <a className="text-red-600 font-[PlusJakatraMedium]" href="#">
              [PDF]
            </a>
            <div className="flex flex-row gap-x-2 items-center">
              <FaRegStar />
              <a
                className="font-[PlusJakatraMedium]"
                href="#"
                onClick={() => handleSave(blog)}
              >
                Sauvegarder
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
