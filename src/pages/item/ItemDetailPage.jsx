import React, { useEffect } from "react";
import ImageWithPlaceholder from "../../components/ImageWithPlaceHolder";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../../slices/postSlice";

const ItemDetailPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
   const { posts, loading } = useSelector(state => state.posts);
   
   useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, posts]);

  const post = posts.find((p) => p.id === parseInt(id));

  if(loading) return <div className="loader-wrapper"><div className="loader"></div></div>
  if(!post) return <p className="text-2xl m-5">Post Not Found!!</p>

  return (
    <>
      <div>
        <h1 className="p-4 text-2xl">Detail Page For Post With ID {post.id}</h1>
        <ImageWithPlaceholder
          src={post.imageSrc}
          alt={"randomImage"}
          className="w-[20rem] h-[15rem] rounded-xl p-4"
        />
        <div className="flex flex-col gap-2 p-4 text-xl">
          <p>
            <b>User ID:</b> {post.userId}
          </p>
          <p>
            <b>Title:</b> {post.title}
          </p>
          <p>
            <b>Body:</b> {post.body}
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemDetailPage;
