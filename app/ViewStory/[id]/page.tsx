'use client'
import { db } from '@/config/db'
import { StoryData } from '@/config/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip';
import BookCoverPage from '../_components/BookCoverPage'
import { div } from 'framer-motion/client'
import StoryPages from '../_components/StoryPages'
import LastPage from '../_components/LastPage'
import { Button } from '@nextui-org/button'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


function ViewStory({params}:any) {
        const bookRef=useRef();

    const [story,setStory]=useState<any>();
    useEffect(()=>{
        console.log(params.id)
        getStory();
    },[])

    const getStory=async ()=>{
        const result=await db.select().from(StoryData)
        .where(eq(StoryData.storyId,params.id));
        console.log(result[0]);
        setStory(result[0]);
    }

  return (
    <div className='p-10 md:px-20 lg:px-40 relative'>
        <h1 className='font-bold text-4xl text-center p-10 bg-primary text-white'>{story?.output?.story_name}</h1>
        <div className='relative'>
        {/* @ts-ignore */}
        <HTMLFlipBook width={500} height={500}
        showCover={true}
        className='mt-10'
        
        ref={bookRef}
        >
            <div>
            <BookCoverPage/>
            </div>
            {[...Array(story?.output?.chapters?.length)].map((item,index)=>(
                <div key={index} className='bg-white p-10 border'>
                    <StoryPages storyChapter={story?.output?.chapters[index]} />
                </div>
            ))} 
        </HTMLFlipBook>
        
        </div>
    </div>
  )
}

export default ViewStory