'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/products.json"

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
        <h1 className="text-4xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
          All Products ({courseData.courses.length})
        </h1>  
        <div className="flex flex-wrap justify-center">
            {courseData.courses.map((course, index) => (
                <CardContainer key={course.id || index} className="inter-var m-4">
                  <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-white"
                    >
                      {course.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className=" text-sm max-w-sm mt-2 text-neutral-300"
                    >
                      {course.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={course.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={course.title}
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
            ))}
        </div>  
    </div>
  )
}

export default page;
