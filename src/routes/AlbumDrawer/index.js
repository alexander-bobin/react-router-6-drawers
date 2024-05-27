import { useLoaderData, Link, Outlet } from "react-router-dom";

function AlbumDrawer () {
  const album = useLoaderData()
  return (
    <>
      <p className="text-zinc-400">Album</p>
      <h2 className="text-2xl font-bold capitalize">{album.title}</h2>
      <div className="mt-8 flex flex-wrap gap-3">
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

export default AlbumDrawer;
