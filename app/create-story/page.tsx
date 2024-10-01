'use client'

import React from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'
import AgeGroup from './_components/AgeGroup'
import ImageStyle from './_components/ImageStyle'

export interface fieldData{
  fieldName:string,
  fieldvalue:string
}
function CreateStory() {

  const onHandleUserSelection=(data:fieldData)=>{
    console.log(data); 
  }
  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold text-[45px] text-primary text-center'>CREATE YOUR OWN STORY</h2>
      <p className='text-1xl text-primary text-center'>Unlock your creativity with AI: Craft stories like never before! let our AI bring your imagination to life, one story at a time</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>
        <StorySubjectInput userSelection={onHandleUserSelection} />
        <StoryType/>
        <AgeGroup/>
        <ImageStyle/>
      </div>
    </div>
  )
}

export default CreateStory