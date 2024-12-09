"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Drill, Fence, Flame, Ghost, Hammer, Handshake, HardHat, icons, Leaf, PaintRoller, Snowflake, ThumbsUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import { FiRefreshCcw, FiDroplet, FiCloudSnow, } from "react-icons/fi";
import { Battery0Icon, ExclamationCircleIcon, FireIcon } from "@heroicons/react/16/solid";
import { BsExclamation } from "react-icons/bs";
import { FaBatteryFull } from "react-icons/fa";
import { FcChargeBattery } from "react-icons/fc";
import ServiceAreaMap from "@/components/map";




const perks = [{ name: 'Paint', Icon: PaintRoller, description:"Majestic boasts a skilled team of artisans who possess a keen eye for detail and precision. Utilizing advanced techniques and high-quality materials, we consistently achieve flawless finishes that exceed industry standards." }, 
  { name: 'Drywall', Icon: Hammer, description:"Majestic excels in drywall services, we showcase unmatched expertise in the installation, repair, and finishing of drywall surfaces. " }, 
  { name: 'Carpentry', Icon: Drill, description:"Our carpentry prowess is renowned for its craftsmanship, precision, and versatility. With a team of highly skilled artisans and carpenters, we excel in creating custom woodwork of exceptional quality and durability." }, 
  { name: 'Custom work', Icon: Fence, description:"At Majestic we specialize in bringing your unique vision to life through our bespoke custom work. With meticulous attention to detail and a passion for creativity, we collaborate closely with each client to understand their individual style, preferences, and needs." }, 
  { name: 'Safety', Icon: HardHat, description:"Safety is our top priority. We are committed to providing a secure working environment for our team members, subcontractors, and clients alike. Through rigorous training, adherence to industry standards, and implementation of comprehensive safety protocols, we ensure that every aspect of our projects prioritizes the well-being of all involved. " }, 
  { name: 'Guaranteed Quality', Icon: Handshake, description:"At Majestic, we stand behind our work with an unwavering commitment to quality assurance. Our guarantee of quality is more than just a promise; it's a cornerstone of our reputation. From the selection of premium materials to the meticulous craftsmanship of our skilled artisans, we take every measure to ensure that each project meets or exceeds the highest industry standards. " }, 
]

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      const popupShown= localStorage.getItem('popupShown');
      if (!popupShown) {
        setTimeout(() => setShowPopup(true), 3000);
        localStorage.setItem('popupShown', 'true');
      }

    anime({
      targets: '.animated-content',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeOutQuad',
      delay: anime.stagger(1000),
    });
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <>
{showPopup && ( <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"> <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg mx-auto"> <h2 className="text-2xl font-bold mb-4">Welcome to Majestic Drywall and Paint!</h2> <p className="mb-4">From our family to yours...</p> <p className="mb-4 font-bold">Here are some seasonal tips to keep your home safe this winter:</p> <ul className="text-left mb-4 space-y-2"> <li className="flex items-center"><Flame className="mr-2 text-red-500" /> Prevent house fires by regularly checking your smoke alarms.</li> <li className="flex items-center"><Snowflake className="mr-2 text-blue-500" /> Insulate pipes to avoid them freezing and bursting.</li> <li className="flex items-center"><Leaf className="mr-2 text-blue-300" /> Make sure gutters are clean to avoid ice dams.</li> <li className="flex items-center"><FcChargeBattery className="mr-2 text-yellow-500" /> Keep an emergency kit handy in case of power outages.</li> </ul> <button onClick={closePopup} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"> Close </button> </div> </div> )}<section className="bg-slate-400">
        <MaxWidthWrapper className="">
          <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl bg-black-100 animated-content">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl border-md">
              Every job, all the time done {' '}
              <span className="text-gray-50 border-b-4 rounded-lg">
                right
              </span>.
            </h1>
            <p className="mt-6 text-xl max-w-prose text-gray-800">
              As a family-run enterprise, Majestic handles every disaster recovery situation with tailored care, understanding, and sympathy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 border border-gray-100 rounded-md shadow-md">
              <Link href='/about' className={buttonVariants({ variant: "default", size: "lg" })}>About</Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href='/contact' className={buttonVariants({ variant: "outline", size: "lg" })}>Contact Us</Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 items-center">
              <Link href={"https://www.linkedin.com/in/carlos-cortes-92b85662/"}>
                <Image
                  src="/linkedin.png"
                  width={80}
                  height={80}
                  alt="Linkedin"
                  className='mx-auto mt-3 flex flex-col items'
                />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="border- bg-slate-500">
        <MaxWidthWrapper className="py-5">
          <div className="flex-center text-center text-xl font-bold mb-6 text-gray-50">What we do</div>
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center border-t md-flex md:items-start md:text-left lg:block lg:text-center animated-content">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full mt-5 bg-gray-50 text-black-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base text-center font-medium text-gray-100">
                    {perk.name}
                  </h3>
                  <p className="mt-2 mb-4 text-md font-semibold text-slate-900">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="bg-slate-300">
        <MaxWidthWrapper >
        <ServiceAreaMap />
        </MaxWidthWrapper>
      </section>
    </>
  );
}
