import React, { useState } from 'react'
import { div } from 'framer-motion/client'
import Image from 'next/image'
function AgeGroup() {
    const OptionList=[

        {
            label:'0-2 Years',
            imageUrl:'/02Years.png',
            isFree:true

        },
        {
            label:'3-5 Years',
            imageUrl:'/35Years.png',
            isFree:true

        },
        {
            label:'5-8 Years',
            imageUrl:'/58Years.png',
            isFree:true

        }
    ]
    const [selectedOption,setSelectedOption]=useState<string>();
  return (
    <div>
        <label className='font-bold text-3xl text-primary'>3. Age Group</label>
        <div className='grid grid-cols-3 gap-5 mt-3'>
            {OptionList.map((item,index)=>(
                <div className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 ${selectedOption==item.label?'grayscale-0 border-2 rounded-3xl border-primary':'grayscale'}`} onClick={()=>setSelectedOption(item.label)}>
                    <h2 className='absolute bottom-5 text-white text-center text-[1.4rem] w-full'>{item.label}</h2>
                    <Image src={item.imageUrl} alt={item.label}
                        width={300}
                        height={500}
                        className='object-cover h-[260px] rounded-3xl'
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default AgeGroup