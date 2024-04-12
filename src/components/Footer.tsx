"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

const Footer = () => {
    return(


<section className="border-t mt-sm border-gray-200 bg-slate-800">
      <MaxWidthWrapper className="grid grid-cols-1 text-center gap-y-2 ">
        <div className="py-2 mx-auto flex flex-col items-center max-w-2xl">
          <div className="font-lg text-gray-100 ">
          Licensed and insured for over 17 years
          </div>
          <div className="font-bold text-gray-100">est. 2007</div>
          <div className="font-lg text-gray-100">Denver, Colorado 
          </div>
          </div>
        
        
      </MaxWidthWrapper>
    </section>
    )
}


export default Footer
