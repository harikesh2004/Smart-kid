'use client'

import React, { useState } from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'
import AgeGroup from './_components/AgeGroup'
import ImageStyle from './_components/ImageStyle'
import { Button } from '@nextui-org/button'
import { chatSession } from '@/config/GeminiAi'
import { StoryData } from '@/config/schema'
import { db } from '@/config/db'
//@ts-ignore
import uuid4 from 'uuid4'
import CustomLoader from './_components/CustomLoader'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation';  // Correct import for Next.js 13+ (app directory)

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT

export interface fieldData {
  fieldName: string,
  fieldValue: string
}

export interface formDataType {
  storySubject: string,
  storyType: string,
  imageStyle: string,
  ageGroup: string
}

function CreateStory() {

  const [formData, setFormData] = useState<formDataType>();
  const [loading, setLoading] = useState(false);
  const notify = (msg: string) => toast(msg);
  const notifyError = (msg: string) => toast.error(msg);
  const router = useRouter();  // Initialize the router

  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue
    }));
    console.log(formData);
  }

  const GenerateStory = async () => {
    setLoading(true)
    const FINAL_PROMPT = CREATE_STORY_PROMPT
      ?.replace('{ageGroup}', formData?.ageGroup ?? '')
      .replace('{storyType}', formData?.storyType ?? '')
      .replace('{storySubject}', formData?.storySubject ?? '')
      .replace('{imageStyle}', formData?.imageStyle ?? '')
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const story = JSON.parse(result?.response.text());
      const resp = await SaveInDB(result?.response.text())
      console.log(resp)
      const storyId = resp?.[0]?.storyId;
      notify('Story Generated')
      router.push(`/ViewStory/${storyId}`);
      
      setLoading(false)
    } catch (e) {
      console.log(e)
      notifyError('Server Error')
      setLoading(false)
    }
  }

  const SaveInDB = async (output: string) => {
    const recordId = uuid4();
    setLoading(true);
    try {
      const result = await db.insert(StoryData).values({
        storyId: recordId,
        ageGroup: formData?.ageGroup,
        imageStyle: formData?.imageStyle,
        storySubject: formData?.storySubject,
        storyType: formData?.storyType,
        output: JSON.parse(output)
      }).returning({ storyId: StoryData.storyId })
      return result;
    } catch (e) {
      setLoading(false);
    }

  }

  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold text-[45px] text-primary text-center'>CREATE YOUR OWN STORY</h2>
      <p className='text-1xl text-primary text-center'>Unlock your creativity with AI: Craft stories like never before! let our AI bring your imagination to life, one story at a time</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>
        <StorySubjectInput userSelection={onHandleUserSelection} />
        <StoryType userSelection={onHandleUserSelection} />
        <AgeGroup userSelection={onHandleUserSelection} />
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>
      <div className='flex justify-end my-10'>
        <Button disabled={loading} color='primary' className='p-7 text-2xl' onClick={GenerateStory}>Generate</Button>
      </div>
      <CustomLoader isLoading={loading} />
    </div>
  )
}

export default CreateStory
