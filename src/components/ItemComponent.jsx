import React, { useState } from "react";
import ImageWithPlaceholder from "./ImageWithPlaceHolder";
import { Link } from "react-router-dom";

const ItemComponent = ({ postBody, postTitle, postId, userId, postImgSrc }) => {

  return (
    <>
      <div className="p-1 border-1 w-[15.5rem] h-auto rounded-xl flex flex-col gap-2 text-[0.9rem]">
        <ImageWithPlaceholder
            src={postImgSrc}
            alt="random image"
            className="w-full h-[200px] rounded-t-xl"
        />
        <div className="p-1.5">
          <div className="flex flex-col gap-1">
            <p>User ID: {userId}</p>
            <p>Title: {postTitle}</p>
            <p className="h-23 overflow-hidden">Body: {postBody}</p>
          </div>
          <Link className="text-[#0000FF]" to={`/item/${postId}`} >Read More...</Link>
        </div>
      </div>
    </>
  );
};

export default ItemComponent;
