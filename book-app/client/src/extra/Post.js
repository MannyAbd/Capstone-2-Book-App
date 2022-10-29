import React from 'react'

// const Post = ({post}) => {
//   return (
//     <article>
//         <h2>{post.title}</h2>
//         <p>{post.body} </p>
//         <p>Post ID: {post.id} </p>
//     </article>
//   )
// }

const Book = ({ docs }) => {
    return (
        <article>
            <h2>{docs.title}</h2>

        </article>
    )
}
export default Book