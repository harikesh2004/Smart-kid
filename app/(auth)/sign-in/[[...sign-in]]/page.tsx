import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div>
            <Image src={"/login.png"} alt='Login' width={415} height={500} className='h-screen w-screen' />

        </div>
        <div className='flex justify-center items-center h-screen order-first md:order-last'>
            <SignIn />
        </div>

    </div>

  )
}