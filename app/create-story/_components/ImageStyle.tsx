import { div } from 'framer-motion/client'
import Image from 'next/image'
import React, { useState } from 'react'

function ImageStyle() {
    const OptionList=[

        {
            label:'3D Cartoon',
            imageUrl:'/3D.png',
            isFree:true

        },
        {
            label:'Paper Cut',
            imageUrl:'/paperCut.png',
            isFree:true

        },
        {
            label:'Water Color',
            imageUrl:'/educational.png',
            isFree:true

        },
        {
            label:'Pixel Style',
            imageUrl:'/pixel.png',
            isFree:true

        }
    ]
    const [selectedOption,setSelectedOption]=useState<string>();
  return (
    <div>
        <label className='font-bold text-3xl text-primary'>4. Image Type</label>
        <div className='grid grid-cols-3 gap-5 mt-3'>
            {OptionList.map((item,index)=>(
                <div className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 ${selectedOption==item.label?'grayscale-0 border-2 rounded-3xl border-primary':'grayscale'}`} onClick={()=>setSelectedOption(item.label)}>
                    <h2 className='absolute bottom-5 text-white text-center text-[1.4rem] w-full'>{item.label}</h2>
                    <Image src={item.imageUrl} alt={item.label}
                        width={300}
                        height={500}
                        className='object-cover h-[120px] rounded-3xl'
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageStyle