import { Link, Outlet, useNavigate } from "react-router-dom";
import DrawerHeader from "../../common/components/DrawerHeader";

function UserTasksDrawer () {
  const navigate = useNavigate()
  return (
    <>
      <DrawerHeader title="Tasks" onClose={() => { navigate('..') }} />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="./" className="text-blue-500 hover:underline">
              Open
            </Link>
          </li>
          <li>
            <Link to="./completed" className="text-blue-500 hover:underline">
              Completed
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default UserTasksDrawer;
