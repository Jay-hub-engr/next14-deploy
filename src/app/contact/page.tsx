import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function about  () {
  return (
    <MaxWidthWrapper>
    <div 
      className="py-10 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl border-">
          For questions or inquiries {''}
          <span 
          className="text-rose-600 ">
            contact us today
          </span>
          .
          </h1>
          <div className='mt-10 mx-auto text-center flex flex-col items-center'>
          <Image 
                src="/email.png"
                width={100}
                height={100}
                alt="Picture of the author"
                  />
                  <div className='font-bold text-2xl text-center mt-4'>Email:</div>
                  <div className='font-sans text-xl text-center mt-2'>Info@Majesticdrywallandpaint.com</div>
                  <div className='font-bold text-2xl text-center mt-4'>Careers:</div>
                  <div className='font-sans text-xl text-center mt-2'>Careers@Majesticdrywallandpaint.com</div>
                  <Image className='mt-8'
                src="/phone.png"
                width={100}
                height={100}
                alt="Picture of the author"
                  />
                  <div className='font-bold text-2xl text-center mt-4'>Phone:</div>
                  <div className='font-sans text-xl text-center mt-2'>
                    (720) 838-8011
                    </div>
                  <Image className='mt-8'
                src="/mailbox.png"
                width={100}
                height={100}
                alt="Picture of the author"
                  />
                  <div className='font-bold text-2xl text-center mt-4'>P.O. Box:</div>
                  <div className='font-sans text-xl text-center mt-2'>2548</div> 
          </div>


      </div>
    </MaxWidthWrapper>
    
  )
}

