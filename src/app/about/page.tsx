/* eslint-disable react/no-unescaped-entities */
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import Image from 'next/image'

export default function about  () {
  return (
    <MaxWidthWrapper>
    <div 
      className="py-10 mt-4 mx-auto text-center flex flex-col items-center max-w-6xl  bg-gray-100">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Who are  {''}
          <span 
          className="text-rose-600">
            we
          </span>
          ?
          </h1>
          
          <p className="mt-6 text-3xl font-roboto w-full text-muted-foreground ">
          At Majestic Drywall & Paint, we are more than just a family-owned business; we&apos;re a legacy built on generations of passion for craftsmanship and dedication to excellence. With deep-rooted values of integrity, reliability, and community, our family takes pride in delivering superior construction services tailored to the unique needs of our clients. From concept to completion, we prioritize communication, collaboration, and a personal touch, ensuring every project is executed with precision and care. With a commitment to quality workmanship and a reputation built on trust, Majestic is your partner in building the future, one project at a time.</p>
          <div>
          <Image 
                src={"/family.png"}
                width={100}
                height={100}
                alt={"Picture of the author"}
                className={'mt-4'}
                  />
                  </div>
          </div>
          <div 
      className="py-10 mt-4 mx-auto text-center flex flex-col items-center max-w-6xl  bg-gray-100">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Our  {''}
          <span 
          className="text-rose-600">
            experience
          </span>
          ?
          </h1>
          <p className="mt-6 text-3xl font-roboto w-full text-muted-foreground ">
          At Majestic, our experience speaks volumes. With decades of collective expertise in the construction industry, our team brings a wealth of knowledge and skill to every project we undertake. From residential renovations to commercial developments, we&apos;ve navigated diverse challenges and honed our craft, delivering results that exceed expectations. Our commitment to continuous learning and innovation ensures that we stay ahead of the curve, offering our clients the latest techniques, materials, and solutions. Trust in our experience to guide you through every step of your construction journey, from inception to completion, with confidence and peace of mind.</p>
          <div>
          <Image 
                src={"/teamwork.png"}
                width={150}
                height={150}
                alt={"Picture of the author"}
                className={'mt-4'}
                  />
                  </div>
                </div>
          
          <div className="py-10 mt-4 mx-auto text-center flex flex-col items-center max-w-6xl  bg-gray-100">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          What makes us {''}
          <span 
          className="text-rose-600">
            better
          </span>
          ?
          </h1>
          <p className="mt-6 text-3xl font-roboto w-full text-muted-foreground ">
          At Majestic, our experience speaks volumes. With decades of collective expertise in the construction industry, our team brings a wealth of knowledge and skill to every project we undertake. From residential renovations to commercial developments, we&apos;ve navigated diverse challenges and honed our craft, delivering results that exceed expectations. Our commitment to continuous learning and innovation ensures that we stay ahead of the curve, offering our clients the latest techniques, materials, and solutions. Trust in our experience to guide you through every step of your construction journey, from inception to completion, with confidence and peace of mind.</p>
          <div>
          <Image 
                src={"/teamwork.png"}
                width={150}
                height={150}
                alt={"Picture of the author"}
                className={'mt-4'}
                  />
                  </div>
                </div>
    </MaxWidthWrapper>
    
  )
}

