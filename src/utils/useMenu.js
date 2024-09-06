
import { useState,useEffect } from "react"
import { menu_api } from "./constant"


const useMenu=(id)=>{

    const [menu,setMenu]= useState(null)

    useEffect(()=>{

        const fetchData=async()=>{
          const data= await fetch(menu_api+id)
          const res= await data.json()
          setMenu(res)
    
        }
        fetchData()
    
      },[])

      return menu
    



}

export default useMenu