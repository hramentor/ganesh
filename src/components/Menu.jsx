
import { useParams } from "react-router-dom"


import useMenu from "../utils/useMenu"

const Menu = () => {

 

  const {id}= useParams()

 
  const menu=useMenu(id)


  if (menu==null) return <h2>Menu is loading</h2>

  const {name,costForTwoMessage} = menu.data.cards[2].card.card.info


  return (
    <div>
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
    </div>
  )
}

export default Menu