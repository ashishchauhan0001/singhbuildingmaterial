'use client'
import Link from "next/link"
import achievements from "../data/acheivements.json"
import { BackgroundGradient } from "./ui/background-gradient"
import { log } from "console"

interface Course{
    id: number,
    title: string,
    certificate:string,
    description: string,
    img_url:string,
}
// console.log("ashish",achievements.certificates[0]);


function FeaturedCourses() {
   
  return (
    <div className="py-12 bg-black">
        <div>
            <div className="text-center">
                <p className="mt-2 mb-24 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Achivements 🎯</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {achievements.certificates.map((item:Course)=> (
                    <div key={item.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <img className="h-50 w-60 rounded-xl object-contain"
                                 src={item.img_url}/>
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{item.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{item.description}</p>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeaturedCourses