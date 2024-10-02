import React from 'react'
import { IoPlayCircle } from "react-icons/io5";


function StoryPages({storyChapter}:any) {
  const playSpeach=(text:string)=>{
    const synth=window?.speechSynthesis;
    const textToSpeach=new SpeechSynthesisUtterance(text);
    synth.speak(textToSpeach);
  }
  return (
    <div>
        <h2 className='text-2xl font-bold text-primary flex justify-between'>{storyChapter?.title}
          <span className='cursor-pointer' onClick={()=>playSpeach(storyChapter?.description)}><IoPlayCircle /></span>
        </h2>
        <p className='text-xl p-10 mt-3 rounded-lg bg-slate-100'>{storyChapter?.description}</p>
    </div>
  )
}

export default StoryPages