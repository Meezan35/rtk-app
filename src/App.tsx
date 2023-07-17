import React from 'react';
import { useCreatePostMutation, useDeletePostMutation, useGetAllPostQuery , useGetPostByIdQuery, useGetPostByLimitQuery , useUpdatePostMutation } from './services/posts';
import { Post } from './types';



function App() {
  // const responseInfo = useGetAllPostQuery();
  // console.log("resp",responseInfo)
  // const { data, error, isLoading } = useGetAllPostQuery();
  // const { data, error, isLoading } = useGetPostByIdQuery(7);
    // const { data, error, isLoading } = useGetPostByLimitQuery(5);
    // const [deletePost, responseInfo] = useDeletePostMutation();
    const [updatePost, responseInfo] = useUpdatePostMutation();
    const newPost = {
    
      title : 'This is New Title',
      body : "This is new body",
      userId : 1,
  }

  const updatePostData = {
    id : 1,
    title : 'This is Updated  New Title',
    body : "This is new body",
    userId : 1,
}
    console.log("resdekete",responseInfo)

  // console.log("data",data);
  // console.log("error",error);
  // console.log("isload",isLoading)
  return (
    //all and limit
  //   <div className="App">
  //  {error ? (
  //       <>Oh no, there was an error</>
  //     ) : isLoading ? (
  //       <>Loading...</>
  //     ) : data ? (
  //       data.map((post:Post)=>{
  //         return (
  //           <div key={post.id}> {/* Added key prop for React list rendering */}
  //             <h3>{post.id}: {post.title}</h3>
  //             <h4>{post.body}</h4>
  //             <hr />
  //           </div>
  //         );
  //       })
       
  //     ) : null}
  //   </div>

    //getById
  // <div className="id-post">
  //   {
  //     data ? (
  //       <>
  //       <h3>{data.id}: {data.title}</h3>
  //       <h4>{data.body}</h4>
  //       <hr />
  //       </>
  //     ):(<>
  //     <p>error</p>
  //     </>)
  //   }
   
  // </div>

  //DELETE
  // <div className="delete-post">
  //   <h1>Redux RTK</h1>
  //   <button onClick={()=>deletePost(2)}>Delete Posts</button>
  // </div>

  //createpost

  //  <div className="delete-post">
  //   <h1>Redux RTK</h1>
  //   <button onClick={()=>createPost(newPost)}>Add Posts</button>
  // </div>

  //updatepost 

  <div className="delete-post">
  <h1>Redux RTK</h1>
  <button onClick={()=>updatePost(updatePostData)}>Update Posts</button>
</div>
  );
}

export default App;
