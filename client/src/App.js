import React from 'react';
import './input.css';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const baseurl = "http://localhost:5000/chat";
  const [prompt, setprompt] = useState("")
  const [answer, setanswer] = useState("Hey There !! Talk to me about Anything")
  const [execTime, setexecTime] = useState("")


  const chat = () => {
    console.log(prompt);
    const start = Date.now();
    axios.post(baseurl, {

      prompt: prompt
    }).then((Response) => {
      if (Response.status = 200) {

        console.log("success");
      }
      console.log(Response.data)

      const end = Date.now();
      console.log(`Execution time: ${end - start} ms`);
      setexecTime(end - start);

      setanswer(Response.data)
      

    })

  };


  return (

    <div className='h-screen  bg-[rgb(218,224,230)]'>
      <div className='flex flex-col ml-[25%] mr-[25%] p-5  '>

        <div className='mt-4 items-center'>
          <form action="" class="flex flex-col mr-3 mt-8 p-1 gap-4">
            <input class="p-1 pl-3 h-12 rounded-xl border-black " type="text" name="prompt" placeholder="write your prompt here" onChange={(e) => {

              setprompt(e.target.value);

            }}></input>

          </form>
          <button class="bg-[#002D74] text-white w-[30%] mt-3 p-2  rounded-2xl" onClick={chat}>Submit</button>

          <div class="container mx-auto flex flex-wrap text-gray-600 mt-6 body-font bg-white rounded-md " >
            <div class="flex  ">
              <div class="p-2 pl-3 ">
                <div class="flex  flex-col">
                  <div class="flex-grow">
                    {/* <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2> */}
                    <p class="leading-relaxed text-base text-md mb-3">{answer}</p>


                  </div>
                </div>
              </div>

            </div>
          </div>

          <p></p>
          <p>execution time: {execTime}ms </p>
        </div>



      </div>

    </div>









  )
}

export default App;
