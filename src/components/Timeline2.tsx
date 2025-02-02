import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Timeline2() {
  const data = [
    {
      title: "2002",
      content: (
        <div>
          <h2 className="font-bold">The Beginning of My Entrepreneurial Journey</h2>
          <p className="text-slate-400 text-sm md:text-sm font-normal mb-8">
          After graduating, I decided to start my own business and opened a hardware store with a wide range of products like nails, pipes, and other essentials. I began in a rented shop, working hard to build a strong reputation through quality and customer service.

          </p>
        </div>
      ),
    },
    {
      title: "2004",
      content: (
        <div>
         <h2 className="font-bold">Expanding into the Cattle Food Business</h2>
          <p className="text-slate-400  text-sm md:text-sm font-normal mb-8">
          Seeing an opportunity, I expanded into the cattle food industry, offering different categories of feed. This move helped me reach more customers and added stability to my growing business.
          </p>
        </div>
      ),
    },{
      title: "2012",
      content: (
        <div>
         <h2 className="font-bold">A Major Milestone: Owning My Own Shop
                   </h2>
          <p className="text-slate-400  text-sm md:text-sm font-normal mb-8">
          After a decade of hard work, I built and owned my own shop, a major milestone in my journey. I also expanded into building materials, selling cement, Rodi, Badarpur, and dust, further strengthening my business.
          </p>
        </div>
      ),
    },{
      title: "2013",
      content: (
        <div>
         <h2 className="font-bold">Venturing into the Setring Business
         </h2>
          <p className="text-slate-400  text-sm md:text-sm font-normal mb-8">
          With my foundation strong, I stepped into the Setring industry. Managing multiple businesses was challenging, but it helped me grow and create new income opportunities.
          </p>
    </div>
  
      ),
    },{
      title: "2015",
      content: (
        <div>
         <h2 className="font-bold">Strengthening My Business with PVC Products
         </h2>
          <p className="text-slate-400  text-sm md:text-sm font-normal mb-8">
          To keep up with demand, I introduced PVC pipes and seats, reinforcing my presence in the hardware and construction sector. Adapting to market needs ensured steady growth and long-term success.
          </p>
        </div>
      ),
    },
    
  ];
  return (
    <div className="w-3/4 mt-12 md:mt-0 md:ml-60">
      <Timeline data={data} />
    </div>
  );
}
