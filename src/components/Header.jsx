
import { Link } from "react-router-dom"


const Header=()=>{
    return (
      <div className="head">
       <img className=" logo" src="https://static.vecteezy.com/system/resources/previews/008/687/818/original/food-delivery-logo-free-vector.jpg" />
       <ul className="nav">
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