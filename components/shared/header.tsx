"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-background flex items-center p-5 bg-gradient-to-r from-[#A2C3E0] to-[#489CDF] ">
      {/* Logo  */}
      <div>
        <h1 className="text-md sm:text-2xl font-bold uppercase text-orange-400">
          Sun Solutions Co.
        </h1>
      </div>

      {/* Nav - right */}
      <div className="flex-1 flex justify-end items-center">
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-md">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Αρχική
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-500 transition-colors"
          >
            Επικοινωνία
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-500 transition-colors"
          >
            Σχετικά
          </Link>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden ml-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-2/3 bg-background">
            <SheetHeader>
              <h2 className="text-md font-semibold">Μενού</h2>
            </SheetHeader>
            <div className="m-4 flex flex-col space-y-6 font-mono text-sm">
              <Link
                href="/"
                className="hover:text-orange-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                Αρχική
              </Link>
              <Link
                href="/contact"
                className="hover:text-orange-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                Επικοινωνία
              </Link>
              <Link
                href="/about"
                className="hover:text-orange-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                Σχετικά
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
