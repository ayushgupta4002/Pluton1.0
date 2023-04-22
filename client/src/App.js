import React from 'react';
import './input.css';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const baseurl="http://localhost:5000/chat";
  const [prompt, setprompt] = useState("")
  const [answer, setanswer] = useState("")
  const [execTime,setexecTime]=useState("")


  const chat=()=>{
    console.log(prompt);
    const start = Date.now();
    axios.post(baseurl, {
     
        prompt: prompt
    }).then((Response)=>{
        if (Response.status=200){
 
       console.log("success");
        }
        console.log(Response.data)
        
       const end = Date.now();
       console.log(`Execution time: ${end - start} ms`);
       setexecTime(end-start);
       
        setanswer(Response.data)
        
    })
    
};


  return (
    <div>
    <form action="" class="flex flex-col mr-3 mt-8 p-1 gap-4">
                        <input class="p-1 pl-3 h-12 rounded-xl  " type="text" name="prompt" placeholder="Ewrite your prompt here" onChange={(e)=>{

                 setprompt(e.target.value);

                        }}></input>
                               
                        </form>
                        <button class="bg-[#002D74] text-white w-[95%] mt-3 p-2  rounded-2xl" onClick={chat}>Submit</button>
                        
                        <p>this is my answer : {answer}</p>
                        <p>execution time is {execTime} ms</p>
                        </div>
                            

 
  )
}

export default App;
