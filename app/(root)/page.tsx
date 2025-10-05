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
          src="/images/random/burjkhalifa.png"
          alt="Sun"
          width={1440}
          height={3200}
          priority
          className="w-full h-[100vh] object-cover"
        />
        {/* Slogan */}
        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-orange-500 max-w-lg">
          <h1 className="text-3xl font-bold dop-shadow-lg text-shadow-lg">
            Ηλιακή ενέργεια με επαγγελματική τοποθέτηση.
          </h1>
          <p className="text-lg mt-2 drop-shadow-lg text-shadow-lg">
            Για κάθε σπίτι, για κάθε ανάγκη.
          </p>
        </div>
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
