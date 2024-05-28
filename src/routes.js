import { Route, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './routes/AppLayout'
import RoutedDrawer from './common/components/RoutedDrawer'

import HomePage from './routes/HomePage'

import UsersPage from './routes/UsersPage'
import usersPageLoader from './routes/UsersPage/loader'
import UserPage from './routes/UserPage'
import userPageLoader from './routes/UserPage/loader'

import UserPostDrawer from './routes/UserPostDrawer'
import userPostDrawerLoader from './routes/UserPostDrawer/loader'
import UserPostCommentDrawer from './routes/UserPostCommentDrawer'
import userPostCommentDrawerLoader from './routes/UserPostCommentDrawer/loader'
import UserAlbumDrawer from './routes/UserAlbumDrawer'
import userAlbumDrawerLoader from './routes/UserAlbumDrawer/loader'
import UserAlbumPhotoDrawer from './routes/UserAlbumPhotoDrawer'
import userAlbumPhotoDrawerLoader from './routes/UserAlbumPhotoDrawer/loader'
import UserTasksDrawer from './routes/UserTasksDrawer'

import UserTasksOpenDrawerTab from './routes/UserTasksOpenDrawerTab'
import userTasksOpenDrawerTabLoader from './routes/UserTasksOpenDrawerTab/loader'
import UserTasksCompleteDrawerTab from './routes/UserTasksCompleteDrawerTab'
import userTasksCompleteDrawerTabLoader from './routes/UserTasksCompleteDrawerTab/loader'

function asRoutedDrawer (routeElement, { size } = { size: 'medium '}) {
  return (
    <Route element={<RoutedDrawer />}>
      <Route index element={<RoutedDrawer.Close />} />
      <Route element={<RoutedDrawer.Open size={size} />}>
        {routeElement}
      </Route>
    </Route>
  )
}

const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/users">
      <Route index element={<UsersPage />} loader={usersPageLoader} />

      <Route path=":userId" element={<UserPage />} loader={userPageLoader}>

        {asRoutedDrawer(
          <Route path="post/:postId" element={<UserPostDrawer />} loader={userPostDrawerLoader}>
            {asRoutedDrawer(
              <Route path="comments" element={<UserPostCommentDrawer />} loader={userPostCommentDrawerLoader} />,
              { size: 'small' }
            )}
          </Route>
        )}

        {asRoutedDrawer(
          <Route path="album/:albumId" element={<UserAlbumDrawer />} loader={userAlbumDrawerLoader}>
            {asRoutedDrawer(
              <Route path="photo/:photoId" element={<UserAlbumPhotoDrawer />} loader={userAlbumPhotoDrawerLoader} />,
              { size: 'large' }
            )}
          </Route>
        )}

        {asRoutedDrawer(
          <Route path="tasks" element={<UserTasksDrawer />}>
            <Route index element={<UserTasksOpenDrawerTab />} loader={userTasksOpenDrawerTabLoader} />)
            <Route path="completed" element={<UserTasksCompleteDrawerTab />} loader={userTasksCompleteDrawerTabLoader} />)
          </Route>
        )}
      </Route>
    </Route>
  </Route>
)

export default routes
