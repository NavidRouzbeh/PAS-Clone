import React from 'react';
import { SiUnilever } from "react-icons/si";


function Home() {
  return (
    <div class=" bg-background-blue , w-screen , h-screen , flex justify-center items-center">
        <div class=" bg-box-background , h-4/5 , w-4/5 , max-w-96 , rounded-3xl , flex-row justify-center items-center ">
            <div class= " h-1/2 flex-row justify-center items-center">
                <div class=" h-1/2 flex justify-center items-end">
                <   SiUnilever class="w-2/3 h-2/3" />
                </div>
                <div class=" h-1/2 w-full flex justify-center items-center text-4xl font-bold text-center">
                    در حال حاضر در چه وضعیتی هستید؟
                </div>
            </div>
            <div class=" h-1/2 flex-row justify-center items-center ">
                <div class=" h-1/2 flex justify-center items-center ">
                    <button class="bg-button-green w-3/4 h-1/2 rounded-3xl text-xl font-bold " >
                    در وضعیت خوبی هستم
                    </button>
                </div>
                <div class=" h-1/2 flex justify-center items-start ">
                    <button class="bg-button-red w-3/4 h-1/2 rounded-3xl text-xl font-bold ">
                    نیاز به کمک دارم
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home