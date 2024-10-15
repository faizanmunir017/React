import { useEffect,useState } from "react";


const LifeCycle =()=>
{
    //States defined here
    const [name,setName]=useState("");
    const[count,setCount]=useState(0);


    //Empty dependency array means componentDidMount
    useEffect(()=>{

        console.log("Component has been mounted");


        return()=>{
            console.log("Component Unmounted");  //Unmounting
        }


    },[])


    //no dependency array, Component will run on every render
    useEffect(()=>{ 

        console.log("Component that runs on every render");
    })

    //component will render after every name change
    useEffect(()=>{

        console.log(`Name is : ${name}`);


       return ()=>{

        console.log("Cleanup after name change");

       }


    },[name])


    return (

        <div>
            <h1>Life Cylce Methods with Use Effect</h1>
            <p>{count}</p>
            <p>{name}</p>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <button onClick={()=>setName('React' + Math.floor(Math.random() * 10))}>Name</button>
        </div>
    );
};

export default LifeCycle;