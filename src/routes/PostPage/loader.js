async function postPageLoader ({ params }) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const postData = await post.json()

  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`)
  const userData = await user.json()

  return {
    ...postData,
    user: userData,
  }
}

export default postPageLoader;
