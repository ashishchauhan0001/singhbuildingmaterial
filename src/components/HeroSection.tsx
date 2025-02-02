import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";


function HeroSection() {
  return (
    <div
    className=" h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-32 md:py-0 bg-grid-white/[0.02]"
    >
        <Spotlight/>
      <Spotlight/>
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 p-auto  text-4xl md:text-7xl md:mt-16 font-serif bg-clip-text md:text-white text-amber-300"
            >Singh
            <br /> Building Material</h1>
            <p
            className="mt-16 font-normal text-base md:text-lg  text-slate-200 md:text-neutral-300 max-w-lg mx-auto"
            >Welcome to Singh Building Material, your trusted partner for top-quality construction supplies. We provide a wide range of building materials to ensure strength, durability, and excellence in every project. From cement to stone, we have everything you need to build your dream home or commercial space..</p>
            <div className=" mt-24 md:mt-4">
                <Link href={"/product"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-black text-white  border-slate-800"
                    >
                    Explore More
                    </Button>
                </Link>
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection