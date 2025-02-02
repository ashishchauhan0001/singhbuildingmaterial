'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Rampal Singh Chauhan',
      designation: 'Honorary Chairman',
      image:
        'https://media-hosting.imagekit.io//2afa6e3ea8ed4bce/dadanew.jpg?Expires=1833032260&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QDbmNGvRCgJQzPGcEpuWWzMMSAzysXnm2qX3GPFEF9CjogXGx1GPtoOlKojBTh0Bx7HMo-95F9FggIQUPgyuZXmXYFEuTyItzCxCEdGtl17fkM2XKjS8WvIZEdtlFfTN5fdt6YM2NAD9ixUA~P0O1fR1mFYTZ-CapGsEhmjZq26nvjpwJRBEUe387KBr8z1UcwUJ5gZQn0jXyhJy7mzTj~tHLcH-o2Vtlr3WQbb1dSE7T0v54uS35qOBaKOAGF-VarpJk9u4jcvVsiFxKV3FTSpccHEjcYCnUF7h1z-P7kk1LoiScTsdt~jQMQBndkgtagg0ylBC5G2LmF2JMtFegg__',
    },
    {
      id: 2,
      name: 'Rajesh Singh Chauhan',
      designation: 'Founder & CEO',
      image:
        'https://media-hosting.imagekit.io//b833b4c25b584adb/papajinew.jpg?Expires=1833031384&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WuEmvTnJerveRMsDnsvNAAB9VfYwtRHF0YYNNhDhFSEGhOK2TcUwpPlpYiVeVvC~UupxFpweaO3pnop9tRTUM~ZvxehUPmV1k1-zOuRvuWewpjwe7j7wbc-LvqzWI68BYfUq~W5y8Abli1YXxnFw3xeJ~~0Y0pNHK-d-KE9ARM3RBWwMMn8xWe3Kkmv0PzFQIXusAyl-fhe8Cm3GcY6i51qW5kQrx4QWmYRGqQvNLRDBGm-0Qr5FOvGpk16Vq1ZTenaHUkgCfOZ5t9pWlDr~sMSzOfjDkilHy0tl~Gj~aleurY~lW4x2ZH6iZputZKAHeE68IuIAs37GJ6bQYExcXg__',
    },
    {
      id: 3,
      name: 'Ashish Chauhan',
      designation: 'Executive Director',
      image:
        'https://media-hosting.imagekit.io//29c16681e0274f1f/ashishnew.jpg?Expires=1833032260&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VECZGzPKVh9HxKTZw7eMp6qnjHa8~1HtXFHiNbQ0d3xQuRtYBwRR3x9fShAHcvUIguCzvkVr~FT6yxjdLJ8~FcEsyijp-6U-PUflxm1AjRwqXfSPgIiCSXjzxu3NYUeaWoULNM0-16KO1wqs6KVX2WkgUzhubH9jNfMrQAnIv6-tztSIvDA6h-Ssb1QBuLtyaPq7vPsXr3YMCRH9bjTmHoVIiRmcu4GxeWkIspqOBP1ZV14xFR9VwooBkFhyWIUS~bbLTsww~uPQP4jjk7MgKnOud7JCdmz2-lmzK5WD7d0wiHPryxtyRGsWMN1UvZZYl3BXCYTfaZcu65vdP8QTBQ__',
    },
    {
      id: 4,
      name: 'Nitish Chauhan',
      designation: 'Director of Operations',
      image:
        'https://media-hosting.imagekit.io//12c71550ddff4f20/nitishnew.png?Expires=1833032260&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=V57kVcOWx~Kuc5Yb0G8riY8fQ1QSmDEllvj1d9yHwYl3sDNA2-x0jLgctdkECNEu5Br82~bqZW6qYxF~gz~hInzr6ciN7iY2WzdLr1dQauD~eDLY9cesve4MilWQPJ9HewR5xETe18qNUZ5kRxlBoP23skStofkqsW~bqpnpYcRiCcS48W-v6eGshHmBS0dFiBqqYpj3nnDtdV1XdqvH7u0~u-9yxpgJu8Ug3lPkpnKvjgpM~EcYsJzyO4Cw86sDfSMmr7T9sY7ZrN1XYL-05EjGe-UDQaZi6c2naakLRX1EThaRjlKzSwNVwXramjOa1SaDs3HnvL4mCQQ~nu64Zw__',
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