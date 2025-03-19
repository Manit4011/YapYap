"use client";

import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
// import { useUser } from "@clerk/nextjs";

const Navbar = () => {

    // const user = useUser();
    // console.log(user.user?.id);
    return (
        <nav className="bg-cyan-800 dark:bg-gray-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-white dark:text-white">
                        <Link href="/">YapYap</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="md:flex space-x-6">
                        <Link href="/" className="text-white hover:text-blue-500">
                            Home
                        </Link>
                        <Link href="/forums" className="text-white hover:text-blue-500">
                            Forums
                        </Link>
                        <Link href="/chat" className="text-white hover:text-blue-500">
                            UserChat
                        </Link>
                        <UserButton/>
                    </div>

                    
                </div>
            </div>

            
        </nav>
    );
};

export default Navbar;
