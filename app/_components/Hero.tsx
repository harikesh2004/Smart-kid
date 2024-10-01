import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='px-10 md:px-28 lg:px-44 h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='w-[350px] mt-10' >
                <h2 className='text-[47px] text-primary font-extrabold py-5'>Craft Magical Stories for kids in minutes</h2>
                <p className='text-1xl text-primary font-light'>Create fun and personalised stories that bring your child's adventures to life and spark their passion for reading.</p>
                <Link href={'/create-story'}>
                  <Button size='lg' color='primary' className='mt-9 font-bold text-[20px]'>Create Story</Button>
                </Link>
            </div>
            <div>
                <Image src={'/hero.png'} alt="hero" width={700} height={400} />
            </div>
        </div>
    </div> 
  )
}

export default Hero