


import React, { useState } from 'react'
import ItemList from './ItemList'
import { FaArrowCircleDown } from "react-icons/fa";


const Categeory = (props) => {
    const {title,itemCards} = props.res.card.card

    const [showList,setShowList] = useState(false)


    const handleItem=()=>{

        setShowList(!showList)

    }
    console.log(props)
  return (
    <div className=' w-6/12 mx-auto  shadow-xl m-4 p-4 '>
        <div className=' flex justify-between' onClick={handleItem}>
            <span className=' font-bold text-xl'>{title} ({itemCards.length})</span>
            <span>{showList ? "⬆️" :<FaArrowCircleDown />
            }</span>
        </div>
      {showList &&  <ItemList  items={itemCards}/>}

    </div>
  )
}

export default Categeory


