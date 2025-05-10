import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
// import Home from './components/home.jsx'
import About from './components/About.jsx'
import Contact from './components/contactUs.jsx'
import SellHere from './components/SellHere.jsx'
import HomeP from './components/HomeP.jsx'



const route = createBrowserRouter([{
  path:'/',
  element: <Layout/>,
  children:[

    {
      path:'/',
      element: <HomeP/>
    },
    {
      path:'/About',
      element: <About/>
    },
    {
      path:'/ContactUs',
      element: <Contact/>
    },
   
    {
      path: '/SellHere',
      element:<SellHere/>,
      
    },

     // Catch-all route for unmatched paths
      {
        path: '*',
        element: <HomeP/>,
      },

  ]
}])

  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
