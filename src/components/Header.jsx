
import { Link } from "react-router-dom"
import { logo } from "../utils/constant"

import useOnline from "../utils/useOnline"
const Header=()=>{

  const online=useOnline()
    return (
      <div className=" flex justify-between bg-slate-400">
       <img className="  h-28" src={logo} />
       <ul className=" flex items-center">
        <li className=" px-2 font-bold text-xl">{online? "🟢🟢" :" 🔴🔴"}</li>
        <li className=" px-2 font-bold text-xl"><Link to="/">Home</Link></li>
        <li className=" px-2 font-bold text-xl"><Link to="/about">About</Link></li>
        <li className=" px-2 font-bold text-xl"><Link to="/cart">Cart</Link></li>
        <li className=" px-2 font-bold text-xl"><Link to="/contact">Contact</Link></li>
        <li className=" px-2 font-bold text-xl"><Link to="/login">Login</Link></li>
       </ul>
      </div>
    )
  }


export default Header


//if we want to write a piece of js code inside jsx   --> {}