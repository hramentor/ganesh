import { image_url } from "../utils/constant"


const RestaurantCard = (props) => {
  const {name, avgRating,cloudinaryImageId,costForTwo,areaName,sla,cuisines} = props.item.info
 
  // console.log(props)
    
  return (
    <div className=" h-[340px] w-[240px] m-4 p-4 rounded-xl bg-slate-300 hover:bg-blue-300">
         <img className="  h-[150px] w-[240px] rounded-xl" src={image_url+cloudinaryImageId}/>
           <h3>{name}</h3>
           <div className=" flex">
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