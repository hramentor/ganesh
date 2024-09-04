import { useEffect, useState } from "react"

const Count = () => {
    // let count=0

    //count is normal javascript variable , that is why we need to manage state  , we have to use Hook 
    //useState --> converts a normal js variable to state variable 

    const [count, setCount] = useState(0)
    const [value,setValue] = useState(true)
  
//value= true , false , false
    console.log("above")
    useEffect(()=>{
      console.log("Effect")
    },[value])

    console.log("below")
    //count=0
   
    //we should have to pass the initial value of any data type 
    //helper function used to update the count 
    //when ever state variable updates react will rerender 


    const handleCount=()=>{
       setCount(count+1)
        console.log(count)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleCount}>Click</button>
        <h1>{value ? "html":"React"}</h1>
        <button onClick={()=>{
          setValue(!value)
        }}>click</button>
        {
          console.log("Render")
        }
    </div>
  )
}

export default Count