import { Link, Outlet, useLoaderData } from "react-router-dom";

function PostDrawer () {
  const post = useLoaderData()
  return (
    <>
      <h2 className="text-2xl font-bold capitalize">{post.title}</h2>
      <p className="mt-2">{post.body}</p>
      <p className="mt-4">
        <Link to="./comments" className="text-blue-500 hover:underline">
          View comments
        </Link>
      </p>
      <Outlet />
    </>
  );
}

export default PostDrawer;
