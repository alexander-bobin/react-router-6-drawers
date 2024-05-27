async function photoDrawerLoader ({ params }) {
  return fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`)
}

export default photoDrawerLoader
