import Image from 'next/image'
import React from 'react'

function BookCoverPage() {
  return (
    <div>
        <Image src={'/educational.png'} alt='coverpage' width={500} height={500}/>
    </div>
  )
}

export default BookCoverPage