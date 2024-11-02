import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="bg-gray-700 sticky top-0 inset-x-0 z-50 h-16">
      <header className="relative">
        <MaxWidthWrapper>
          <div className="flex justify-between items-center h-16 px-4">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/crown.png"
                  width={70}
                  height={35}
                  alt="Majestic Logo"
                  className="border-none"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <NavItems />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
