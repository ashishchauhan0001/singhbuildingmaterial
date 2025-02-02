'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const customerFeedback = [
    {
      quote:
        "I've been purchasing building materials from this shop for years, and the quality has always been top-notch. Reliable products and excellent customer service!",
      name: "Rahul Verma",
      title: "Construction Contractor",
    },
    {
      quote:
        "The variety of hardware products available here is impressive. I always find what I need at reasonable prices. Highly recommended for all hardware needs!",
      name: "Amit Sharma",
      title: "Local Builder",
    },
    {
      quote:
        "This is my go-to place for cattle feed. The quality is unmatched, and my livestock has shown great health improvements. Truly a trusted supplier!",
      name: "Priya Singh",
      title: "Dairy Farm Owner",
    },
    {
      quote:
        "From cement to PVC pipes, this shop has it all. The owner is knowledgeable and always helps in choosing the right materials for my projects.",
      name: "Vikram Yadav",
      title: "Civil Engineer",
    },
    {
      quote:
        "We booked setring service for our building, and the stering was extremly strong. Everyone loved it! Great service and honest work.",
      name: "Anjali Mehta",
      title: "Local Builder",
    },
];

function CustomerFeedback() {
  return (
    <div className="h-[40rem] w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-white mb-8 z-10">Customer Voices: Our Commitment to Excellence</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={customerFeedback}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    </div>
  )
}

export default CustomerFeedback;
