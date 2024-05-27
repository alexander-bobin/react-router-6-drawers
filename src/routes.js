import { Route, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './routes/AppLayout'
import Home from './routes/Home'
import Users from './routes/Users'
import usersLoader from './routes/Users/loader'
import User from './routes/User'
import userLoader from './routes/User/loader'
import RoutedDrawer from './components/RoutedDrawer'
import PostDrawer from './routes/PostDrawer'
import postDrawerLoader from './routes/PostDrawer/loader'
import CommentsDrawer from './routes/CommentsDrawer'
import commentsDrawerLoader from './routes/CommentsDrawer/loader'
import AlbumDrawer from './routes/AlbumDrawer'
import albumDrawerLoader from './routes/AlbumDrawer/loader'
import PhotoDrawer from './routes/PhotoDrawer'
import photoDrawerLoader from './routes/PhotoDrawer/loader'

function asRoutedDrawer (routeElement, { size } = { size: 'medium '}) {
  return (
    <Route element={<RoutedDrawer/>}>
      <Route index element={<RoutedDrawer.Close />} />
      <Route element={<RoutedDrawer.Open size={size} />}>
        {routeElement}
      </Route>
    </Route>
  )
}

const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/users">
      <Route index element={<Users />} loader={usersLoader} />

      <Route path=":userId" element={<User />} loader={userLoader}>

        {asRoutedDrawer(
          <Route path="post/:postId" element={<PostDrawer />} loader={postDrawerLoader}>
            {asRoutedDrawer(
              <Route path="comments" element={<CommentsDrawer />} loader={commentsDrawerLoader} />,
              { size: 'small' }
            )}
          </Route>
        )}

        {asRoutedDrawer(
          <Route path="album/:albumId" element={<AlbumDrawer />} loader={albumDrawerLoader}>
            {asRoutedDrawer(
              <Route path="photo/:photoId" element={<PhotoDrawer />} loader={photoDrawerLoader} />,
              { size: 'large' }
            )}
          </Route>
        )}
      </Route>
    </Route>
  </Route>
)

export default routes
