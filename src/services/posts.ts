import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../types'
import { buildQueries } from '@testing-library/react'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery : fetchBaseQuery({
       baseUrl : 'https://jsonplaceholder.typicode.com/' 
    }),

    endpoints : (builder)=> ({
       getAllPost : builder.query<Post[],void>({
        query : ()=>({
            url : 'posts',
            method : 'GET'
        })
       }),
       getPostById : builder.query<Post,number> ({
        query : (id:number)=>{
            console.log("id",id)
            return {
                url : `posts/${id}`,
                method : 'GET'
            }
        
        }
    }),

    getPostByLimit : builder.query<Post[],number>({
        query : (num:number) => {
            console.log("limit num",num)
            return {
                url : `posts?_limit=${num}`,
                method : 'GET'  
            }
        }
    }),

    DeletePost : builder.mutation<Post,number> ({
        query : (id:number)=>{
            console.log("deleted id",id)
            return {
                url : `posts/${id}`,
                method : 'DELETE'
            }
        
        }
    }),

    createPost : builder.mutation({
        query : (newPost:Post)=> {
            console.log("createpost,")
            return {
                url : 'posts',
                method : 'POST',
                body : newPost,
                headers : {
                    'Content-type' : 'application/json; charset=UTF-8',
                }  
            }
        }
    }),

    updatePost : builder.mutation({
        query : (updatePostData:Post)=> {
            console.log("updatePost,",updatePostData)
            const {id}= updatePostData;
            console.log("idddd",id)

            return {
                url : `posts/${id}`,
                method : 'PUT',
                body : updatePostData,
                headers : {
                    'Content-type' : 'application/json; charset=UTF-8',
                }  
            }
        }
    }),

    }),


   

 


})

export const {useGetAllPostQuery,useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation} = postApi