import React, { useEffect } from 'react'
import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    useDisclosure
  } from "@nextui-org/modal";
import Image from 'next/image';
import { div } from 'framer-motion/client';

function CustomLoader({isLoading}:any) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    useEffect(()=>{
        onOpen();
    },[])
  return (
    <div>
    {isLoading &&<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className='p-10 flex w-full items-center justify-center'>
                <Image src={'/loader.gif'} alt='loader' width={300} height={200} className='w-[200px] h-[200px]'/>
                <h2 className='font-bold text-1xl text-primary text-center'>Please Wait... Story is Generating</h2>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>}
      </div>
  )
}

export default CustomLoader