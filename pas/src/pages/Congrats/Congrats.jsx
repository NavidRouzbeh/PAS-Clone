import React from 'react'
import { SiUnilever } from "react-icons/si";

function Congrats() {
  return (
    <div class=" bg-background-blue , w-screen , h-screen , flex justify-center items-center">
        <div class=" bg-box-background , h-4/5 , w-4/5 , max-w-96 , rounded-3xl , flex-row justify-center items-center ">
            <div class= " h-1/2 flex-row justify-center items-center">
                <div class="  flex h-full justify-center items-end">
                <   SiUnilever class="w-2/3 h-2/3" />
                </div>
            </div>
            <div class=" h-1/2 text-center flex justify-center items-center text-2xl ">
                <div class=" w-auto h-auto font-bold " >
                    با تشکر از همکاری شما
                </div>
            </div>
        </div>
    </div>
  )
}

export default Congrats