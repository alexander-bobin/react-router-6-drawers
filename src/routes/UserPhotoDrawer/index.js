import { useLoaderData, useNavigate } from "react-router-dom";
import DrawerHeader from "../../common/components/DrawerHeader";

function UserAlbumPhotoDrawer () {
  const photo = useLoaderData()
  const navigate = useNavigate()
  return (
    <>
      <DrawerHeader category="Photo" title={photo.title} onClose={() => navigate('..')} />
      <img src={photo.url} alt={photo.title} />
    </>
  )
}

export default UserAlbumPhotoDrawer
