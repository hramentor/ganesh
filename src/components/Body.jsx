import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
// import { data } from "./data"


const Body = () => {
  const [resData,setResData]= useState([])
  const [dummy,setDummy]= useState([])
  const [search,setSearch] = useState("")
  //resData=[]
  //setRes  , resData =[20]

  useEffect(()=>{

    const fetchData=async()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const res= await data.json()
      setResData(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

      setDummy(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    

    }

    fetchData()


  },[])
  return (resData.length===0)? <Shimmer/> : (
    <div>
      <div>
        <button onClick={()=>{
          const filterData= resData.filter(each=> each.info.avgRating>4.6)
          setResData(filterData)
          console.log(filterData)
        }}>Top rated Rating</button>
      </div>

      <div>
        <input type="text" onChange={(e)=>{

          setSearch(e.target.value)

        }}/>
        <button onClick={()=>{
          const filter=dummy.filter(each=>each.info.name.toUpperCase().includes(search.toUpperCase()))
          setResData(filter)
          console.log(filter)
        }}>Search</button>
      </div>
    <div className="body">
     
     {
      resData.map(each => <RestaurantCard key={each.info.id}  item={each}/>)
     }

    </div>
    </div>
  )
}

export default Body

//data =[] group of objects 




//resData=[] , dummy=[]
//after api call --> resData=[20] dummy=[20]
//after user search ==> resData= 2 
//after again we are searching => 2-> 