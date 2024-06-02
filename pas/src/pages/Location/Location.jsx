import React from 'react';
import TextArea from '../../Components/TextArea';

function Location() {
  return (
    <div class=" bg-background-blue , w-screen , h-screen , flex justify-center items-center">
    <div class=" bg-box-background , h-4/5 , w-4/5 , max-w-96 , rounded-3xl , flex-row justify-center items-center ">
        <div class= " h-2/5 flex-row justify-center items-center">
            <div class=" h-1/4 flex justify-center items-end font-bold text-black ">
                موقعیت شما در نقشه
            </div>
            <div class=" h-3/4 w-full flex justify-center items-center text-xl font-bold text-center">
                
            </div>
        </div>
        <div class=" flex h-1/5 w-full px-12 ">
            <div class=" flex-col w-full items-center ">
                <h1 class=" text-right font-bold text-black " >:آدرس شما</h1>
                <TextArea />
            </div>
        </div>
        <div class=" h-2/5 flex-row justify-center items-center ">
            <div class=" h-1/2 flex justify-center items-center ">
                <button class="bg-button-yellow w-3/4 h-1/2 rounded-3xl text-xl font-bold " >
                در وضعیت خوبی هستم
                </button>
            </div>
            <div class=" h-1/2 flex justify-center items-start ">
                <button class="bg-button-yellow w-3/4 h-1/2 rounded-3xl text-xl font-bold ">
                نیاز به کمک دارم
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Location