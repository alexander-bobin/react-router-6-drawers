import { useLoaderData, useNavigate } from "react-router-dom";
import CommentsDrawerContents from "../../common/components/CommentsDrawerContents";

function UserPostCommentDrawer () {
  const comments = useLoaderData()
  const navigate = useNavigate()
  return <CommentsDrawerContents comments={comments} onClose={() => navigate('..')} />
}

export default UserPostCommentDrawer;
