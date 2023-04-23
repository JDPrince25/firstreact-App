import React from "react"

export default function Counter(){


    const [count,setcount] = React.useState(0)
    function incrementCounter(){
        //count = count + 1
        setcount(count + 1)
        console.log(count)
    }
    return(
        <div>
            <h1>Counter</h1>

            <h2>Current value of count is: {count}</h2>
            <button onClick={count}>Click to increment counter</button>
        </div>
        
    )
}