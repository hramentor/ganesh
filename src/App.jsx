import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import {createBrowserRouter, Outlet} from "react-router-dom"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Login from "./components/Login.jsx"
import Cart from "./components/Cart.jsx"
import Menu from "./components/Menu.jsx"
// import Count from "./components/Count.jsx"

function App() {
  return (
    <>
      <Header/>
      
      <Outlet/>
   
    </>
  )
}

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/menu/:id",
        element:<Menu/>
      }
    ]
  }
])


// const appRouter= createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/cart",
//     element:<Cart/>
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   },
//   {
//     path:"/login",
//     element:<Login/>
//   }
// ])

export default appRouter
