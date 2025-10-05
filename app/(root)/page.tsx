import { Metadata } from "next";
import Image from "next/image";
import SolarCard from "@/components/product/solar-card";
import { getAllProducts } from "@/lib/actions/product.actions";
import { Product } from "@/types";
import { SolarCarousel } from "@/components/product/solar-carousel";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Αρχική",
};

const HomePage = async () => {
  const products: Product[] = await getAllProducts();

  return (
    <>
      <main className="w-full bg-gradient-to-r from-[#A2C3E0] to-[#489CDF] rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
          Ηλιακή ενέργεια με επαγγελματική τοποθέτηση
        </h1>
        <p className="text-lg text-white">Για κάθε σπίτι, για κάθε ανάγκη.</p>
        <div className="mt-4 flex justify-center gap-4">
          <Button className="bg-orange-400">Ζήτα Προσφορά</Button>
          <Button variant="outline">Δες Προϊόντα</Button>
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
