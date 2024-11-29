import React, { useState } from 'react'

const Todo = () => {
    const [data,setData]=useState("")
    const [value,setValue]=useState([])
    const[imp,setIpm]=useState("")
   
    const hanldelSubmit=()=>{
        const newitem={
            content:data,
            color:imp,
        }
        setValue([...value,newitem])

    }
    // console.log(value);
    
  return (
    <div>
        <input type='text'  value={data} onChange={(e)=>setData(e.target.value)} ></input>
        <select  value={imp} onChange={(e)=>setIpm(e.target.value)} >
            <option value="high" >High</option>
            <option value="middle" >Middle</option>
            <option value="low" >Low</option>


        </select>
        <button type='submit' onClick={hanldelSubmit}>Submit</button>
        <div>
            {value && value.map((item)=>(
                <h1 style={{
                    border:"1px solid",
                    color:item.color  ==="high"? "red" : item.color === "middle" ? "orange" :item.color ==="low" ? "green" :"black"
                        
                       
                }}>{item.content}</h1>
            ))}

        </div>
    </div>
  )
}

export default Todo