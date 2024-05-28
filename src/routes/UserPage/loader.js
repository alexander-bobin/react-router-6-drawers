async function userPageLoader ({ params }) {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`)
  const albums = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`)
  const userData = await user.json()
  const postsData = await posts.json()
  const albumsData = await albums.json()
  return {
    ...userData,
    posts: postsData,
    albums: albumsData
  }
}

export default userPageLoader;
