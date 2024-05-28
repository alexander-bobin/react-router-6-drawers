import { Outlet, Link } from "react-router-dom";

function AppLayout () {
  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold">
        Routed Drawers application
      </h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/users" className="text-blue-500 hover:underline">
              Users
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-12">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout
