import { useLoaderData } from "react-router-dom";

function CommentDrawer () {
  const comments = useLoaderData()

  return (
    <>
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul className="mt-2">
        {comments.map(comment => (
          <li key={comment.id} className="mt-6">
            <p>{comment.body}</p>
            <p className="italic text-zinc-400">Name: {comment.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentDrawer;
