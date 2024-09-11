


import React from 'react'
import { image_url } from '../utils/constant'

const ItemList = (props) => {
  const {items} = props
  return (
    <div>
        {
            items.map(item=> (
                <div className=' flex justify-between p-2 m-2 border-gray-200 border-b-2 text-left'>
                      <div className=' w-9/12'>
                        <div className=' py-2'>
                            <span>{item.card.info.name}</span>
                            <span>{item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100 }</span>
                        </div>
                        <p className=' text-xs'>{item.card.info.description}</p>
                      </div>
                     <div className='w-3/12'>
                     <button className=' p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute'>Add +</button>
                     {
                        item.card.info.imageId && <img className=' rounded-2xl h-[120px] w-[150px]' src={image_url+item.card.info.imageId} />
                     }
                     </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default ItemList