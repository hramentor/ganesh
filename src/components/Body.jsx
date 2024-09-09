import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { Link } from "react-router-dom"
import Shimmer from "./Shimmer"
// import { data } from "./data"
import { api } from "../utils/constant"
import useOnline from "../utils/useOnline"


 
const Body = () => {
  const [resData,setResData]= useState([])
  const [dummy,setDummy]= useState([])
  const [search,setSearch] = useState("")
  const online=useOnline()
  //resData=[]
  //setRes  , resData =[20]

  useEffect(()=>{

    const fetchData=async()=>{
      const data= await fetch(api)
      const res= await data.json()
      setResData(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

      setDummy(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    

    }

    fetchData()


  },[])

  
  if (online===false) return <h1>Seems like you are offline please check your internet conncetcion</h1>
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
    <div className=" flex flex-wrap">
     
     {
      resData.map(each =><Link to={"/menu/"+each.info.id}><RestaurantCard key={each.info.id}  item={each}/></Link> )
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


//DOM --> document object model  


//it will create virtual representation of actual html page 

