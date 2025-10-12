'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Rampal Singh Chauhan',
      designation: 'Honorary Chairman',
      image:
        'https://res.cloudinary.com/dmgjs6msq/image/upload/v1760244451/dadanew_ciefrn.jpg'
    },
    {
      id: 2,
      name: 'Rajesh Singh Chauhan',
      designation: 'Founder & CEO',
      image:
        'https://res.cloudinary.com/dmgjs6msq/image/upload/v1760244452/papajinew_oxujhg.jpg'
    },
    {
      id: 3,
      name: 'Ashish Chauhan',
      designation: 'Executive Director',
      image:
        'https://res.cloudinary.com/dmgjs6msq/image/upload/v1760244452/ashishnew_d3pdw4.jpg'
    },
    {
      id: 4,
      name: 'Nitish Chauhan',
      designation: 'Director of Operations',
      image:
        'https://res.cloudinary.com/dmgjs6msq/image/upload/v1760244451/nitishnew_nlzlkk.png'
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className=" w-full max-w-7xl mx-auto flex flex-col items-center justify-center  md:h-full">
            <h2 className=" -mt-32 md:mt-0 text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Founder
           </h2>
            <p className="text-base md:text-lg text-white text-center mb-4"> Discover the visionary entrepreneur behind our success.</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors