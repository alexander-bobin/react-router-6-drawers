import { useLoaderData, useNavigate } from "react-router-dom";
import CommentsDrawerContents from "../../common/components/CommentsDrawerContents";

function UserPostCommentsDrawer () {
  const comments = useLoaderData()
  const navigate = useNavigate()
  // Note: Here we are using a shared drawer contents
  return <CommentsDrawerContents comments={comments} onClose={() => navigate('..')} />
}

export default UserPostCommentsDrawer;
