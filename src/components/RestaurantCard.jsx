import { image_url } from "../utils/constant"


const RestaurantCard = (props) => {
  const {name, avgRating,cloudinaryImageId,costForTwo,areaName,sla,cuisines} = props.item.info
 
  // console.log(props)
    
  return (
    <div className="res-card">
         <img className="res-img" src={image_url+cloudinaryImageId}/>
           <h3>{name}</h3>
           <div className="rat">
            <p>{avgRating} 🌟 Rating</p>
            <p>{sla.deliveryTime}  mnts</p>
           </div>
           <p>{cuisines[0]}</p>
           <p>💰{costForTwo}</p>
           <p>{areaName}</p>
    </div>
  )
}

export default RestaurantCard