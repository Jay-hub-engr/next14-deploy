"use client";
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import anime from 'animejs'
import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    anime({
      targets: '.animated-content',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeOutQuad',
      delay: anime.stagger(300)
    });
  }, []);

  return (
    <section className='bg-slate-400'>
      <MaxWidthWrapper className=''>
        <div className='mx-auto text-center flex flex-col items-center rounded-[5%] animated-content'>
          <div className="py-10 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl border-4 rounded-xl mb-4">
              For questions or inquiries contact us <span className="text-gray-600">today</span>.
            </h1>

            <div className='mt-5'>
              <Image 
                src="/email1.png"
                width={100}
                height={100}
                alt="Email"
                className='animated-content'
              />
            </div>
            <div className='font-bold text-gray-800 text-2xl text-center mt-4'>Email:</div>
            <div className='font-sans text-xl text-center mt-2'>For all non-urgent inquiries please contact us via</div>
            <div className='font-sans text-xl text-center border-b-4 rounded-lg mt-2'>Info@Majesticdrywallandpaint.com</div>
            
            <div className='mt-10 items-center'>
              <Image 
                src="/career.png"
                width={100}
                height={100}
                alt="Careers"
                className='animated-content'
              />
            </div>
            <div className='font-bold text-gray-800 text-2xl text-center mt-4'>Careers:</div>
            <div className='font-sans text-xl text-center mt-2'>For information on careers please send resume to</div>
            <div className='font-sans text-xl text-center border-b-4 rounded-lg mt-2'>Careers@Majesticdrywallandpaint.com</div>
            
            <div className='mt-8'>
              <Image
                src="/phone.png"
                width={100}
                height={100}
                alt="Phone"
                className='animated-content'
              />
            </div>
            <div className='font-bold text-gray-800 text-2xl text-center mt-4'>Phone:</div>
            <div className='font-sans text-xl text-center mt-4'>For information regarding appointments please call</div>
            <div className='font-sans text-xl text-center border-b-4 rounded-lg mt-2'>
              Office: (720) 838-8011
            </div>
            
            <div className='mt-8'>
              <Image
                src="/mailbox.png"
                width={100}
                height={100}
                alt="P.O. Box"
                className='animated-content'
              />
            </div>
            <div className='font-bold text-gray-800 text-2xl text-center mt-4'>P.O. Box:</div>
            <div className='font-sans text-xl text-center mt-4'>Please send mailed checks to the following P.O. box</div>
            <div className='font-sans text-xl text-center border-b-4 rounded-lg mt-2'>2548</div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
