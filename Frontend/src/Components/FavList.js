import React from "react";

const FavList = ({ savedBlogs = [] }) => {
  return (
    <div>
      <h2>Saved Blogs:</h2>
      {savedBlogs.map(savedBlog => (
        <div key={savedBlog.id}>
          <p>{savedBlog.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FavList;
