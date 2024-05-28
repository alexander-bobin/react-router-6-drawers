import { useLoaderData, Outlet, Link } from "react-router-dom";

function UserPage () {
  const user = useLoaderData()
  return (
    <>
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <div className="mt-2">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Posts</h3>
        <ul className="mt-2 list-disc">
          {user?.posts?.map(post => {
            return (
              <li key={post.id} className="ml-4">
                <Link to={`./post/${post.id}`} className="text-blue-500 hover:underline capitalize">
                  {post.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Albums</h3>
        <ul className="mt-2 list-disc">
          {user?.albums?.map(album => (
            <li key={album.id} className="ml-4">
              <Link to={`./album/${album.id}`} className="text-blue-500 hover:underline capitalize">
                {album.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* For drawers */}
      <Outlet />
    </>
  );
}

export default UserPage
