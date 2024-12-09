"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'; // Import icons

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Declare and initialize currentYear variable
    return(
        <section className=" border-gray-200 bg-slate-800">
            <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 text-center gap-y-2 py-4">
            


                <div className="mx-auto flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-gray-100 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/carlos-cortes-92b85662/" aria-label="LinkedIn">
                            <Linkedin className="w-6 h-6 text-gray-100 hover:text-white" />
                        </a>
                    </div>
                </div>

                <div className="mx-auto flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-gray-100 mb-4">Contact Us</h3>
                    <a href="tel:+1234567890" className="text-gray-100 hover:text-white">720-838-8011</a>
                    <a href="mailto:info@majestic.com" className="text-gray-100 hover:text-white">info@majestic.com</a>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Footer;
