import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import {createBrowserRouter, Outlet} from "react-router-dom"
// import About from "./components/About.jsx"
// import Contact from "./components/Contact.jsx"
// import Login from "./components/Login.jsx"
// import Cart from "./components/Cart.jsx"
import Menu from "./components/Menu.jsx"
import { lazy, Suspense } from "react"
// import Count from "./components/Count.jsx"

const About=lazy(import("./components/About.jsx"))
const Cart=lazy(import("./components/Cart.jsx"))
const Login=lazy(import("./components/Login.jsx"))
const Contact=lazy(import("./components/Contact.jsx"))

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
        element:<Suspense fallback={<h1>About Componet is Loading</h1>}><About/></Suspense>
      },
      {
        path:"/cart",
        element:<Suspense fallback={<h1>About Componet is Loading</h1>}><Cart/></Suspense>
      },
      {
        path:"/contact",
        element:<Suspense fallback={<h1>About Componet is Loading</h1>}><Contact/></Suspense>
      },
      {
        path:"/login",
        element:<Suspense fallback={<h1>About Componet is Loading</h1>}><Login/></Suspense>
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
