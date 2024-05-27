import { useLoaderData } from "react-router-dom";

function PhotoDrawer () {
  const photo = useLoaderData()

  return (
    <>
      <p className="text-zinc-400">Photo</p>
      <h2 className="text-2xl font-bold capitalize">{photo.title}</h2>
      <div className="mt-8">
        <img src={photo.url} alt={photo.title} />
      </div>
    </>
  )
}

export default PhotoDrawer
