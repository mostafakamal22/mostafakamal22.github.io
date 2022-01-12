import {FaArrowDown, FaArrowUp, FaPause, FaPlay}  from "react-icons/fa"
import { BiRefresh } from "react-icons/bi"
import { useState, useEffect } from "react"
import alarm from "./assetes/clock.wav"

function App() {
  //state for break length 
  const [breakLength, setBreakLength] = useState(5)

  //state for session length 
  const [sessionLength, setSessionLength] = useState(25)

  //state for timer ,min and sec
  const [timer, setTimer] = useState(false)
  const [min, setMin] = useState(25)
  const [sec, setSec] = useState(0)

  //state for [session/break] time label
  const [label, setLabel] = useState("Session")

  //state for dark/light mode toggling 
  const [isDark, setIsDark] = useState(false)

  //handling decrease break/session length
  const handleDecrease = (WhatToDecrease)=>{
    if(timer===false) {
      if(WhatToDecrease==="break") {
        breakLength===1?//check for min value 
        setBreakLength(breakLength):// if the value = 1 >> do not decrease
        setBreakLength(breakLength-1) //if not decrease length value

        if(label==="Break" && breakLength!==1){
          setMin(breakLength-1)//resetting timer too!
          setSec(0)
        }
        
      }else{
        sessionLength===1?//check for min value 
        setSessionLength(sessionLength): // if the value = 1 >> do not decrease
        setSessionLength(sessionLength-1)//if not decrease length value

        if(label==="Session" && sessionLength!== 1){
          setMin(sessionLength-1)//resetting timer too!
          setSec(0)
        } 
      }
    }
  }

  //handling increase break/session length
  const handleIncrease = (WhatToIncrease)=>{
    if(timer===false){
      if(WhatToIncrease==="break") {
        breakLength===60?//check for max value 
        setBreakLength(breakLength): // if the value = 60 >> do not increase
        setBreakLength(breakLength+1)//if not increase length value
        
        if(label==="Break" && breakLength!==60){
          setMin(breakLength+1)//resetting timer too!
          setSec(0)
        }

      }else{
        sessionLength===60?//check for max value 
        setSessionLength(sessionLength): // if the value = 60 >> do not increase
        setSessionLength(sessionLength+1)//if not increase length value
        
        if(label==="Session" && sessionLength!==60){
          setMin(sessionLength+1)//resetting timer too!
          setSec(0)
        }
      }
    }
  }

  //handle clicking reset buttun 
  const handleReset = ()=> {
    //turn off the timer, and stopping alarm if was palying
    setTimer(false)
    document.getElementById('beep').pause()
    document.getElementById('beep').currentTime = 0
    
    //set all value to default
    setSessionLength(25)
    setBreakLength(5)
    setMin(25)
    setSec(0)
  }

  //counter  process
  useEffect(() => {

    //function for countdown
    let countdown = setInterval(() => {
      //checking if timer is on
      if(timer===true){ 

        //updating counter[min-sec] values every 1 second
        sec===0?setSec(59):setSec(sec-1)
        sec===0&&setMin(min-1);

        //if countdown is over
        if(min===0&&sec===0){
          //check on which time was counting
          switch (label) {
            //in case of session time is the one was over
            case "Session":
              //start break time
              document.getElementById('beep').play()
              setMin(breakLength)
              setSec(0)
              setLabel("Break")
              break
            //in case of break time was over
            case "Break":
              //start session time
              document.getElementById('beep').play()
              setMin(sessionLength)
              setSec(0)
              setLabel("Session")
              break
            default:
              return
          }
        }
      }
    }, 1000)

    //clean effect 
    return ()=> clearInterval(countdown)

  })

  //let's toggle dark/light mode here 
  const handleToggle = ()=> {
    //set state for new mode 
    setIsDark(isDark?false:true)

    if(isDark){
      //turn light mode on
      document.getElementsByTagName("html")[0].classList.remove('dark')
      //btn transition 
      document.getElementById('toggle').style.transform= "translate(0)"
    }else{
      //turn dark mode on
      document.getElementsByTagName("html")[0].classList.add('dark')
       //btn transition
       document.getElementById('toggle').style.transform= "translate(100%)"
    }
  } 


  return (
    <div
      style={{userSelect:"none"}} 
      className="flex justify-center items-center h-screen font-[100] font-roboto bg-gradient-to-b from-slate-400 dark:from-black to-slate-50 dark:to-slate-900 text-black dark:text-slate-300 transition-all duration-[600ms] ease-in-out">
        <div className="max-w-sm flex flex-wrap px-2 py-4 sm:p-4 md:p-5 rounded-lg justify-center items-center drop-shadow-lg">
            <div className="basis-full text-center">
              <h1 className="text-4xl sm:text-5xl my-4">25+5 Clock</h1>
            </div>

            <div
              className="basis-full sm:basis-1/2 flex flex-wrap justify-center text-xl py-3" 
              id="break-label">

              <h2 className="basis-full text-center sm:text-2xl mb-2">Break Length</h2>
              <button 
                className="basis-1/3 text-right"
                id="break-decrement"
                onClick={(()=>handleDecrease("break"))}>  
                <FaArrowDown 
                  title="decrease break time" 
                  className="text-[25px] ml-auto"/>
              </button>
              <span 
                className="basis-1/3 text-center"
                id="break-length">
                {breakLength}
              </span>
              <button 
                className="basis-1/3 text-left"
                id="break-increament"
                onClick={(()=>handleIncrease("break"))}>
                <FaArrowUp 
                  className=" text-[25px]"
                  title="increase break time"  />
              </button>
            </div>

            <div 
            className="basis-full sm:basis-1/2 flex flex-wrap justify-center text-xl py-3"
            id="session-label">
              <h2 className="basis-full text-center sm:text-2xl mb-2">Session Length</h2>
              <button 
              className="text-right"
              id="session-decrement">
                <FaArrowDown 
                title="decrease session time" 
                className="ml-auto  text-[25px]"
                onClick={(()=>handleDecrease("session"))}/>
              </button>
              <span 
              className="basis-1/3 text-center"
              id="session-length">
                {sessionLength}
              </span>
              <button 
              className="text-left"
              id="session-increament"
              onClick={(()=>handleIncrease("session"))}>
                <FaArrowUp 
                className="text-[25px]"
                title="increase session time" />
              </button>
            </div>

            <div 
            className="basis-full flex flex-wrap justify-center"
            id="time-label">

              <div className="basis-full text-center mt-4">
                
                <span 
                  id="timer-label"
                  className={`block text-2xl ${(min<1&&sec>=0)&&"text-red-800"}`}>
                  {label} Time
                </span>

                <div 
                  className={`flex items-center justify-center border-4 rounded-full border-slate-900 dark:border-gray-200 text-3xl w-[150px] h-[150px] my-4 mx-auto ${(min<1&&sec>=0)&&"text-red-800"}`}
                  id="time-left">
                  {(min<10?"0":"")+min+":"+(sec<10?"0":"")+sec}
                </div>                
              </div>

              <button 
              className="flex justify-end items-center text-xl"
              id="start_stop"
              onClick={(()=>setTimer(!timer))}>
                <FaPlay title="Start Timer"/>
                <FaPause title="Pause Timer"/>
              </button>

              <button 
              className="text-3xl font-bold"
              id="reset"
              onClick={()=> handleReset()}>
                <BiRefresh title="Reset Session"/>
              </button>
            </div>

            {/* alarm audio */}
            <audio id="beep" src={alarm}>
            </audio>

            {/* Toggle Dark/light mode button */}
            <div className="basis-full flex justify-center flex-wrap items-center my-4">
              <span
                className="basis-full text-center mb-2 text-black dark:text-slate-100">
                {isDark===true?"Light Mode":"Dark Mode"}
              </span>

              <button 
                className="h-[25px] w-[50px] rounded-[25px] bg-black dark:bg-slate-100 border-[1px] border-black dark:border-slate-100"
                onClick={()=> handleToggle()} 
              >
                    <span 
                      className="block w-1/2 h-full bg-slate-100 dark:bg-black rounded-full transition-all duration-[400ms] ease-in-out"
                      id="toggle">
                    </span>
              </button>
            </div>

            <p
              className="text-black dark:text-slate-100 text-[10px]">
                Developed by --- Mostafa Kamal ---
            </p>
            
        </div>
    </div>
  )
}

export default App;
