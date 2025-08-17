
import { Outlet, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Register from './compoents/form/Register'
import Login from './compoents/form/Login'
import Navbar from './compoents/global/Navbar'
import VerifyOTP from './compoents/form/VerifyOTP'
function App() {
  // <Route path="/" element={<Home/>}/>
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact-us",
          element: <ContactUs />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path:"/verify-otp",
      element:<VerifyOTP/>
    }
    ,
  

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
