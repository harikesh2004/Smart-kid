'use client'

import React, { useState } from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'
import AgeGroup from './_components/AgeGroup'
import ImageStyle from './_components/ImageStyle'
import { Button } from '@nextui-org/button'

export interface fieldData{
  fieldName:string,
  fieldvalue:string
}

export interface formDataType{
  storySubject:string,
  storyType:string,
  imageStyle:string,
  ageGroup:string
}

function CreateStory() {

  const [formData,setFormData]=useState<formDataType>();

  const onHandleUserSelection=(data:fieldData)=>{
    console.log(data); 
    setFormData((prev:any)=>({
      ...prev,
      [data.fieldName]:data.fieldvalue
    }))
    console.log(formData)
  }
  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold text-[45px] text-primary text-center'>CREATE YOUR OWN STORY</h2>
      <p className='text-1xl text-primary text-center'>Unlock your creativity with AI: Craft stories like never before! let our AI bring your imagination to life, one story at a time</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>
        <StorySubjectInput userSelection={onHandleUserSelection} />
        <StoryType userSelection={onHandleUserSelection} />
        <AgeGroup userSelection={onHandleUserSelection}/>
        <ImageStyle userSelection={onHandleUserSelection}/>
      </div>
      <div className='flex justify-end my-10'>
        <Button color='primary' className='p-7 text-2xl'>Generate</Button>
      </div>
    </div>
  )
}

export default CreateStory