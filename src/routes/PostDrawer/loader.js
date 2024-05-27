async function postDrawerLoader({ params }) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
}

export default postDrawerLoader
