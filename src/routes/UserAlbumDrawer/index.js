import { useLoaderData, Link, Outlet, useNavigate } from "react-router-dom";
import DrawerHeader from "../../common/components/DrawerHeader";

function UserAlbumDrawer () {
  const album = useLoaderData()
  const navigate = useNavigate()
  return (
    <>
      <DrawerHeader category="Album" title={album.title} onClose={() => navigate('..')} />
      <div className="flex flex-wrap gap-3">
        {album?.photos?.map(photo => {
          return (
            <Link to={`./photo/${photo.id}`} key={photo.id} className="w-14">
              <img src={photo.thumbnailUrl} alt={photo.title} width="100" />
            </Link>
          )
        })}
      </div>
      <Outlet />
    </>
  );
}

export default UserAlbumDrawer;
