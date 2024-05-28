import { Outlet, Link } from "react-router-dom";
import { DrawerPermanenceProvider } from "../common/components/DrawerPermanenceContext";
import DrawerStatus from "../common/components/DrawerStatus";

function AppLayout () {
  return (
    <DrawerPermanenceProvider>
      <div className="m-10">
        <div className="flex items-center justify-between">
          <div>
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
                <li>
                  <Link to="/posts" className="text-blue-500 hover:underline">
                    Posts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <DrawerStatus />
        </div>
        <div className="mt-12">
          <Outlet />
        </div>
      </div>
    </DrawerPermanenceProvider>
  );
}

export default AppLayout
