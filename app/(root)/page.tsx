import { Metadata } from "next";
import Image from "next/image";
import SolarCard from "@/components/product/solar-card";
import { getAllProducts } from "@/lib/actions/product.actions";
import { Product } from "@/types";
import { SolarCarousel } from "@/components/product/solar-carousel";

export const metadata: Metadata = {
  title: "Αρχική",
};

const HomePage = async () => {
  const products: Product[] = await getAllProducts();

  return (
    <>
      <main className="flex flex-col items-center">
        {/* Hero image */}
        <Image
          src="/images/sun.jpeg"
          alt="Sun"
          width={1920}
          height={1080}
          priority
          className="w-full object-cover"
        />
      </main>
      {/* Product card */}
      <div className="flex flex-wrap justify-center my-15 gap-15">
        {products.map((product) => (
          <SolarCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center w-full my-10">
        <SolarCarousel />
      </div>
    </>
  );
};

export default HomePage;
