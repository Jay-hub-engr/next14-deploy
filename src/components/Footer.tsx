"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";

const Footer = () => {
    return(


<section className="border-t mt-3 border-gray-200 bg-gray-200">
      <MaxWidthWrapper className="grid grid-cols-1  gap-y-12 ">
        <div className="py-2 mx-auto flex flex-col items-center max-w-2xl">
          <Button variant={"outline"} className="font-bold">
          Licenced and Insured for over 20 years
          </Button>
          <div className="font-bold">Denver, Colorado est. 2007</div>
          
          </div>
        
        
      </MaxWidthWrapper>
    </section>
    )
}


export default Footer
