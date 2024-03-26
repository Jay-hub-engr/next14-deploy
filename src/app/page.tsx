"use client";

import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Drill, Fence, Ghost, Hammer, Handshake, HardHat, PaintRoller, ThumbsUp } from "lucide-react";
import Link from "next/link";


const perks = [{
  name: 'Paint',
  Icon: PaintRoller,
  description:"Majestic boasts a skilled team of artisans who possess a keen eye for detail and precision. Utilizing advanced techniques and high-quality materials, we consistently achieve flawless finishes that exceed industry standards."
},
{
  name: 'Drywall',
  Icon: Hammer,
  description:"Majestic excels in drywall services, we showcase unmatched expertise in the installation, repair, and finishing of drywall surfaces. "
},
{
  name: 'Carpentry',
  Icon: Drill,
  description:"Our carpentry prowess is renowned for its craftsmanship, precision, and versatility. With a team of highly skilled artisans and carpenters, we excel in creating custom woodwork of exceptional quality and durability."
},
{
  name: 'Custom work',
  Icon: Fence,
  description:"At Majestic we specialize in bringing your unique vision to life through our bespoke custom work. With meticulous attention to detail and a passion for creativity, we collaborate closely with each client to understand their individual style, preferences, and needs."
},
{
  name: 'Safety',
  Icon: HardHat,
  description:"Our carpentry prowess is renowned for its craftsmanship, precision, and versatility. With a team of highly skilled artisans and carpenters, we excel in creating custom woodwork of exceptional quality and durability."
},
{
  name: 'Guaranteed Quality',
  Icon: Handshake,
  description:"Safety is our top priority. We are committed to providing a secure working environment for our team members, subcontractors, and clients alike. Through rigorous training, adherence to industry standards, and implementation of comprehensive safety protocols, we ensure that every aspect of our projects prioritizes the well-being of all involved. "
},

]


export default function Home() {
  return (
  <>
    <MaxWidthWrapper>
      <div 
      className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl border-">
          The place for high-quality {''}
          <span 
          className="text-rose-600">
            Craftsmanship
          </span>
          .
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          As a family-run enterprise, Majestic handles every disaster recovery situation with tailored care, understanding, and sympathy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href='/about' className={buttonVariants({variant:"default", size:"lg"})}>About</Link>

          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6"><Link href='/contact' className={buttonVariants({variant:"outline", size:"lg"})}>Contact Us</Link></div>
      </div>
    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-5">
        <div className="grid grid-cols-1  gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) =>(
            <div key={perk.name} className="text-center md-flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-black-900">
                  {<perk.Icon className="w-1/3 h-1/3 "/>}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base text-center font-medium text-gray-900">
                  {perk.name}
                </h3>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                  </div>
            </div>
            
            
            
          ))}
        </div>
      </MaxWidthWrapper>
    </section>

    </>
  );
}
