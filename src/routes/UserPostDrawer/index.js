import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import DrawerHeader from "../../common/components/DrawerHeader";
import TextWithNewLines from "../../common/components/TextWithNewLines";

function UserPostDrawer () {
  const post = useLoaderData()
  const navigate = useNavigate()
  return (
    <>
      <DrawerHeader category="Post" title={post.title} onClose={() => { navigate('..') }} />
      <p><TextWithNewLines text={post.body} /></p>
      <p className="mt-4">
        <Link to="./comments" className="text-blue-500 hover:underline">
          View comments
        </Link>
      </p>
      <Outlet />
    </>
  );
}

export default UserPostDrawer;
