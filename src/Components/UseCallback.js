import React,{useState,useCallback}from 'react';
//child  component with an increment button
function IncrementButton({onIncrement}){
    console.log("IncrementButton component re-render");
    return(
        <button onClick={onIncrement}>Increment Count</button>
    );
    
}
//parent component managing the count
function ParentComponent(){
    const[count,setCount]=useState(0);
    //Memoized function to increment count
    const handleIncrement=useCallback(()=>{
        setCount((prevCount)=>prevCount+1);
    },[]);
    return(
        <div>
            <h1>Count:{count}</h1>
            <IncrementButton onIncrement={handleIncrement}/>
        </div>
    );
}
export default ParentComponent;