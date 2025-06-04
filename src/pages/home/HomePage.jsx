import React, { useEffect } from 'react'
import ItemComponent from '../../components/ItemComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../slices/postSlice';

const HomePage = () => {

  const dispatch = useDispatch();
  const {loading, error, posts} = useSelector(state => state.posts)
  console.log(posts);
  
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  return (
    <div>
        <div className='p-3 border-b-1 border-b-[#FFFFFF]'>
            <h1 className='text-xl'>Social Media App</h1>
        </div>
        <div className='px-6 py-3 flex flex-wrap gap-3.5'>
            {
              loading ? <div className='loader-wrapper'><div className='loader'></div></div> :
               posts.map((post, index) => {
                return (
                  <ItemComponent key={index} userId={post.userId} postId={post.id} postBody={post.body} postTitle={post.title} postImgSrc={post.imageSrc} />
                )
              })
            }
        </div>
    </div>
  )
}

export default HomePage
