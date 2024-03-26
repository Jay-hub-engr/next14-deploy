import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from "next/image"
import NavItems from "./NavItems"
import Menu from "./menu"


const Navbar = () => {
    return(
        <div className="bg-gray-100 sticky z-=50 top-0 inset-x-0 h-16">
            <header className="relative bg-gray-50">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-300">
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
                            <div className="hidden z-50 lg:block lg:self-stretch text-2xl font-bold mt-5 ml-5">
                                <NavItems/>
                            </div>
                            <div className="float-right">
                                <Menu/>
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