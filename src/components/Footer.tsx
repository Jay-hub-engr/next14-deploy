"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

const Footer = () => {
    return(


<section className="border-t mt-0 border-gray-200 bg-gray-200">
      <MaxWidthWrapper className="grid grid-cols-1 text-center gap-y-12 ">
        <div className="py-2 mx-auto flex flex-col items-center max-w-2xl">
          <div className="font-lg ">
          Licenced and Insured for over 20 years
          </div>
          <div className="font-bold">est. 2007</div>
          <div className="font-lg">Denver, Colorado 
          </div>
          </div>
        
        
      </MaxWidthWrapper>
    </section>
    )
}


export default Footer
