
import { Link } from "react-router-dom"
import { logo } from "../utils/constant"

import useOnline from "../utils/useOnline"
const Header=()=>{

  const online=useOnline()
    return (
      <div className="head">
       <img className=" logo" src={logo} />
       <ul className="nav">
        <li>{online? "🟢🟢" :" 🔴🔴"}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
       </ul>
      </div>
    )
  }


export default Header


//if we want to write a piece of js code inside jsx   --> {}