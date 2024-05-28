import { Link, useLoaderData } from "react-router-dom";

function PostList ({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`./${post.id}`} className="text-blue-500 hover:underline">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function PostsPage () {
  const posts = useLoaderData()
  return (
    <>
      <h2 className="text-2xl font-bold">Posts</h2>
      <div className="mt-4">
        <PostList {...{ posts }} />
      </div>
    </>
  );
}

export default PostsPage
