import { Metadata } from "next";
import Image from "next/image";
import SolarCard from "@/components/product/solar-card";
import { getAllProducts } from "@/lib/actions/product.actions";
import { Product } from "@/types";
import { SolarCarousel } from "@/components/product/solar-carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Αρχική",
};

const HomePage = async () => {
  const products: Product[] = await getAllProducts();

  return (
    <>
      <main className="flex flex-col items-center m-5 shadow-2xl">
        <section className="relative w-full min-h-[100vh]">
          <Image
            src="/images/sun.jpeg"
            alt="Sun"
            fill
            className="object-cover rounded-2xl"
            priority
          />

          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-400 drop-shadow-lg">
              Ηλιακή ενέργεια με επαγγελματική τοποθέτηση
            </h1>
            <p className="text-lg md:text-xl mt-2 text-orange-400 drop-shadow">
              Για κάθε σπίτι, για κάθε ανάγκη.
            </p>
            <div className="mt-4 flex gap-4">
              <Button asChild className="bg-orange-400">
                <Link href="/contact">Επικοινωνία</Link>
              </Button>
              <Button asChild className="hover:bg-orange-400" variant="default">
                <Link href="/product">Δες Προϊόντα</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Product card */}
      <div className="flex flex-wrap justify-center my-15 gap-15">
        {products.map((product) => (
          <SolarCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center w-full my-5">
        <SolarCarousel />
      </div>
    </>
  );
};

export default HomePage;
