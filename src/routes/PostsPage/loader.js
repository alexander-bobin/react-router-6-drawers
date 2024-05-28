async function postsPageLoader () {
  return fetch('https://jsonplaceholder.typicode.com/posts')
}

export default postsPageLoader;
