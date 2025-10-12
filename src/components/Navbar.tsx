'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from 'next/navigation';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();

  // Function to close the mobile menu and reset the services state
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false); // Reset the services section
  };

  const handleMapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
    setTimeout(() => {
      const mapElement = document.getElementById('map');
      mapElement?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={cn("fixed top-6 inset-x-0 max-w-2xl mx-auto z-50 text-amber-300", className)}>
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive} >
          <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href="/product">
          <MenuItem  setActive={setActive} active={active} item="Our Products">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/product">PVC pipes</HoveredLink>
              <HoveredLink href="/product">Cements</HoveredLink>
              <HoveredLink href="/product">Corsent Dust</HoveredLink>
              <HoveredLink href="/product">Badarpur Dust</HoveredLink>
              <HoveredLink href="/product">Stone Rodi</HoveredLink>
            </div>
          </MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="text-sm grid md:grid-cols-2 grid-cols-1 gap-10 p-4">
              <ProductItem
                title="Home Delivery"
                href="#"
                src="https://images.pexels.com/photos/6994108/pexels-photo-6994108.jpeg?auto=compress&cs=tinysrgb&w=600"
                description="We also can deliver your building material to your door steps."
              />
              <ProductItem
                title="Loader"
                href="#"
                src="https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                description="We use Loader for bulk loading into trucks and trollies for fast deliveries."
              />
              <ProductItem
                title="Setring"
                href="#"
                src="https://cdn-media.buildersmart.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/shuttering-plywood1.jpg"
                description="All the Setring related items you can find in our shop."
              />
              <ProductItem
                title="Hardware Items"
                href="#"
                src="https://images.pexels.com/photos/4480531/pexels-photo-4480531.jpeg?auto=compress&cs=tinysrgb&w=600"
                description="PVC Pipes, India Seats, LM+ Doctor Fixed etc hardware items also available."
              />
            </div>
          </MenuItem>
          <Link href="/gallery">
            <MenuItem setActive={setActive} active={active} item="Gallery" />
          </Link>
          <Link href="#map" onClick={handleMapClick}>
            <MenuItem setActive={setActive} active={active} item="Maps" />
          </Link>
          <Link href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </Link>
        </Menu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center justify-between p-4 text-white shadow-[0_0_15px_rgba(128,128,128,0.5)] bg-black rounded-3xl">
        <div className="h-20 w-24 -mt-12">
          <Link href={"/"}>
          <img src="https://res.cloudinary.com/dmgjs6msq/image/upload/v1760248792/singh-building-material-high-resolution-logo-transparent_y2xwzk.png" alt="Logo" /> </Link>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-black text-white shadow-lg p-4 flex flex-col space-y-4">
          <Link href="/" onClick={closeMobileMenu}>Home</Link>
          <Link href="/product" onClick={closeMobileMenu}>Our Products</Link>
          <div onClick={() => setIsServicesOpen(!isServicesOpen)} className="cursor-pointer">
            Services
          </div>
          {isServicesOpen && (
            <div className="text-sm grid grid-cols-1 gap-4">
              <ProductItem
                title="Home Delivery"
                href="#"
                src="https://images.pexels.com/photos/6994108/pexels-photo-6994108.jpeg?auto=compress&cs=tinysrgb&w=600"
                description="We also can deliver your building material to your door steps."
              />
              <ProductItem
                title="Loader"
                href="#"
                src="https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                description="We use Loader for bulk loading into trucks and trollies for fast deliveries."
              />
              <ProductItem
                title="Setring"
                href="#"
                src="https://cdn-media.buildersmart.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/shuttering-plywood1.jpg"
                description="All the Setring related items you can find in our shop."
              />
              <ProductItem
                title="Hardware Items"
                href="#"
                src="https://images.pexels.com/photos/4480531/pexels-photo-4480531.jpeg?auto=compress&cs=tinysrgb&w=600"
                description="PVC Pipes, India Seats, LM+ Doctor Fixed etc hardware items also available."
              />
            </div>
          )}
          <Link href="/gallery" onClick={closeMobileMenu}>Gallery</Link>
          <Link href="#map" onClick={ (e)=> { handleMapClick(e); closeMobileMenu();}} >Maps</Link>
          <Link href="/contact" onClick={closeMobileMenu}>Contact Us</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;