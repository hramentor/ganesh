
import { useParams } from "react-router-dom"


import useMenu from "../utils/useMenu"
import Categeory from "./Categeory"

const Menu = () => {

 

  const {id}= useParams()

 
  const menu=useMenu(id)


  if (menu==null) return <h2>Menu is loading</h2>

  const {name,costForTwoMessage} = menu.data.cards[2].card.card.info
   
  const cate=menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(each=>each.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 // console.log(cate)


  return (
    <div className=" text-center">
      <h1 className=" font-bold my-5 text-2xl">{name}</h1>
      <h3 className=" font-bold">{costForTwoMessage}</h3>

      
        {
          cate.map(each=> <Categeory key={each.card.card.title} res={each}/>)
        }
      

    </div>
  )
}

export default Menu