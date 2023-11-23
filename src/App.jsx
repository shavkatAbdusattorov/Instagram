import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Reels from './pages/reels/Reels'
import Messages from './pages/messages/Messages'
import Profile from './pages/profile/Profile'
import NotFound from './pages/notfound/NotFound'
import SearchProfile from "./pages/searchProfile/SearchProfile"
import Login from "./pages/Login/Login"
import Regestrition from "./pages/Regeistretion/Regestrition"
import AuthCheck from "./utils/AuthCheck"
import ProtectedRoute from "./utils/ProtectedRoute"

function App() {

  const isRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthCheck>
          <Login />
        </AuthCheck>
      )

    },
    {
      path: "/home",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,

        },
        {
          path: "searchprofile/:id",
          element: <SearchProfile />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "reels",
          element: <Reels />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "profile",
          element: <Profile />,
        },



      ],
    },
    {
      path: "regestrition",
      element: <Regestrition />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={isRouter} />
}

export default App