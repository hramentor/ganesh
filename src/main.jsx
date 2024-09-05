
import ReactDOM from 'react-dom/client'

import './index.css'
import "./App.css"
import appRouter from './App.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

<RouterProvider router={appRouter}/>

)
