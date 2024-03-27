import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from "next/image"
import NavItems from "./NavItems"

const Navbar = () => {
    return(
        <div className="backdrop-blur-[50px] border-gray-300 grid-col-3 sticky z-=50 top-0 inset-x-0 h-16">
            
            <header className="relative ">
                <MaxWidthWrapper>
                    <div className="border-b ">
                        
                        <div className="flex justify-content:space-between align-items:center h-16 items-center">
                            

                            <div className="ml-4 flex mt-2 lg:ml-0">
                                <Link href="/">
                            <Image
                            src="/crown.png"
                            width={70}
                            height={35}
                            alt="Picture of the author"
                          />
                            </Link>
                            </div>
                            <div className=" z-50 lg:block lg:self-stretch text-2xl font-bold mt-5 ml-5">
                                <NavItems/>
                            </div>
                            </div>
                            <div>
                            <div>          
                            </div>
                            <div >
                            </div>
                        </div>

                    </div>
                </MaxWidthWrapper>

            </header>
        </div>
    )
}
export default Navbar