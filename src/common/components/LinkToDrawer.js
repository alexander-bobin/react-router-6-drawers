import { useContext } from "react";
import { DrawerPermanenceContext } from "./DrawerPermanenceContext";
import { Link } from "react-router-dom";

function LinkToDrawer ({ className, ...props }) {
  const { areDrawersTemporary } = useContext(DrawerPermanenceContext)
  return <Link {...props} replace={areDrawersTemporary} className={`text-blue-500 hover:underline ${className}`} />
}

export default LinkToDrawer
