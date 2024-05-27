import { Outlet, useNavigate } from "react-router-dom";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import { Drawer as MuiDrawer } from "@mui/material";

const DrawerRouteContext = createContext();
const DrawerRouteContextProvider = DrawerRouteContext.Provider;

export default function RoutedDrawer({ id }) {
  const navigate = useNavigate();
  // This state is set by the RoutedDrawer.Open and
  // RoutedDrawer.Close
  const [isOpen, setIsOpen] = useState(false);
  // This let's us maintain a good closing animation.
  // If that's not important to us, we can avoid some
  // complexity.
  const sizeRef = useRef("small");

  return (
    <DrawerRouteContextProvider
      value={{
        setIsOpen,
        setSize: (size) => {
          sizeRef.current = size;
        },
        sizeRef
      }}
    >
      <div id={id}>
        <MuiDrawer
          anchor="right"
          closeAfterTransition
          // `keepMounted` is vital here. Without it, our Outlet won't
          // be mounted and so nothing will be rendered.
          keepMounted
          onClose={() => navigate(".")}
          open={isOpen}
        >
          <div className="m-6">
            <Outlet />
          </div>
        </MuiDrawer>
      </div>
    </DrawerRouteContextProvider>
  );
}

// This component is used to size the drawer correctly.
RoutedDrawer.SizingContainer = function RoutedDrawerLayout({
  children,
  size = "small"
}) {
  return (
    <div style={{ width: size === "small" ? "250px" : "350px" }}>
      {children}
    </div>
  );
};

// If this component is rendered as a Route layout element,
// it will ensure the parent Drawer is opened.
RoutedDrawer.Open = function RoutedDrawerOpen({ size = "small" }) {
  const { setIsOpen, setSize } = useContext(DrawerRouteContext);

  useEffect(() => {
    setSize(size);
    setIsOpen(true);
  }, [setIsOpen, setSize, size]);

  return (
    <RoutedDrawer.SizingContainer size={size}>
      <Outlet />
    </RoutedDrawer.SizingContainer>
  );
};

// If this component is rendered as a Route layout element,
// it will ensure the parent Drawer is closed. This is a
// terminal component in the route config.
//
// It will always render an empty Drawer Layout component sized
// to whatever the last real Drawer Layout's size was. This helps
// ensure the drawer's width is maintained while closing, which
// in turn, ensures the closing animation remains smooth.
RoutedDrawer.Close = function RoutedDrawerClosed() {
  const { setIsOpen, sizeRef } = useContext(DrawerRouteContext);

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return <RoutedDrawer.SizingContainer size={sizeRef.current} />;
};
