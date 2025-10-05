"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const images = [
  { src: "/images/carousel/IMG_5492.jpeg", alt: "Solar panel 1" },
  { src: "/images/carousel/IMG_6830.jpeg", alt: "Solar panel 2" },
  { src: "/images/carousel/IMG_6832.jpeg", alt: "Solar panel 3" },
  { src: "/images/carousel/IMG_8573.jpeg", alt: "Solar panel 4" },
  { src: "/images/carousel/IMG_8784.jpeg", alt: "Solar panel 5" },
  { src: "/images/carousel/IMG_8788.jpeg", alt: "Solar panel 6" },
];

export function SolarCarousel() {
  return (
    <Carousel
      className="w-full p-5"
      plugins={[
        Autoplay({ delay: 4000, stopOnInteraction: false }), // ⏱ every 4s
      ]}
    >
      <CarouselContent>
        {images.map((img, i) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <Image
                src={img.src}
                alt={img.alt}
                width={430}
                height={932}
                className="rounded-2xl object-cover w-full h-96"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
