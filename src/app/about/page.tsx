"use client";
/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import Image from 'next/image'
import anime from 'animejs'
import { useEffect } from 'react'
import { span } from 'framer-motion/client';

export default function About() {
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
    <section className="border-t bg-slate-500 items-center">
      <MaxWidthWrapper className="py-5 bg-slate-400 items-center text-center">
        <div className='border-b text-center animated-content'>
          <h1 className='text-4xl mt-4 text-gray-700 font-bold'>
            Who are <span className='text-gray-50'>we?</span>
          </h1>
          <div className='text-xl mt-4 mb-4 text-gray-200 text-center items-center'>
            <p className='text-center'>
              At Majestic Drywall & Paint, we are more than just a family-owned business; we're a legacy built on generations of passion for craftsmanship and dedication to excellence. With deep-rooted values of integrity, reliability, and community, our family takes pride in delivering superior construction services tailored to the unique needs of our clients. From concept to completion, we prioritize communication, collaboration, and a personal touch, ensuring every project is executed with precision and care. With a commitment to quality workmanship and a reputation built on trust, Majestic is your partner in building the future, one project at a time.
            </p>
            <Image
              src="/nuclearfamily.png"
              width={200}
              height={150}
              alt="Family"
              className='mx-auto mt-5'
            />
          </div>
        </div>
        <div className='border-b text-center mt-2 animated-content'>
          <h1 className='text-4xl mt-4 text-gray-700 font-bold'>
            Our <span className='text-gray-50'>experience</span>
          </h1>
          <div className='text-xl mt-4 mb-4 text-gray-200 text-center'>
            <p>
              At Majestic, our experience speaks volumes. With decades of collective expertise in the construction industry, our team brings a wealth of knowledge and skill to every project we undertake. From residential renovations to commercial developments, we've navigated diverse challenges and honed our craft, delivering results that exceed expectations. Our commitment to continuous learning and innovation ensures that we stay ahead of the curve, offering our clients the latest techniques, materials, and solutions. Trust in our experience to guide you through every step of your construction journey, from inception to completion, with confidence and peace of mind.
            </p>
            <Image
              src="/teamwork1.png"
              width={200}
              height={150}
              alt="Teamwork"
              className='mx-auto mt-5'
            />
          </div>
        </div>
        <div className='text-center mt-2 mb-4 animated-content'>
          <h1 className='text-4xl mt-4 text-gray-700 font-bold'>
            What makes us <span className='text-gray-50'>different?</span>
          </h1>
          <div className='text-xl mt-4 mb-4 text-gray-200 text-center'>
            <p>
              At Majestic, we pride ourselves on being better because we prioritize every aspect of the construction process with unparalleled dedication. From our personalized approach to client collaboration to our unwavering commitment to quality craftsmanship and safety, we go above and beyond to exceed expectations. Our team's collective expertise, innovative solutions, and meticulous attention to detail set us apart in the industry, ensuring that each project is completed with excellence and integrity.
            </p>
            <Image
              src="/verifybadge.png"
              width={200}
              height={150}
              alt="Verification Badge"
              className='mx-auto mt-5'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
