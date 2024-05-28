import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DrawerPermanenceContext } from "../components/DrawerPermanenceContext";

function useNavigateFromDrawer() {
  const navigate = useNavigate()
  const { areDrawersTemporary } = useContext(DrawerPermanenceContext)
  return useCallback((path) => {
    navigate(path, { replace: areDrawersTemporary })
  }, [navigate, areDrawersTemporary])
}

export default useNavigateFromDrawer
